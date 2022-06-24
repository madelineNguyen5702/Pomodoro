import { useState } from "react";
import FeedbackData from "../data/FeedbackData";

function Comments() {
  const handleClick = (index) => {
    let cloneFeedback = [...feedback];
    cloneFeedback[index].rating--;
    setFeedback(cloneFeedback);
  };
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <div className="container">
      {feedback.map(({ rating, text }, index) => {
        return (
          <div className="card" key={index}>
            <input type="text" placeholder="Some comments" />
            <button onClick={() => handleClick(index)}>Click here</button>
          </div>
        );
      })}
    </div>
  );
}

export default Comments;
