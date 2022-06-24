// import PomoItem from "../PomoItem"
import FeedbackData from "./FeedbackData"
function FeedbackList(feedback) {
  if (!feedback||feedback.length===0){
    return<p>No Feedback yet</p>
    }

  return (
    <div className="Feedback List">
      {feedback.map((item)=>(
        <FeedbackData key={item.id} item={item}/>
      ))}
      List
      </div>
  )
}

export default FeedbackList
