import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    let description = props.description;
    
    const changeDescription = () => {
        description = 'New description';
        console.log('hi');
    }
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <button onClick={changeDescription}>Change Description</button>
                <h2>{description}</h2>
                <div className="expense-item__price">${props.price}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;
// Cố gắng thay đổi UI bằng biến