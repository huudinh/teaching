import './ExpenseItem.css';

const ExpenseItem = () => {
    const price = Math.floor(Math.random() * 2000);
    console.log(price);

    return (
        <div className="expense-item">
            <div>March 28th, 2024</div>
            <div className="expense-item__description">
                <h2>New MacBook</h2>
                <div className="expense-item__price">${price}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;
// Thay đổi giá trong các Item