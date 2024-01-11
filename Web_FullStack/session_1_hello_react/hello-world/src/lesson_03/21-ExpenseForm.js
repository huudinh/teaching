const ExpenseForm = () => {
    return (
        <div>
            <form>
                <div>
                    <label>
                        Description:
                        <input type="text" />
                    </label>
                </div>
                <div>
                    <label>
                        Price:
                        <input type="number" />
                    </label>
                </div>
                <div>
                    <label>
                        Date:
                        <input type="date" />
                    </label>
                </div>
                <div>
                    <button type="submit">Add</button>
                    <button type="button">Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm;

// Tạo UI Form