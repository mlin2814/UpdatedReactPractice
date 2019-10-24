import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// add expense
const addExpense = (
  {
    desc = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    desc,
    note,
    amount,
    createdAt
  }
});

// remove expense
const removeExpense = ({ id } = {}
) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// edit expense
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// set text filter
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// sort by date
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// sort by amount
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// set start date
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

// set end date
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});


// Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      // return state.concat(action.expense);
      // Above is the old way, below is spread operator way
      return [
        ...state,
        action.expense
      ];
      break;
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.idz);
      break;
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense;
        }
      })
      break;
    default:
      return state;
  }
};

// Filters Reducers
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
      break;
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
      break;
      case 'SORT_BY_DATE':
        return {
          ...state,
          sortBy: 'date'
        };
        break;
      case 'SET_START_DATE':
        return {
          ...state,
          startDate: action.startDate
        }
        break;
      case 'SET_END_DATE':
        return {
          ...state,
          endDate: action.endDate
        }
        break;
    default:
      return state;
  }
}

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;

// My Solution
    // const lowerText = expense.desc.toLowerCase();
    // const matchWord = lowerText.includes("rent")
    // const textMatch = matchWord;

    const textMatch = expense.desc.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    }
    else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};


// Store Creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  // console.log(store.getState());
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ desc: 'Rent', amount: 100, createdAt: -12000 }));
const expenseTwo = store.dispatch(addExpense({ desc: 'Coffee', amount: 300, createdAt: -1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter('ffe'));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));


const demoState = {
  expenses: [{
    id: 'sdfadfg',
    desc: 'January Rent',
    note: 'This was the payment for this residence',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
};

// const user = {
//   name: 'Jen',
//   age: 24
// };
//
// console.log({
//   ...user,
//   location: 'Atlanta',
//   age: 19
// });
