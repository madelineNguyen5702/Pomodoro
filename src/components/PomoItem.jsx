import { useState } from "react";
import FeedbackData from "../data/FeedbackData";

function PomoItem() {
 
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <div className="container">
      {feedback.map(({ rating, text }, index) => {
        return (
          <div className="card" key={index}>
            <div className="num-display">{rating}</div>
            <div className="text-display">{text}</div>
            <a href="/comments">Click here</a>
          </div>
        );
      })}
    </div>
  );
}

export default PomoItem;
