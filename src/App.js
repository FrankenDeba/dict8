import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Input from "./comp/Input";
import Output from "./comp/Output";
import PhoneticCard from "./comp/PhoneticCard";

function App() {
  const [respObj, setRespObj] = useState({});

  const callWordsApi = async (word) => {
    const resp = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );

    setRespObj(resp.data[0]);

    console.log("The response is: ", resp);
  };

  useEffect(() => {
    console.log({ respObj });
  }, [respObj]);

  return (
    <div className="App">
      <Input callWordsApi={callWordsApi} />
      <Output dictionary={respObj} />
    </div>
  );
}

export default App;
