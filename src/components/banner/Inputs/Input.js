import './Input.css';

const Input = (props) => {
    return (
        <div className="text">
            <label>{props.label}</label>
            <input
                required={props.required}
                type="text"
                placeholder={props.placeholder} />
        </div>
    )
}

export default Input;