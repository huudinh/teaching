const ExpenseDate = (props) => {
    const { date } = props;
    const year = date.getFullYear();
    const month = date.toLocaleDateString('en-US', {month: "2-digit"});
    const day = date.toLocaleDateString('en-US', {day: "2-digit"});
    return (
        <div>
            <div>{year}</div>
            <div>{month}</div>
            <div>{day}</div>
        </div>
    )
}

export default ExpenseDate;