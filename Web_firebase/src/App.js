import { Routes, Route, Link } from 'react-router-dom'

import Home from './components/Home';
import CreateStudent from './components/students/CreateStudent';
import EditarStudent from './components/students/EditStudent';
import ListStudent from './components/students/ListStudent';

import CreateTeacher from './components/teacher/CreateTeacher';
import EditTeacher from './components/teacher/EditTeacher';
import ListTeacher from './components/teacher/ListTeacher';

function App() {
  return (
    <div className='container'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        {/* Rotas React */}
        <Link to={'/'} className='navbar-brand' style={{ paddingLeft: 10 }}>CRUD</Link>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>Home</Link>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Estudante
              </a>
              {/* ALUNO */}
              <ul class="dropdown-menu">
                <li className='nav-item'>
                  <Link to='/createStudent' className='nav-link'>Criar Estudante</Link>
                </li>

                <li className='nav-item'>
                  <Link to='/editStudent' className='nav-link'>Editar Estudante</Link>
                </li>

                <li className='nav-item'>
                  <Link to='/listStudent' className='nav-link'>Listar Estudante</Link>
                </li>
              </ul>
            </li>

            {/* PROFESSOR */}
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Professor
              </a>
              <ul class="dropdown-menu">
                <li className='nav-item'>
                  <Link to='/createTeacher' className='nav-link'>Criar Professor</Link>
                </li>

                <li className='nav-item'>
                  <Link to='/editTeacher' className='nav-link'>Editar Professor</Link>
                </li>

                <li className='nav-item'>
                  <Link to='/listTeacher' className='nav-link'>Listar Professor</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>

      {/* controla as rotas */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='createStudent' element={<CreateStudent />} />
        <Route path='editStudent/:id' element={<EditarStudent />} />
        <Route path='listStudent' element={<ListStudent />} />

        <Route path='createTeacher' element={<CreateTeacher />} />
        <Route path='editTeacher/:id' element={<EditTeacher />} />
        <Route path='listTeacher' element={<ListTeacher />} />
      </Routes>
    </div>
  );
}

export default App;
