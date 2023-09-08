import './Team.css'

const Team = (props) => {
    const primaryColor = { backgroundColor: props.primaryColor };
    const secondColor = { borderColor: props.secondColor };
    return (
        <section className='team' style={primaryColor} >
            <h3 style={secondColor}>{props.name}</h3>
        </section>
    )
}

export default Team;