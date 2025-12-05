function Card({ title, description, img, id, onEdit, onDelete }) {
  return (
    <div className="group">
      <div className="w-80 bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full transform hover:-translate-y-2">
        <div className="relative overflow-hidden h-56">
          <img
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            src={img}
            alt={title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <h2 className="text-2xl font-bold mb-3 text-gray-800 line-clamp-2 group-hover:text-amber-600 transition-colors duration-300">
            {title}
          </h2>
          <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1">
            {description}
          </p>

          <div className="flex gap-3 mt-auto pt-4 border-t border-gray-100">
            <button
              onClick={() => {
                onEdit({
                  id,
                  title,
                  description,
                });
              }}
              className="flex-1 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-4 py-2.5 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(id)}
              className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-2.5 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
