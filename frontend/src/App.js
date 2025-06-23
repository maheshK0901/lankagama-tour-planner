
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PlanTrip from './components/PlanTrip';
import Contact from './components/Contact';
import Houses from './components/Houses';
import Experiences from './components/Experiences';

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/tripplan' element={<PlanTrip/>} />
        <Route path='/houses' element={<Houses/>} />
        <Route path='/experiences' element={<Experiences/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      
    </div>
  );
}

export default App;
