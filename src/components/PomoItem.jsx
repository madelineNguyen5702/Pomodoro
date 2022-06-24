import { useState } from "react";
import FeedbackData from "../data/FeedbackData";
function PomoItem() {
  const [rating, setRating] = useState(7);
  const [text, setText] = useState("This is an example");
  const handleClick = () => {
    setRating(10);
    setText("Done");
  };
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
      <button onClick={handleClick}>Click here</button>
    </div>
  );
}

export default PomoItem;
