import { useState } from "react";
import "./App.css";
import Header from "./components/header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <h1>Landing page</h1>
      </div>
    </>
  );
}

export default App;
