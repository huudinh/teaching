import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const [description, setDescription] = useState(props.description);
    const [backgroundColor, setBackgroundColor] = useState('');

    const changeDescription = () => {
        setDescription('New description');
        console.log('hi');
        setBackgroundColor('cyan');
    }
    return (
        <div className="expense-item" style={{
            backgroundColor: backgroundColor
        }}>
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <button onClick={changeDescription}>Change Description</button>
                <h2>{description}</h2>
                <div className="expense-item__price" style={{ backgroundColor: props.price >= 500 ? 'red' : 'purple' }}>${props.price}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;