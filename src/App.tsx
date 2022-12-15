import { useObservable, useObservableState } from "observable-hooks";
import { useDispatch, useSelector } from "react-redux";
import { map } from "rxjs";
import reactLogo from "./assets/react.svg";
import { decrement, fetchData, increment } from "./store/slices/todo.slice";
import { RootState } from "./store/store.config";

function App() {
  const count = useSelector((state: RootState) => state.todoStore.count);
  const name = useSelector((state: RootState) => state.todoStore.name);
  const dispatch = useDispatch();
  const twiceCount = useObservableState(
    useObservable((obs$) => obs$.pipe(map(([v]) => v * 2)), [count])
  );

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-around p-10">
        <a href="https://vitejs.dev" target="_blank" className="basis-1/4">
          <img
            src="/vite.svg"
            className="w-full aspect-square"
            alt="Vite logo"
          />
        </a>
        <a href="https://reactjs.org" target="_blank" className="basis-1/4">
          <img
            src={reactLogo}
            className="w-full aspect-square"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="self-center text-lg mx-5">Vite + React + Tailwindcss</h1>
      <div className="w-full flex justify-around p-10">
        <div>count: {count}</div>
        <div>twiceCount: {twiceCount}</div>
      </div>
      <div className="w-full flex justify-around p-10">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => dispatch(increment(1))}
        >
          increment
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => dispatch(decrement(1))}
        >
          decrement
        </button>
      </div>
      <div className="w-full flex justify-around p-10">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => dispatch(fetchData())}
        >
          launch api
        </button>

        <div>name: {name}</div>
      </div>
    </div>
  );
}

export default App;
