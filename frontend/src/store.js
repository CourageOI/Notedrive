import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer, userRegReducers } from "./reducers/userReducers";
import {
  AllNotesReducer,
  CreateNoteReducer,
  UpdateNoteReducer,
} from "./reducers/noteReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegReducers,
  noteList: AllNotesReducer,
  createNote: CreateNoteReducer,
  updateNote: UpdateNoteReducer,
});

const localStorageUserInfo = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const initialState = {
  userLogin: { userInfo: localStorageUserInfo },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
