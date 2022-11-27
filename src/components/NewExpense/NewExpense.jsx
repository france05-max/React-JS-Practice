import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = props => {
  const [show, setShow] = useState(false);

  const saveDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShow(false);
  };

  const showComponents = () => {
    setShow(!show);
  };

  const cancelEdit = () => {
    setShow(false);
  };
  return (
    <div className="new-expense">
      {!show && (
        <button
          class="new-expense__action"
          type="submit"
          onClick={showComponents}
        >
          Add Expenses
        </button>
      )}
      {show && (
        <ExpenseForm SaveExpense={saveDataHandler} onCancel={cancelEdit} />
      )}
    </div>
  );
};

export default NewExpense;
