import { createStore } from 'redux';


const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const resetCount = ({ resetBy = 0 } = {}) => ({
  type: 'RESET',
});

const setCount = ({ count } = {}) => ({
  type: 'SET',
  count
});


// Reducers
// 1. reducers are pure functions; only use what is provided to the function
// 2. never change state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':

      return {
        count: state.count - action.decrementBy
      };
    case 'RESET':
      return {
        count: 0
      };
    case 'SET':
      return {
        count: action.count
      };

    default:
      return state;
  }
}

const store = createStore(countReducer);

const unsub = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }))

// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(resetCount());

store.dispatch(setCount({ count: 101 }));



// const add = ({ a, b }, c) => {
//   return a + b + c;
// };
//
// console.log(add({ a: 1, b:12 }, 100));
