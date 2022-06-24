import Header from "./Header";
import FeedbackData from "./data/FeedbackData";
import { useState } from "react";
// import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./data/FeedbackList";

function App() {
  // const loading = false;
  // if (loading) return <h1>Loading...</h1>;

  const [feedback, setFeedback] = useState(FeedbackData)
  return (
    <>
      <Header text="Hello" bgColor="rgba(0,0,0,0.4)" textColor="#ff6a95" />
      <div className="container">
        <FeedbackList feedback={feedback}/>
        <h1>Hello again</h1>
      </div>
    </>
  );
}

export default App;
