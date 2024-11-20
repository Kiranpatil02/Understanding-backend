import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [quote, setquote] = useState([]);
  console.log(quote);

  useEffect(() => {
    axios
      .get("/api/quotes")
      .then((respons) => {
        console.log(respons, "ok ok");
        setquote(respons.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <h1>Cors + Proxy for white listing and getting accessed</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <h2>length:{quote.length}</h2>
        <p>
          {quote.map((con, index) => (
            <h5 key={con.id}>{con.content}</h5>
          ))}
        </p>
      </div>
    </>
  );
}

export default App;
