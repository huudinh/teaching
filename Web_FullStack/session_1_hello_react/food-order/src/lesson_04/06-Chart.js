import "./Chart.css";

const Chart = () => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return (
        <div className="chart_container">
            {months.map((m) => (
                <MonthBar month={m} key={m} />
            ))}
        </div>
    )
}

const MonthBar = (props) => {
    return (
        <div className="chart_bar_item">
            <div className="bar_container">
                <div className="bar_fill"></div>
            </div>
            <p className="month_name">{props.month}</p>
        </div>
    )
}

export default Chart;
// Thêm MonthBar