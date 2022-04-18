import {createStore} from "redux";
import { RootReducer } from "./reducer/rootReducer";

export const store= createStore(
    RootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)