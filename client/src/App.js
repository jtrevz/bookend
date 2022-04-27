import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/BookNavbar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
        <Navbar/>
        <Router>
          <Routes>
          <Route path='/' exact element={<Home />}/>
          <Route path='/signup' exact element={<Signup/>}/>
          <Route path='/login' exact element={<Login/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
