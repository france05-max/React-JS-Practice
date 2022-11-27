import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

function Expenses(props) {
  const [FilterYear, setFilterYear] = useState('2020');

  const dateValue = year => {
    setFilterYear(year);
    console.log(year);
  };

  const filteredExpenses = props.data.filter(expense => {
    return expense.date.getFullYear().toString() === FilterYear;
  });

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter YearSelected={FilterYear} dateF={dateValue} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </>
  );
}

export default Expenses;
