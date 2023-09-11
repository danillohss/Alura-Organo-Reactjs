import Colaborator from '../Colaborator/Colaborator';
import './Team.css'

const Team = (props) => {
    const primaryColor = { backgroundColor: props.primaryColor };
    const secondColor = { borderColor: props.secondColor };
    return (
        props.colaborators.length > 0 && <section className='team' style={primaryColor} >
            <h3 style={secondColor}>{props.name}</h3>
            <div className='colaborators'>
                {props.colaborators.map(colaborator => <Colaborator nameColaborator={colaborator.name} imgColaborator={colaborator.image} />)}
            </div>
        </section>
    )
}

export default Team;