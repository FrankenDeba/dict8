import React from "react";
import MeaningCard from "./MeaningCard";
import "./Output.css";
import PhoneticCard from "./PhoneticCard";

function Output({ dictionary }) {
  return (
    <div className="">
      {dictionary.meanings?.map((meaning) => {
        return <MeaningCard meaning={meaning} />;
      })}
      <PhoneticCard phonetic={dictionary.phonetics} />
    </div>
  );
}

export default Output;
