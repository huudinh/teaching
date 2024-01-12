const Chart = () => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return (
        <div>
            {months.map((m) => (
                <div key={m}>{m}</div>
            ))}
        </div>
    )
}

export default Chart;