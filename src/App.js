import './App.css';
import "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { useDispatch } from 'react-redux';
import { fetchUsers } from './services/redux/actions/users';
import { Route, Routes } from 'react-router-dom';
import { getPlayer } from './services/redux/actions/player';

import { Layout } from './components/layout/Layout';
import { Home } from './components/layout/Home';
import { Profile } from './components/pages/usuarios/Profile'
import LogIn from './components/pages/session/LogIn';
import Error404 from './components/layout/Error404';
import SignUp from './components/pages/session/SignUp';
import { Game } from './components/pages/Games/Game';

function App() {
  const dispatch = useDispatch();
  dispatch(fetchUsers())
  if(localStorage.getItem('user')) dispatch(getPlayer())
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='' element={<Home />} />

          <Route path='login' element={<LogIn />} />
          <Route path='signup' element={<SignUp />} />

          <Route path='perfil' element={<Profile />} />

          <Route path='game' element={<Game />} />

          <Route path='*' element={<Error404 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
