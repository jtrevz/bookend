import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/BookNavbar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
        <Navbar/>
        <Router>
          <Routes>
          <Route path='/' exact element={<Home />}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
