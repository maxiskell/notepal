import { combineReducers, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { INoteState } from "./types";
import { noteReducer } from "./reducer";

export interface IAppState {
  noteState: INoteState;
}

const rootReducer = combineReducers<IAppState>({
  noteState: noteReducer,
});

export default function configureStore(): Store<IAppState, any> {
  const store = createStore(rootReducer, composeWithDevTools());
  return store;
}
