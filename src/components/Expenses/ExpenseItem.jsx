import React from 'react';
import Card from '../UI/Card';
import './ExpenseItem.css';
import ExpensesDate from './ExpensesDate';

function ExpenseItem(props) {
  return (
    <li>
      <Card className="expense-item ">
        <ExpensesDate date={props.date} />
        <div className="expense-item__description">
          <h2> {props.title}</h2>
          <div className="expense-item__price">${props.amount} </div>
        </div>
        <button> Change Title </button>
      </Card>
    </li>
  );
}

export default ExpenseItem;
