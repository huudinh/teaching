import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const price = Math.floor(Math.random() * 2000);
    console.log(props);

    return (
        <div className="expense-item">
            <div>March 28th, 2024</div>
            <div className="expense-item__description">
                <h2>{props.description}</h2>
                <div className="expense-item__price">${props.price}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;