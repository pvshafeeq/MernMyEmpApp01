import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import ViewEmployee from './components/ViewEmployee/ViewEmployee';
import Login from './components/Login/Login'
import NewEmployee from './components/NewEmployee/NewEmployee'
import EditEmployee from './components/EditEmployee/EditEmployee'

function App() {
  return (
    <>
    <Router>
     <Routes>
       <Route path="/home" element={<ViewEmployee/>} />
       <Route path="/" element={<Login/>} />
       <Route path="/newemployee" element={<NewEmployee/>} />
       <Route path="/editemployee" element={<EditEmployee/>} />
     </Routes>
     </Router>

     <footer className='bg-secondary text-white fixed-bottom'>
   <div className='container text-center text-white'>
     <small>BlogApp &copy; PVShafeeq</small>
   </div>
 </footer>
   </>
  );
}

export default App;
