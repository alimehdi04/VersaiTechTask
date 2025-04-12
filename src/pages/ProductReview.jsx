import { useState } from 'react';
import StarInput from '../components/client/Review/StarInput';
import ReviewCard from '../components/client/Review/ReviewCard';

export default function ProductReview() {
  const [reviews, setReviews] = useState([
    { id: 1, name: 'Ali', rating: 4, comment: 'Loved the product quality!' },
    { id: 2, name: 'Ritik', rating: 5, comment: 'Superb experience. Highly recommend!' },
  ]);

  const [formData, setFormData] = useState({ name: '', comment: '', rating: 0 });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.comment && formData.rating > 0) {
      const newReview = { ...formData, id: reviews.length + 1 };
      setReviews([newReview, ...reviews]);
      // console.log('Review submitted:', newReview);
      setFormData({ name: '', comment: '', rating: 0 });
    }
  };

  return (
    <div className="min-h-screen bg-violet-50 py-10 px-4 sm:px-6">
      <div className="w-full max-w-2xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-violet-800 mb-6 text-center">Product Reviews</h1>

        <form
          onSubmit={handleSubmit}
          className="mb-10 bg-white border border-violet-200 p-4 sm:p-6 rounded-lg shadow-md"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-violet-300 p-2 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-violet-400 text-sm"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

          <textarea
            placeholder="Write your review..."
            className="w-full border border-violet-300 p-2 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-violet-400 text-sm"
            rows="3"
            value={formData.comment}
            onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
          ></textarea>

          <div className="mb-4">
            <span className="text-violet-700 font-medium mr-2 text-sm">Rating:</span>
            <StarInput
              rating={formData.rating}
              onChange={(rating) => setFormData({ ...formData, rating })}
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded transition text-sm"
          >
            Submit Review
          </button>
        </form>

        <div>
          <h2 className="text-lg sm:text-xl font-semibold text-violet-800 mb-4">All Reviews</h2>
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
        
      </div>
    </div>
  );
}
