import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

import FirebaseContext from '../../utils/FirebaseContext'
import StudentService from '../../services/StudentService'

//consumir o context
const EditarStudentPage = () => {
    return (
        <FirebaseContext.Consumer>
            {value => <EditarStudent firebase={value}/>}
        </FirebaseContext.Consumer>
    )
}


const EditarStudent = (props) => {

    const [name,setName] = useState('')
    const [course,setCourse] = useState('')
    const [ira,setIra] = useState(0.0)
    const navigate = useNavigate() 
    const params = useParams()

    useEffect(
        () => {
            StudentService.retrive(
                props.firebase.getFirestoreDb(),
                (student)=>{
                    setName(student.name)
                    setCourse(student.course)
                    setIra(student.ira)
                },
                params.id
            )
        },
        []
    )

    const handleSubmit = (event) => {
        event.preventDefault()
        const studentUpdated = {name,course,ira}
        StudentService.update(
            props.firebase.getFirestoreDb(),
            (result)=>{
                navigate('/listStudent')
            },
            params.id,
            studentUpdated
        )
    }

    return (
        <div style={{marginTop:20}}>
            <h2>Editar Estudante</h2>

            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Nome:</label>
                    <input 
                        type="text" 
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
                    <label>Curso:</label>
                    <input 
                        type="text" 
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
                    <label>IRA:</label>
                    <input 
                        type="number"
                        step='any'
                        className='form-control'
                        placeholder='Digite seu IRA'
                        value={ira ?? 0.0}
                        onChange={
                            (event)=>{
                                setIra(event.target.value)
                            }
                        }
                    />
                </div>

                <div className='form-group' style={{marginTop:15}}>
                    <input 
                        type="submit" 
                        value="Editar Estudante"
                        className='btn btn-primary'
                    />
                </div>
            </form>
        </div>
    )
}

export default EditarStudentPage