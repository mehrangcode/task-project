import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { reducers } from "./Reducers";

export default function configureStore() {
    const middleware = [thunk];
    const enhancers = [];
    const rootReducer = combineReducers({ ...reducers });
    return createStore(
        rootReducer,
        compose(
            applyMiddleware(...middleware),
            ...enhancers,
        ),
    );
}