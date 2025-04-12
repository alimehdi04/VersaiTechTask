// Profile Dashboard
import { useState } from 'react';
import ReviewCard from '../components/client/Review/ReviewCard';

export default function Dashboard() {
  const loggedInUser = 'Ali'; // This should be replaced with the actual logged-in user from your authentication context or state management.

  // This whole snippet to filter reviews by the logged-in user can be replaced with an API call to fetch reviews for the logged-in user from the database using appropriate data querying.
  const [allReviews] = useState([
    { id: 1, name: 'Ali', rating: 4, comment: 'I liked the product a lot!' },
    { id: 2, name: 'Ritik', rating: 5, comment: 'Amazing stuff, really!' },
    { id: 3, name: 'Ali', rating: 3, comment: 'Decent, could be better.' },
  ]); //dummy data, can be replaced with actual data fetching logic

  const myReviews = allReviews.filter((review) => review.name === loggedInUser);

  return (
    <div className="min-h-screen bg-violet-50 py-10 px-4 sm:px-6">
      <div className="w-full max-w-2xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-violet-800 mb-6 text-center">
          My Reviews
        </h1>

        {myReviews.length > 0 ? (
          <div className="space-y-4">
            {myReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600 mt-10 text-sm">
            You haven’t submitted any reviews yet.
          </div>
        )}
      </div>
    </div>
  );
}
