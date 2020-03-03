import React from "react";
import "./styles.css";

export default function PostItems({ id, img, children }) {
  return (
    <div
      className="post-container-item"
      id={id}
      style={{ backgroundImage: `url(${img})` }}
    >
      {children}
    </div>
  );
}
