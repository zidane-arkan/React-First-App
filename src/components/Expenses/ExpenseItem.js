import { useState } from 'react';

import './ExpenseItem.css';

import Card from '../UI/Card';


const ExpenseItem = (props) => {
    return (
        <Card id={props.id} className="expense-item" >
            <div className="expense-item__description" >
                <h2>Title</h2>
                <div className="expense-item__price">20$</div>
                <button className="saya">Change Title</button>
            </div>
        </Card>
    );
};

export default ExpenseItem;