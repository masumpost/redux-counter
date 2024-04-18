import { decrement, increment, incrementByValue } from "./redux/features/CounterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {

  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter)

  return (
    <div className="flex h-screen w-full justify-center items-center">
      <div className="flex border border-blue-500 p-10 bg-slate-200">
        <button onClick={() => dispatch(incrementByValue(5))} className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white mx-4">Increment By 5</button>
        <button onClick={() => dispatch(increment())} className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white">Increment</button>
        <h1 className="text-3xl px-4">{count}</h1>
        <button onClick={() => dispatch(decrement())} className="px-3 py-2 rounded-md bg-red-500 text-xl font-semibold text-white">Decrement</button>
      </div>
    </div>
  )
}

export default App
