import './Input.css';

const Input = (props) => {

    const inputValue = (e) => {
        props.updated(e.target.value)
        console.log(props.updated)
    }
    return (
        <div className="text">
            <label>{props.label}</label>
            <input
                value={props.value}
                onChange={inputValue}
                required={props.required}
                type="text"
                placeholder={props.placeholder} />
        </div>
    )
}

export default Input;