import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.description}</h2>
                <div className="expense-item__price">${props.price}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;