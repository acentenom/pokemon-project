import { createStore, applyMiddleware } from "redux";
import pokemonReducer from "../reducer/index";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  pokemonReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
