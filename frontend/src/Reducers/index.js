import { combineReducers } from "redux";

import authReducer from './auth';
import currentUserReducer from "./currentUser";
import chanelReducers from './chanel';
import videoReducer from "./Video";
import likedVideoReducer from "./likedVideo.js"
import watchLaterReducer from "./watchLater.js"
import HistoryReducer from "./history.js";
import commentReducer from "./comments.js";

export default combineReducers({
    authReducer,
    currentUserReducer,
    chanelReducers,
    videoReducer,
    likedVideoReducer,
    watchLaterReducer,
    HistoryReducer,
    commentReducer
      
})