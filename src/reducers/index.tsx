import { combineReducers } from "redux";
import reducerCrud from "./reducerCrud";


const rootReducer = combineReducers({ reducerCrud });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>