import './App.css';
import "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './services/redux/actions/users';
import { Route, Routes } from 'react-router-dom';
import { getPlayer } from './services/redux/actions/player';

import { Layout } from './components/layout/Layout';
import { Home } from './components/pages/Home/Home';
import { Profile } from './components/pages/Users/Profile'
import LogIn from './components/pages/Session/LogIn';
import Error404 from './components/layout/Error404';
import SignUp from './components/pages/Session/SignUp';
import { Game } from './components/pages/Games/Game';
import { getPlayerHistory } from './services/redux/actions/games';
import { Ranking } from './components/pages/Ranking/Ranking';
import { useEffect } from 'react';
import { EditarPerfil } from './components/pages/Users/EditarPerfil';
import { Toaster } from 'react-hot-toast';
import GamesHistory from './components/pages/GamesHistory/GamesHistory';
import UsuariosAdmin from './components/pages/Admin/UsuariosAdmin';
import GameDetail from './components/pages/GamesHistory/GameDetail';
import Proximamente from './components/layout/Proximamente';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers())
    dispatch(getPlayerHistory())
    
    if(localStorage.getItem('user')) {
      dispatch(getPlayer())
    }
  })
  
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<Layout />}>
          <Route path='' element={<Home />} />

          {/* Session endpoints */}
          <Route path='login' element={<LogIn />} />
          <Route path='signup' element={<SignUp />} />

          {/* Admin endpoints */}
          <Route path='admin/usuarios' element={<UsuariosAdmin />} />

          {/* Player endpoints */}
          <Route path='perfil/:id' element={<Profile />} />
          <Route path='perfil/:id/editar' element={<EditarPerfil />} />

          {/* GamesHistory endpoints */}
          <Route path='historial/:id' element={<GamesHistory />} />
          <Route path='gameDetails/:gameId' element={<GameDetail />} />
          
          {/* Ranking endpoints */}
          <Route path='ranking' element={<Ranking />} />

          {/* Game endpoints */}
          <Route path='game' element={<Game />} />

          {/* Tienda endpoints */}
          <Route path='tienda' element={<Proximamente />} />
          {/* 404 endpoints */}
          <Route path='*' element={<Error404 />} />
        </Route>
      </Routes>
      <Toaster position="top-center" reverseOrder={true} toastOptions={{
        className: 'toastStyle defaultShadow'
      }} />
    </div>
  );
}

export default App;
