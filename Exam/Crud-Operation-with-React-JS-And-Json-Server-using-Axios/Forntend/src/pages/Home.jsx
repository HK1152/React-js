import React, { useEffect, useState } from "react";
import axios from "axios";

function Home({ onEditClick }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    fetchUsers();
  }, []); 

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const { data: users } = await axios.get("http://localhost:3000/users");
      setIsLoading(false);
      setData(users);
    } catch (err) {
      setError("Failed to fetch");
      setIsLoading(false);
    }
  };

  const handleDelete = async (item) => {
    try {
     
      const updated = { ...item, status: false };
      await axios.patch(`http://localhost:3000/users/${item.id}`, { status: false });
      setData((prev) => prev.map((u) => u.id === item.id ? updated : u));
    } catch (err) {
      setError("Delete failed");
    }
  };

  
  const activeData = data.filter((u) => u.status !== false); 

  // Search ke liye
  const searchedData = activeData.filter((u) => {
    const s = search.toLowerCase();
    return (
      (u.name && u.name.toLowerCase().includes(s)) ||
      (u.email && u.email.toLowerCase().includes(s)) ||
      (u.phone && u.phone.includes(s))
    );
  });

 
  const totalPages = Math.ceil(searchedData.length / limit);
  const startIndex = (page - 1) * limit;
  const paginatedData = searchedData.slice(startIndex, startIndex + limit);

  return (
    <>
      {isLoading && (
        <div className="container mx-auto p-4 text-blue-700 font-semibold">
          Loading....
        </div>
      )}

      {error && (
        <div className="container mx-auto p-4 text-red-700 font-semibold">
          {error}
        </div>
      )}

      {!isLoading && !error && (
        <div className="container mx-auto p-4 mt-4">
          <div className="flex justify-between mb-4">
            <input 
               type="text" 
               placeholder="Search by name, email or phone" 
               className="border px-3 py-2 rounded w-1/3"
               value={search}
               onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            />
            <div>
               <span className="mr-2">Show:</span>
               <select className="border px-3 py-2 rounded" value={limit} onChange={(e) => { setLimit(Number(e.target.value)); setPage(1); }}>
                 <option value={5}>5</option>
                 <option value={10}>10</option>
                 <option value={15}>15</option>
               </select>
            </div>
          </div>
          
          {paginatedData.length === 0 ? (
            <div className="text-gray-700 font-semibold p-4">No users found</div>
          ) : (
          <table className="min-w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="border px-4 py-2">#</th>
                <th className="border px-4 py-2">Profile</th>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Phone</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((item, index) => (
                <tr
                  key={item.id}
                  className="odd:bg-white even:bg-gray-50"
                >
                  <td className="border px-4 py-2">{startIndex + index + 1}</td>
                  <td className="border px-4 py-2">
                    <img
                      src={item.profile || item.image}
                      alt="profile"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </td>
                  <td className="border px-4 py-2">{item.name}</td>
                  <td className="border px-4 py-2">{item.email}</td>
                  <td className="border px-4 py-2">{item.phone}</td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => onEditClick(item)}
                      className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          )}
          
          {totalPages > 1 && (
            <div className="mt-4 flex gap-2">
               <button 
                 disabled={page === 1} 
                 onClick={() => setPage(page-1)}
                 className="px-3 py-1 border rounded disabled:opacity-50"
               >
                 Prev
               </button>
               {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
                 <button 
                    key={num} 
                    onClick={() => setPage(num)}
                    className={`px-3 py-1 border rounded ${page === num ? 'bg-blue-500 text-white' : ''}`}
                 >
                    {num}
                 </button>
               ))}
               <button 
                 disabled={page === totalPages} 
                 onClick={() => setPage(page+1)}
                 className="px-3 py-1 border rounded disabled:opacity-50"
               >
                 Next
               </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Home;
