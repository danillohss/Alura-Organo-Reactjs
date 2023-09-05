import './Select.css'

const Select = (props) => {
    return (
        <div className='select'>
            <label>{props.label}</label>
            <select
                required={props.required}
                value={props.value}
                onChange={event => props.updated(event.target.value)}
            >
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default Select