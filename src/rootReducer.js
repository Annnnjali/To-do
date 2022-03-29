import { combineReducers } from "redux";
import taskReducer from "./redux/reducers/taskReducer";

const rootReducer = combineReducers({
    task : taskReducer,
});

export default rootReducer;
