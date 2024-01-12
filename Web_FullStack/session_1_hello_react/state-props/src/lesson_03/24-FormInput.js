import { useState } from "react"

const FormInput = (props) => {
    const [value, setValue] = useState('');

    const handleValueChange = (event) => {
        setValue(event.target.value)
    }
    
    return (
        <div>
            <label>
                {props.label}:
                <input placeholder={props.placeholder} type={props.type} value={value} onChange={handleValueChange} />
            </label>
        </div>
    )
}

export default FormInput;

// Tạo Component FormInput