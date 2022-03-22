import './App.css';
import { useDispatch } from 'react-redux';
import { fetchUsers } from './services/redux/actions/users';

function App() {
  const dispatch = useDispatch();
  dispatch(fetchUsers())
  return (
    <div className="App">
      <h1>Hola</h1>
    </div>
  );
}

export default App;
