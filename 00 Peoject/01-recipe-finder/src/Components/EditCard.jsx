function EditCard({ title, description, onCancel, onSave, id }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedData = {
      id,
      title: formData.get("title"),
      description: formData.get("description"),
    };
    onSave(updatedData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center p-6 z-50 animate-fadeIn">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg transform transition-all animate-slideUp"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Edit Recipe</h2>
          <button
            type="button"
            onClick={onCancel}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="mb-6">
          <label
            htmlFor="title"
            className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide"
          >
            Recipe Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            defaultValue={title}
            required
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-amber-500 transition-colors duration-300 text-gray-800"
          />
        </div>

        <div className="mb-8">
          <label
            htmlFor="description"
            className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide"
          >
            Instructions
          </label>
          <textarea
            name="description"
            id="description"
            rows="8"
            defaultValue={description}
            required
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-amber-500 transition-colors duration-300 text-gray-800 resize-none"
          ></textarea>
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="flex-1 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Save Changes
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditCard;
