import './ExpenseDate.css';
const ExpenseDate = (props) => {
    const { date } = props;
    const year = date.getFullYear();
    const month = date.toLocaleDateString('en-US', {month: "2-digit"});
    const day = date.toLocaleDateString('en-US', {day: "2-digit"});
    return (
        <div className="expense-date">
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    )
}

export default ExpenseDate;