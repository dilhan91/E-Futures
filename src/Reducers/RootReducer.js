import { combineReducers } from "redux";

import Albums from './AlbumReducer'

const rootReducer = combineReducers({
    Albums,
});
export default rootReducer;