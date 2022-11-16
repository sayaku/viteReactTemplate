import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-around p-10">
        <a href="https://vitejs.dev" target="_blank" className="basis-1/4">
          <img src="/vite.svg" className="w-full aspect-square" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" className="basis-1/4">
          <img src={reactLogo} className="w-full aspect-square" alt="React logo" />
        </a>
      </div>
      <h1 className="self-center text-lg mx-5">Vite + React + Tailwindcss</h1>
    </div>
  );
}

export default App;
