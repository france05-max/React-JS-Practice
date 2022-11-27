import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toitlet Paper',
    amount: 94.12,
    date: new Date(2021, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 894.12,
    date: new Date(2020, 12, 14),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.12,
    date: new Date(2020, 12, 14),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2020, 2, 14),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpense = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });

    console.log(expense);
  };

  // const addExpenseHandler = (expense) => {};
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpense} />
      <Expenses data={expenses}></Expenses>
    </div>
  );
}

export default App;
