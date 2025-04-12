// handles the star rating input for the review form

export default function StarInput({ rating, onChange }) {
  return (
    <div className="flex space-x-1 text-yellow-400 text-xl">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => onChange(star)}
          className={`cursor-pointer ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}