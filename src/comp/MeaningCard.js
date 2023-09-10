import React from "react";
import "./MeaningCard.css";

function MeaningCard({ meaning }) {
  return (
    <div className="meaning_cont">
      <div className="pill_cont">
        Part of speech: <p className="pill">{meaning.partOfSpeech}</p>
      </div>
      <div className="meaning">
        Meaning: <p className="pill">{meaning.definitions[0].definition}</p>
      </div>
      <div className="pill_cont">
        synonyms:{" "}
        {meaning.synonyms.length > 0 ? (
          meaning.synonyms?.map((syn, idx) => {
            return <p className="pill">{syn}</p>;
          })
        ) : (
          <p className="pill">Not-available</p>
        )}
      </div>
      <div className="pill_cont">
        Antonyms:
        {meaning.antonyms.length ? (
          meaning.antonyms?.map((ant, idx) => {
            return <p className="pill">{ant}</p>;
          })
        ) : (
          <p className="pill">Not-available</p>
        )}
      </div>
    </div>
  );
}

export default MeaningCard;
