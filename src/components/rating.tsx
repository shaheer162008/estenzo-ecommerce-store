import { useState } from "react";

export default function Rating() {
  const [rating, setRating] = useState(0);
  return (
    <div className="flex gap-1">
      {[1,2,3,4,5].map((star) => (
        <span
          key={star}
          className={star <= rating ? "text-yellow-400 cursor-pointer" : "text-gray-300 cursor-pointer"}
          onClick={() => setRating(star)}
        >★</span>
      ))}
    </div>
  );
}
