import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-violet-900 text-white p-4 flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/dashboard">Profile</Link>
    </nav>
  );
}