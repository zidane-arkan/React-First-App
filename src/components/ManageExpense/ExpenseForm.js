import { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [textValue, setTextValue] = useState('Hooray');
    const inputHandler = (e) => {
        setTextValue(e.target.value);
    };
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={inputHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2020-01-01" step="2023-12-31" />
                </div>
            </div>
            <div>
                {textValue}
            </div>
            <div className="new-expense__actions">
                <button type="submit" className="btn-submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;