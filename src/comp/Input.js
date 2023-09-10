import React, { useState } from "react";
import "./Input.css";

function Input({ callWordsApi }) {
  const [word, setWord] = useState("");
  return (
    <div className="inp_cont">
      <label for="inp"></label>
      <input id="inp" onChange={(e) => setWord(e.target.value)}></input>
      <button onClick={() => callWordsApi(word)} disabled={!word}>
        Submit
      </button>
    </div>
  );
}

export default Input;
