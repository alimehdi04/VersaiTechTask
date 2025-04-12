//card component for each review
export default function ReviewCard({ review }) {
  return (
    <div className="bg-white border border-violet-200 p-4 rounded shadow-sm">
      <h3 className="text-base sm:text-lg font-semibold text-violet-800 mb-1">{review.name}</h3>
      <div className="flex items-center text-yellow-400 mb-2 text-sm">
        {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
      </div>
      <p className="text-gray-700 text-sm">{review.comment}</p>
    </div>
  );
}
