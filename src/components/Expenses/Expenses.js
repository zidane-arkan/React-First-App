import { useState } from 'react';

import Card from '../UI/Card';

import ExpenseList from './ExpenseList';

import './Expenses.css';

const Expenses = (props) => {
    return (
        <Card className="expenses">
            <ExpenseList />
        </Card>
    );
};

export default Expenses;