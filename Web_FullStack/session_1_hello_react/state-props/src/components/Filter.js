const Filter = (props) => {
    return (
        <div>
            <div>Filter by year</div>
            <select value={props.year} onChange={e => props.onChangeYear(+e.target.value)}>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>
        </div>
    )
}

export default Filter;