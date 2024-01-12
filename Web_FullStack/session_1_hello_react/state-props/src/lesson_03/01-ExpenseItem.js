import './ExpenseItem.css';

const ExpenseItem = () => {
    return (
        <div className="expense-item">
            <div>March 28th, 2024</div>
            <div className="expense-item__description">
                <h2>New MacBook</h2>
                <div className="expense-item__price">$2000</div>
            </div>
            <button>ClickMe</button>
        </div>
    )
}

export default ExpenseItem;
// Tạo UI cho Item