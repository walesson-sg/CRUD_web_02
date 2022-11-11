import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import FirebaseContext from '../../utils/FirebaseContext'
import StudentService from '../../services/StudentService'

const ListStudentPage = () => {
    return (
        <FirebaseContext.Consumer>
            {value => <ListStudent firebase={value}/>}
        </FirebaseContext.Consumer>
    )
}

const ListStudent = (props) => {
    const [students, setStudents] = useState([])
    const [reload, setReload] = useState(false)

    useEffect(
        () => {
            StudentService.list_on_snapshot(
            // StudentService.list(
                props.firebase.getFirestoreDb(),
                (students) => {
                    // console.log(students)
                    setStudents(students)
                }
            //)
            )
        }
        ,
        []
    )

    function deleteStudentV2(id){
        if(window.confirm('Deseja excluir?')){
            StudentService.delete(
                props.firebase.getFirestoreDb(),
                ()=> {
                  let studentsTemp = students
                  for(let i=0; i<studentsTemp.length;i++){
                    if(studentsTemp[i].id === id){
                        studentsTemp.splice(i,1)
                        break
                    }
                  }
                  setStudents(studentsTemp)
                  setReload(!reload)
                },
                id
            )
        }
    }

    const generateTableBody = () => {
            return students.map(
                (element,index) => {
                    return (
                      <tr>
                        <td>{element.id}</td>
                        <td>{element.name}</td>
                        <td>{element.course}</td>
                        <td>{element.ira}</td>
                        <td>
                            <Link to={'/editStudent/' + element.id} className='btn btn-primary'>
                                Editar
                            </Link>
                        </td>
                        <td>
                           <button className='btn btn-danger' onClick={()=>deleteStudentV2(element.id)}>
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
            <h1>Listar Estudante <Link to={'/createTeacher'} className='btn btn-primary'>Novo Professor</Link></h1>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Curso</th>
                        <th>IRA</th>
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

export default ListStudentPage