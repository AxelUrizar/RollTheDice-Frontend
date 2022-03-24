import './App.css';
import "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { useDispatch } from 'react-redux';
import { fetchUsers } from './services/redux/actions/users';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './components/layout/Home';

function App() {
  const dispatch = useDispatch();
  dispatch(fetchUsers())
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='home' element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
