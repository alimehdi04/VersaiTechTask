
export default function WishlistItemCard({ item, onRemove }) {
    return (
      <div className="bg-white border border-violet-200 p-4 rounded shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h3 className="text-lg font-semibold text-violet-800">{item.name}</h3>
          <p className="text-gray-600 text-sm">{item.description}</p>
        </div>
        <button
          onClick={() => onRemove(item.id)}
          className="text-sm text-red-600 hover:underline"
        >
          Remove
        </button>
      </div>
    );
  }
  