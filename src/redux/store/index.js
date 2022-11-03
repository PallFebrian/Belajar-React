import { combineReducers, legacy_createStore as createStore , compose , applyMiddleware} from "redux";
import { logger,tes } from "../middleWire/logger";
import { reducer } from "../reducer/countReducer";
import { colorReducer } from "../reducer/colorReducer";
import { authProses } from "../reducer/authReducer";
import thunk from "redux-thunk";


const allReducers = combineReducers({
    count: reducer,
    color: colorReducer,
    auth: authProses
  });
  
  ///membuat store
  const composeEnchancers =
  (typeof window !== "undefined" &&
   window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__) || 
  compose;

  export const store = createStore(
    allReducers,
    composeEnchancers(applyMiddleware(thunk)) 
  );
  // export const store = createStore(
  //   allReducers /* preloadedState, */,
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // );