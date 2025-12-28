import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchStudents, addStudent, updateStudent, deleteStudent } from './features/stutents/studentThunk';
import { FaUserPlus, FaEdit, FaTrash, FaSave, FaTimes, FaUserGraduate, FaSpinner, FaCheck, FaMoon, FaSun, FaSearch, FaFilter, FaTh, FaList } from 'react-icons/fa';

function App() {
  const [name, setName] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [animatingCards, setAnimatingCards] = useState(new Set());
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [showStats, setShowStats] = useState(true);
  const [viewMode, setViewMode] = useState("grid"); // grid or list
  const [filterActive, setFilterActive] = useState(false);
  const dispatch = useDispatch();
  const students = useSelector((state) => state.student.list);
  const loading = useSelector((state) => state.student.loading);

  useEffect(() => {
    dispatch(fetchStudents());
    // Trigger page load animation
    setTimeout(() => setIsLoaded(true), 100);

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, [dispatch]);

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const filteredStudents = students
    .filter(student =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });

  const handleAddStudent = () => {
    if (name.trim()) {
      dispatch(addStudent({ name: name.trim() }));
      setName("");
      setSuccessMessage("Student added successfully!");
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      // Add animation before deletion
      setAnimatingCards(prev => new Set([...prev, id]));
      setTimeout(() => {
        dispatch(deleteStudent(id));
        setSuccessMessage("Student deleted successfully!");
      }, 300);
    }
  };

  const handleUpdate = (student) => {
    setEditingId(student.id);
    setEditName(student.name);
  };

  const handleSaveUpdate = (id) => {
    if (editName.trim()) {
      dispatch(updateStudent({ id, name: editName.trim() }));
      setEditingId(null);
      setEditName("");
      setSuccessMessage("Student updated successfully!");
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditName("");
  };

  const handleKeyDown = (e, action) => {
    if (e.key === 'Enter') {
      action();
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100 animate-gradient'}`}>
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Success Message */}
        {successMessage && (
          <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-bounce-in flex items-center gap-2">
            <FaCheck className="text-sm" />
            {successMessage}
          </div>
        )}

        {/* Header */}
        <div className={`text-center mb-8 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {/* Dark Mode Toggle */}
          <div className="flex justify-end mb-4">
            <button
              onClick={toggleDarkMode}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale focus-ring"
            >
              {darkMode ? (
                <FaSun className="text-yellow-500 text-xl animate-pulse-custom" />
              ) : (
                <FaMoon className="text-blue-600 text-xl animate-float" />
              )}
            </button>
          </div>

          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6 shadow-2xl animate-glow">
            <FaUserGraduate className="text-white text-3xl" />
          </div>
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-3 text-shadow">
            Student Management
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
            Manage your students with style and efficiency
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Stats Dashboard */}
        {showStats && (
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 ${isLoaded ? 'animate-slide-down stagger-1' : 'opacity-0'}`}>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover-lift border-l-4 border-blue-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Total Students</p>
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">{students.length}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <FaUserGraduate className="text-blue-600 text-xl" />
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover-lift border-l-4 border-green-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Active Students</p>
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">{filteredStudents.length}</p>
                </div>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <FaCheck className="text-green-600 text-xl" />
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover-lift border-l-4 border-purple-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">System Status</p>
                  <p className="text-lg font-bold text-green-600">Online</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Add Student Form */}
        <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8 hover-lift border border-gray-100 dark:border-gray-700 ${isLoaded ? 'animate-slide-in-left stagger-2' : 'opacity-0'}`}>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <FaUserPlus className="text-blue-600" />
            Add New Student
          </h2>
          <div className="flex gap-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, handleAddStudent)}
              placeholder="Enter student name"
              className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 dark:text-white dark:bg-gray-700 transition-all duration-200 hover:border-blue-400"
              disabled={loading}
            />
            <button
              onClick={handleAddStudent}
              disabled={loading || !name.trim()}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium flex items-center gap-2 btn-press hover-scale"
            >
              {loading ? <FaSpinner className="animate-spin" /> : <FaUserPlus />}
              {loading ? 'Adding...' : 'Add Student'}
            </button>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6 hover-lift ${isLoaded ? 'animate-slide-in-right stagger-3' : 'opacity-0'}`}>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search students..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
              />
            </div>
            <div className="flex gap-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="name">Sort by Name</option>
              </select>
              <button
                onClick={() => setShowStats(!showStats)}
                className="px-4 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center gap-2"
              >
                <FaFilter />
                {showStats ? 'Hide' : 'Show'} Stats
              </button>
              <button
                onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                className="px-4 py-3 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-200 flex items-center gap-2"
                title={`Switch to ${viewMode === 'grid' ? 'list' : 'grid'} view`}
              >
                {viewMode === 'grid' ? <FaList /> : <FaTh />}
              </button>
            </div>
          </div>
        </div>

        {/* Students List */}
        <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover-lift ${isLoaded ? 'animate-fade-in-scale stagger-4' : 'opacity-0'}`}>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                <FaUserGraduate className="text-white text-xl" />
              </div>
              Students ({filteredStudents.length})
            </h2>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {searchTerm && `Filtered from ${students.length} students`}
            </div>
          </div>

          {loading && students.length === 0 ? (
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 dark:bg-gray-600 rounded-full skeleton"></div>
                    <div className="flex-1">
                      <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded skeleton mb-2"></div>
                      <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded skeleton w-1/3"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredStudents.length === 0 && students.length > 0 ? (
            <div className="text-center py-16 animate-fade-in-scale">
              <FaSearch className="text-gray-400 text-6xl mb-4 mx-auto" />
              <h3 className="text-2xl font-medium text-gray-600 dark:text-gray-400 mb-2">No students found</h3>
              <p className="text-gray-500 dark:text-gray-500">Try adjusting your search terms</p>
            </div>
          ) : filteredStudents.length === 0 ? (
            <div className="text-center py-16 animate-fade-in-scale">
              <FaUserGraduate className="text-gray-400 text-6xl mb-4 mx-auto hover-rotate" />
              <h3 className="text-2xl font-medium text-gray-600 dark:text-gray-400 mb-2">No students yet</h3>
              <p className="text-gray-500 dark:text-gray-500 mb-6">Add your first student to get started!</p>
              <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium">
                <FaUserPlus />
                <span>Use the form above to add students</span>
              </div>
            </div>
          ) : (
            <div className={viewMode === 'grid' ? 'grid gap-6 md:grid-cols-2 lg:grid-cols-3' : 'space-y-4'}>
              {filteredStudents.map((student, index) => (
                <div
                  key={student.id}
                  className={`group ${
                    viewMode === 'grid'
                      ? 'bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-6'
                      : 'bg-white dark:bg-gray-800 rounded-xl p-5 flex items-center justify-between'
                  } border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 hover-lift hover-glow ${
                    isLoaded ? `animate-fade-in-scale stagger-${Math.min(index + 5, 6)}` : 'opacity-0'
                  } ${animatingCards.has(student.id) ? 'animate-shake' : ''}`}
                >
                  {editingId === student.id ? (
                    <div className={`space-y-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-semibold text-lg">
                            {editName.charAt(0).toUpperCase() || '?'}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Editing...</span>
                      </div>
                      <input
                        type="text"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        onKeyDown={(e) => handleKeyDown(e, () => handleSaveUpdate(student.id))}
                        className="w-full px-4 py-3 border-2 border-blue-200 dark:border-blue-700 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 dark:bg-gray-600 dark:text-white transition-all duration-200 text-lg"
                        autoFocus
                      />
                      <div className="flex gap-3">
                        <button
                          onClick={() => handleSaveUpdate(student.id)}
                          className="flex-1 px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-4 focus:ring-green-500/30 transition-all duration-300 font-semibold flex items-center justify-center gap-2 btn-press hover-scale"
                        >
                          <FaSave className="text-sm" />
                          Save
                        </button>
                        <button
                          onClick={handleCancelEdit}
                          className="flex-1 px-4 py-3 bg-gray-500 text-white rounded-xl hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-500/30 transition-all duration-300 font-semibold flex items-center justify-center gap-2 btn-press hover-scale"
                        >
                          <FaTimes className="text-sm" />
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : viewMode === 'grid' ? (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:animate-pulse-custom">
                            <span className="text-white font-bold text-xl">
                              {student.name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                              {student.name}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Student ID: {student.id.slice(-6)}
                            </p>
                          </div>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <button
                          onClick={() => handleUpdate(student)}
                          className="flex-1 px-4 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-xl hover:from-yellow-600 hover:to-orange-600 focus:outline-none focus:ring-4 focus:ring-yellow-500/30 transition-all duration-300 font-semibold flex items-center justify-center gap-2 btn-press hover-scale"
                        >
                          <FaEdit className="text-sm" />
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(student.id)}
                          className="flex-1 px-4 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-4 focus:ring-red-500/30 transition-all duration-300 font-semibold flex items-center justify-center gap-2 btn-press hover-scale"
                        >
                          <FaTrash className="text-sm" />
                          Delete
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center gap-4 flex-1">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-md">
                          <span className="text-white font-bold text-lg">
                            {student.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                            {student.name}
                          </h3>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            ID: {student.id.slice(-6)}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleUpdate(student)}
                          className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 font-medium flex items-center gap-2 btn-press"
                        >
                          <FaEdit className="text-sm" />
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(student.id)}
                          className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 font-medium flex items-center gap-2 btn-press"
                        >
                          <FaTrash className="text-sm" />
                          Delete
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
