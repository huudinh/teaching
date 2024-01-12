const FormInput = (props) => {
    return (
        <div>
            <label>
                {props.label}:
                <input placeholder={props.placeholder} type={props.type} value={props.value} onChange={props.onChange} />
            </label>
        </div>
    )
}

export default FormInput;