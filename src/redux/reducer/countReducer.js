import { combineReducers, legacy_createStore as createStore } from "redux";

//membuat state

const initialState = {
  value: 0,
  status: "",
};

//membuat reducer => function utk merubah value dari state redux

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        value: state.value + 1,
        status: action.status,
      };
    case "DECREMENT":
      return {
        ...state,
        value: state.value - 1,
        status: action.status,
      };

    default:
      return state;
  }
};