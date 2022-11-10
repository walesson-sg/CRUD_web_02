import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateTeacher = () => {

    const [name, setName] = useState('')
    const [course, setCourse] = useState('')
    const [salary, setSalary] = useState(0.0)
    const navigate = useNavigate()

    const handleSubmit = (event)=> {
        event.preventDefault()
        /*console.log(name)
        console.log(course)
        console.log(ira)*/
        const newTeacher = {name,course,salary}
        axios.post('http://localhost:3001/teachers',newTeacher)
        .then(
            (response)=>{
                console.log(response.data.id)
                navigate('/listTeacher')
            }
        )
        .catch(error=>console.log(error))

    }

    return (
        <div style={{marginTop:20}}>
            <h2>Criar Professor</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Nome: </label>
                    <input 
                        type='text'
                        className='form-control'
                        placeholder='Digite seu nome'
                        onChange={
                            (event)=>{
                                setName(event.target.value)
                            }
                        }
                    />
                </div>
                <div className='form-group'>
                    <label>Curso: </label>
                    <input 
                        type='text'
                        className='form-control'
                        placeholder='Digite seu curso'
                        onChange={
                            (event)=>{
                                setCourse(event.target.value)
                            }
                        }
                    />
                </div>
                <div className='form-group'>
                    <label>Salário: </label>
                    <input 
                        type='number'
                        step='any'
                        className='form-control'
                        placeholder='Digite seu Salário'
                        onChange={
                            (event)=>{
                                setSalary(event.target.value)
                            }
                        }
                        />
                </div>
                <div className='form-group' style={{marginTop:15}}>
                    <input 
                        type='submit' 
                        value='Criar Professor'
                        className='btn btn-primary' 
                        />
                </div>
            </form>
        </div>
    )
}

export default CreateTeacher