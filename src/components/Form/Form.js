import './Form.css'
import Input from '../Inputs/Input'
import Button from '../Button/Button.js';
import Select from '../Select/Select.js';
import { useState } from 'react';

const Form = (props) => {
    const [name, setName] = useState('')
    const [office, setOffice] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const onSave = (e) => {
        e.preventDefault()
        props.setNewColaborator({
            name,
            office,
            image,
            team
        })
        setName('');
        setOffice('');
        setImage('');
        setTeam('');
    };
    return (
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Input
                    value={name}
                    updated={value => setName(value)}
                    required={true}
                    label="Nome"
                    placeholder="Digite o nome"
                />
                <Input
                    value={office}
                    required={true}
                    label="Cargo"
                    updated={value => setOffice(value)}
                    placeholder="Digite o cargo"
                />
                <Input
                    value={image}
                    label="Imagem"
                    placeholder="Exemplo: https://github.com/NomeUsuario.png"
                    updated={value => setImage(value)}
                />
                <Select
                    value={team}
                    required={true}
                    label="Categoria"
                    itens={props.teams}
                    updated={value => setTeam(value)}
                />
                <Button text='Criar card' />
            </form>
        </section>
    )
}

export default Form