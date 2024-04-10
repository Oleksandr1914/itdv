
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import './App.css';



function App() {


  return (
    <main className="App">
      <header className='Header'>
        <ul>
          <li><Link to='/'>home</Link></li>
          <li><Link to='/about'>about</Link></li>
          <li><Link to='/movies'>movies</Link></li>
        </ul>

      </header>
      <Outlet />
    </main>
  );
}

export default App;
