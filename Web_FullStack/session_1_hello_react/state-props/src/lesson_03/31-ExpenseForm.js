import { useState } from "react";
import FormInput from "./FormInput";

const ExpenseForm = (props) => {
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [date, setDate] = useState('');
    const [formVisible, setFormVisible] = useState(false);

    const toggleFormVisible = () => {
        setFormVisible(!formVisible);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit({
            description: description,
            price: price,
            date: new Date(date)
        })
    };
    const handleDescriptionChange = (event) => {
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
        setDate('');
        setPrice('');
        toggleFormVisible();
    }

    return (
        <div>
            {formVisible? (
                <form onSubmit={handleSubmit}>
                    <FormInput label="Description" type="text" placehoder="Enter description..." value={description} onChange={handleDescriptionChange} />
                    <FormInput label="Price" type="number" placehoder="Enter price..." value={price} onChange={handlePriceChange} />
                    <FormInput label="Date" type="date" placehoder="Enter date..." value={date} onChange={handleDateChange} />
                    <div>
                        <button type="submit">Add</button>
                        <button type="button" onClick={handleCancel}>Cancel</button>
                    </div>
                </form>
            ) : (
                <button type="button" onClick={toggleFormVisible}>Add expense</button>
            )}
            
        </div>
    )
}

export default ExpenseForm;

// An hien Form với toggleFormVisible