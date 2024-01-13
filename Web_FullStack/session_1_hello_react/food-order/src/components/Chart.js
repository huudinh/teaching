import "./Chart.css";

const Chart = (props) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const expenseByMonth = {
        Jan: 0,
        Feb: 0,
        Mar: 0,
        Apr: 0,
        May: 0,
        Jun: 0,
        Jul: 0,
        Aug: 0,
        Sep: 0,
        Oct: 0,
        Nov: 0,
        Dec: 0,
    };
    props.data.forEach(item => {
        const monthName = item.date.toLocaleString('en-US', {month: 'short'});
        expenseByMonth[monthName] += item.price;
    });
    const allExpense = Object.values(expenseByMonth);
    let max = Math.max(...allExpense);
    if(max === 0) {
        max = 1;
    }

    return (
        <div className="chart_container">
            {months.map((m) => (
                <MonthBar month={m} key={m} values={(expenseByMonth[m] *100) / max}/>
            ))}
        </div>
    )
}

const MonthBar = (props) => {
    return (
        <div className="chart_bar_item">
            <div className="bar_container">
                <div className="bar_fill" style={{height: props.values + "%"}}></div>
            </div>
            <p className="month_name">{props.month}</p>
        </div>
    )
}

export default Chart;