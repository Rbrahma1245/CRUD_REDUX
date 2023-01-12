import { combineReducers } from "redux";
import reducerCrud from "./reducerCrud";


const rootReducer = combineReducers({ reducerCrud });

export default rootReducer;

export type State = ReturnType<typeof rootReducer>