import './Colaborator.css'

const Colaborator = (props) => {
    return (
        <div className='colaborator'>
            <div className='header'>
                <img src={props.imgColaborator} alt={props.nameColaborator} />
            </div>
            <div className='footer'>
                <h4>{props.nameColaborator}</h4>
                <h5>Front-end</h5>
            </div>
        </div>
    )
}

export default Colaborator;