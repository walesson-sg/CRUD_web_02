import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const ListTeacher = () => {

    const [teachers, setTeachers] = useState([])

    useEffect(
        ()=>{
            axios.get('http://localhost:3001/teachers')
            .then(
                (response)=>{
                    setTeachers(response.data)
                }
            )
            .catch(
                (error)=>{
                    console.log(error)
                }
            )
        }
        ,
        []
    )

    function deleteTeacher(id) {
        if(window.confirm('Deseja excluir?')){
            axios.delete('http://localhost:3001/teachers/'+id)
            .then(()=>console.log('ok'))
            .catch(error=>console.log(error))  
        }
    }

    const generateTableBody = ()=> {
        return teachers.map(
            (element,index)=>{
                element.key = index
                return (
                    <tr>
                        <td>{element.id}</td>
                        <td>{element.name}</td>
                        <td>{element.course}</td>
                        <td>{element.salary}</td>
                        <td>
                            <Link to={'/editTeacher/'+element.id} className='btn btn-primary'>
                                Editar
                            </Link>
                        </td>
                        <td>
                            <button className='btn btn-danger' onClick={()=>deleteTeacher(element.id)}>
                                Apagar
                            </button>
                        </td>
                    </tr>
                )
            }
        )
    }

    return (
        <div>
            <h1>Listar Professores</h1>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Curso</th>
                        <th>Salário</th>
                        <th colSpan={2}>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {generateTableBody()}
                </tbody>
            </table>
        </div>
    )
}

export default ListTeacher