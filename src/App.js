import { useEffect, useState } from "react";
import "./App.css";
import Completions from "./components/Completions";
import Form from "./components/Form";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  const [completions, setCompletions] = useState(() => {
    // get locally stored completions if available
    const saved = localStorage.getItem("completions");
    const savedCompletions = JSON.parse(saved);
    return savedCompletions || [];
  });

  useEffect(() => {
    localStorage.setItem("completions", JSON.stringify(completions));
    console.log("adding to local storage...");
  }, [completions]);

  return (
    <div className="App">
      <Header />
      <Hero />
      <Form setCompletions={setCompletions} />
      <Completions completions={completions} />
    </div>
  );
}

export default App;
