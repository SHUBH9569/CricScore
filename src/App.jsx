import { useState, useEffect } from "react";
import Header from "./components/header";
import Board from "./components/board";

function App() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/data");

      if (!response.ok) {
        throw new Error("Failed to reload data");
      }

      const jsonData = await response.json();

      setData(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-row flex-grow bg-slate-100">
      <Header />

      <button onClick={fetchData}>Reload Data</button>

      {data ? <Board data={data} /> : null}
    </div>
  );
}

export default App;
