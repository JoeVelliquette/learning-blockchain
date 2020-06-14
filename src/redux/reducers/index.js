import {combineReducers} from "redux";
import ResourceReducer from "./ResourceReducer";

export default combineReducers({
    data: ResourceReducer,
});
