import { useState } from "react";
import "./App.css";
import Completions from "./components/Completions";
import Form from "./components/Form";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  const [completions, setCompletions] = useState([]);

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
