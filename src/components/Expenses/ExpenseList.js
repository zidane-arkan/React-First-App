import React, { useId } from 'react';
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) => {
    return (
        <ul className="expenses-list">
            <ExpenseItem
                id={useId()}
                key={"expense.id"}
                title={"expense.title"}
                date={"expense.date"}
                price={"expense.price"}
            />
        </ul>
    );

};

export default ExpenseList;