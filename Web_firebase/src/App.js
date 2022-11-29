import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className='container'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
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

      {<CRUDRoutes />}

    </div>
  );
}

export default App;
