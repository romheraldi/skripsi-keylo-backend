import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

const initialState = {};

const middlewares = [thunk];

let composeState;

if (process.env.NODE_ENV === "production") {
    composeState = applyMiddleware(...middlewares);
} else {
    composeState = compose(
        applyMiddleware(...middlewares),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}

const store = createStore(rootReducer, initialState, composeState);

export default store;
