import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, isLogged } from "./store/actions/index";

function App() {
	// store state
	const counter = useSelector((state) => state.counter);
	const logged = useSelector((state) => state.isLogged);
	const dispatch = useDispatch();

	return (
		<div className="App">
			<h1>Counter: {counter}</h1>
			<button onClick={() => dispatch(increment(5))}>+</button>
			<button onClick={() => dispatch(decrement())}>-</button>
			<button onClick={() => dispatch(isLogged())}>
				I want to see secrets
			</button>

			{logged && <h3>Valuable information I shouldn't see</h3>}
		</div>
	);
}

export default App;
