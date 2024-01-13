import { useState } from "react";

const ExpenseForm = () => {
    const [description, setDescription] = useState('New PlayStation');
    const [price, setPrice] = useState(0);
    const [date, setDate] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form Submit');
        console.log(description);
    };

    const onDescriptionChange = (event) => {
        setDescription(event.target.value);
    };
    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };
    const handleDateChange = (event) => {
        setDate(event.target.value);
    };
    const handleCancel = () => {
        setDescription('');
        setDate(null);
        setPrice(0)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Description:
                        <input type="text" value={description} onChange={onDescriptionChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Price:
                        <input type="number" value={price} onChange={handlePriceChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Date:
                        <input type="date" value={date} onChange={handleDateChange} />
                    </label>
                </div>
                <div>
                    <button type="submit">Add</button>
                    <button type="button" onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm;

// Viet code cho nut Reset