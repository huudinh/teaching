import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const year = props.date.getFullYear();
    const month = props.date.toLocaleDateString('en-US', {month: "2-digit"});
    const day = props.date.toLocaleDateString('en-US', {day: "2-digit"});

    return (
        <div className="expense-item">
            <div>
                <div>{year}</div>
                <div>{month}</div>
                <div>{day}</div>
            </div>
            <div className="expense-item__description">
                <h2>{props.description}</h2>
                <div className="expense-item__price">${props.price}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;