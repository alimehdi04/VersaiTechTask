import { useState } from 'react';
import WishlistItemCard from '../components/client/Wishlist/WishlistItemCard';

export default function Wishlist() {
  const availableProducts = [
    { id: 1, name: 'Wireless Earbuds', description: 'Noise-cancelling, long battery life' },
    { id: 2, name: 'Smart Watch', description: 'Tracks fitness and sleep' },
    { id: 3, name: 'Laptop Stand', description: 'Ergonomic and foldable' },
    { id: 4, name: 'Powerbank', description: 'Long battery life' },
  ];  // Example products

  const [wishlist, setWishlist] = useState([]);

  const handleAdd = (product) => {
    if (!wishlist.find((item) => item.id === product.id)) {
      setWishlist([...wishlist, product]);
    }
  };    //this makes sure no duplicates are added

  const handleRemove = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-violet-50 py-10 px-4">
      <div className="max-w-screen-md mx-auto">
        <h1 className="text-3xl font-bold text-violet-800 mb-6 text-center">My Wishlist</h1>

        <div className="bg-white p-6 rounded-lg shadow-md mb-2">
          <h2 className="text-xl font-semibold text-violet-700 mb-4">Wishlist Items</h2>
          {wishlist.length > 0 ? (
            <div className="space-y-4">
              {wishlist.map((item) => (
                <WishlistItemCard key={item.id} item={item} onRemove={handleRemove} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600">Your wishlist is currently empty.</p>
          )}
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold text-violet-700 mb-4">Available Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {availableProducts.map((product) => (
              <div key={product.id} className="border rounded-md p-4 bg-violet-100 shadow-sm">
                <h3 className="font-bold text-violet-900">{product.name}</h3>
                <p className="text-sm text-violet-700 mb-2">{product.description}</p>
                <button
                  className="bg-violet-600 hover:bg-violet-700 text-white text-sm px-3 py-1 rounded"
                  onClick={() => handleAdd(product)}
                >
                  Add to Wishlist
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
