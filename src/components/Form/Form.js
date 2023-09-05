import './Form.css'
import Input from '../Inputs/Input'
import Button from '../Button/Button.js';
import Select from '../Select/Select.js';
import { useState } from 'react';

const Form = () => {
    const [name, setName] = useState('')
    const [office, setOffice] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')


    const teams = [
        'Programação',
        'Front-end',
        'Data Science',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]
    const onSave = (e) => {
        console.log(team)
        e.preventDefault()
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
                    required={true}
                    label="Cargo"
                    value={office}
                    updated={value => setOffice(value)}
                    placeholder="Digite o cargo"
                />
                <Input
                    label="Imagem"
                    placeholder="Endereço da imagem"
                    value={image}
                    updated={value => setImage(value)}
                />
                <Select
                    required={true}
                    label="Categoria"
                    itens={teams}
                    value={team}
                    updated={value => setTeam(value)}
                />
                <Button text='Criar card' />
            </form>
        </section>
    )
}

export default Form