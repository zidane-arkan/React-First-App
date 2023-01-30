import React, { useId } from 'react';
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) => {
    const userData = [
        {
            id: "1",
            title: "Cindy",
            date: "2022",
        },
        {
            id: "2",
            title: "Vito",
            date: "2022",
        },
        {
            id: "3",
            title: "Anhar",
            date: "2022",
        },
        {
            id: "4",
            title: "Keysha",
            date: "2022",
        }
    ];
    const users = userData.map((user) => {
        return (
            <ExpenseItem
                id={user.id}
                title={user.title}
                date={user.date}
            />
        );
    });
    return (
        <ul className="expenses-list">
            {/* <ExpenseItem
                id={useId()}
                title={"expense.title"}
                date={"expense.date"}
                price={"expense.price"}
                user={"Kevin"}
            /> */}
            {users}
        </ul>
    );

};

export default ExpenseList;