import { useState } from 'react';

import './ExpenseItem.css';

import Card from '../UI/Card';


const ExpenseItem = (props) => {
    const [titleHandler, setTitle] = useState(props.title);
    const titleChange = () => { 
        setTitle("1");
        console.log("Anda berhasil menggunakan hook");
    };
    return (
        <Card id={props.id} className="expense-item" >
            <div className="expense-item__description" >
                <h2>{titleHandler} </h2>
                <div className="expense-item__price">20$</div>
                <button className="saya" onClick={titleChange} >Change Title</button>
            </div>
        </Card>
    );
};

export default ExpenseItem;