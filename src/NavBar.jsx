import { useState } from "react";

export default function NavBar(data) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <nav className="recipe-header">
      {/* Left: Dislike */}
      <button
        className="dislike-btn"
        onClick={() => setDislikes(dislikes + 1)}
      >
        👎 {dislikes}
      </button>

      {/* Center: existing content */}
      <div className="recipe-header-center">
        <h1>{data.Recipe_Name}</h1>
        <p>{data.PrepTime}</p>
      </div>

      {/* Right: Like */}
      <button
        className="like-btn"
        onClick={() => setLikes(likes + 1)}
      >
        👍 {likes}
      </button>
    </nav>
  );
}