import React from "react";

function PhoneticCard({ phonetic }) {
  if (!phonetic?.text || !phonetic?.audio) {
    return <h2>Sorry...phonetics not available!</h2>;
  }
  return (
    <div>
      {phonetic?.text}
      <audio src={phonetic?.audio ?? ""}></audio>
    </div>
  );
}

export default PhoneticCard;
