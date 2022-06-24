import { useState } from "react";
import commentData from "../data/commentData";

function Comments() {
  return (
    <div className="container">
      {commentData.map((item, index) => {
        return (
          <form className="card" key={index}>
            <input type="text" placeholder={item} />
            <button type="submit">Click here</button>
          </form>
        );
      })}
      <h2>{`Comments: ${commentData.length} `}</h2>
    </div>
  );
}

export default Comments;
