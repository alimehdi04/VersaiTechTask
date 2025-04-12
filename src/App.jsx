import IndexPage from './pages/IndexPage'
import Dashboard from './pages/Dashboard'
import ProductReview from './pages/ProductReview'
import Wishlist from './pages/Wishlist'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reviews" element={<ProductReview />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
