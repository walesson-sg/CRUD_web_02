import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"

const EditTeacher = ()=> {

    const [name, setName] = useState('')
    const [course, setCourse] = useState('')
    const [salary, setIra] = useState(0.0)

    const navigate = useNavigate()
    const params = useParams()

    useEffect(
        ()=>{
            //console.log(params.id)
            axios.get('http://localhost:3001/teachers/'+params.id)
            .then(
                (response)=>{
                    //console.log(response.data.name)
                    setName(response.data.name)
                    setCourse(response.data.course)
                    setIra(response.data.salary)
                }
            )
            .catch((error)=>console.log(error))
        }
        ,
        []
    )

    const handleSubmit = (event)=> {
        event.preventDefault()
        const teacherUpdated = {name,course,salary}
        axios.put('http://localhost:3001/teachers/'+params.id,teacherUpdated)
        .then(
            (response)=>{
                navigate('/listTeacher')
            }
        )
        .catch((error=>console.log(error)))
    }

    return (
        <div style={{marginTop:20}}>
            <h2>Editar Professor</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Nome: </label>
                    <input 
                        type='text'
                        className='form-control'
                        placeholder='Digite seu nome'
                        value={(name === null || name === undefined)?'':name}
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
                        value={course ?? ''}
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
                        value={salary ?? 0.0}
                        onChange={
                            (event)=>{
                                setIra(event.target.value)
                            }
                        }
                         />
                </div>
                <div className='form-group' style={{marginTop:15}}>
                    <input 
                        type='submit' 
                        value='Editar Professor'
                        className='btn btn-primary' 
                        />
                </div>
            </form>
        </div>
    )
}

export default EditTeacher