import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// import PROVIDER
import { Provider } from "react-redux";

//  import REDUCERS
import rootReducer from "./store/reducers/index";

// import STORE
import { createStore } from "redux";

// init STORE
let store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
	// add PROVIDER
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>,
	document.getElementById("root")
);

// // ACTIONS

// // action increment
// const increment = () => {
// 	return {
// 		type: "INCREMENT",
// 	};
// };
// // action decrement
// const decrement = () => {
// 	return {
// 		type: "DECREMENT",
// 	};
// };

// // REDUCER - mutation in vue
// const counter = (state = 0, action) => {
// 	switch (action.type) {
// 		case "INCREMENT":
// 			return state + 1;
// 		case "DECREMENT":
// 			return state - 1;
// 	}
// };

// // STORE -> globalized state
// let store = createStore(counter);

// // dispatch - for dispatching an action
// store.dispatch(increment());
