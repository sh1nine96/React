import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("handleUpClick was clicked");
    const newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log("handleOnChange was clicked");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter Text here");
  //   text = 'new text' //wrong way to update text state
  // setText("new text"); //correct way to change to state
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
          {/* Enter text below */}
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="9"
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to uppercase
        </button>
      </div>
    </div>
  );
}
