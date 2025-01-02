import React, { useReducer } from 'react';
import PiggyBank from './components/PiggyBank';
import AddMoney from './components/AddMoney';
import Transactions from './components/Transactions';
import BreakPiggyBank from './components/BreakPiggyBank';

import "./App.css";

const initialState = {
  balance: 0,
  transactions: [],
  isBroken: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_MONEY':
      return {
        ...state,
        balance: state.balance + action.payload.amount,
        transactions: [...state.transactions, action.payload],
      };
    case 'BREAK_PIGGY_BANK':
      return { ...state, isBroken: true };
    case 'RESET_PIGGY_BANK':
      return { ...initialState };
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="app">
      <h1>Online Piggy Bank</h1>
      <PiggyBank balance={state.balance} isBroken={state.isBroken} />
      {!state.isBroken && (
        <AddMoney dispatch={dispatch} />
      )}
      <Transactions transactions={state.transactions} />
      {state.isBroken ? (
        <button onClick={() => dispatch({ type: 'RESET_PIGGY_BANK' })}>
          Start New Piggy Bank
        </button>
      ) : (
        <BreakPiggyBank dispatch={dispatch} balance={state.balance} />
      )}
    </div>
  );
};

export default App;
