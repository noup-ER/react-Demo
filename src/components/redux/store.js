import { createStore } from "redux";

const initialState = {
    name: 1,
    person1: {name: 1},
    person2: {name: 2}
};

const rootReducer = (state = initialState, action) => {
  console.log(state,action);
  state.persion1 = {name: Math.random()}
  return {...state};
};

const store = createStore(rootReducer);

export default store;