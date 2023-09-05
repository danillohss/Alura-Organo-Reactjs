import './Form.css'
import Input from '../Inputs/Input'
import Select from '../Select/Select'
import Button from '../../Button/Button'
const Form = () => {
    const teams = [
        'Programação',
        'Front-end',
        'Data Science',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]
    const onSave = (e) => {
        console.log('Submit')
        e.preventDefault()
    };
    return (
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Input required={true} label="Nome" placeholder="Digite o nome" />
                <Input required={true} label="Cargo" placeholder="Digite o cargo" />
                <Input label="Imagem" placeholder="Endereço da imagem" />
                <Select required={true} label="Categoria" itens={teams} />
                <Button text='Criar card' />
            </form>
        </section>
    )
}

export default Form