import React from 'react'
import { Icon, Label, Menu, Table, Button, Segment, Container } from 'semantic-ui-react'
import {BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import emplogo from '../../img/emplogo.jpg'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();

    const getUserName = () => {
        let usr=sessionStorage.getItem("username");
        if(usr==null)
        {
  return '';
        }
        else
        {
          return 'Welcome '+ sessionStorage.getItem("username");
        }
      }

      const logout = () => {
        //Removing username from sesstion storage
        sessionStorage.removeItem("username");
        navigate('/');
      };

  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
<img className='ms-100' id='logo' src={emplogo} alt="logo" />
 <h3 className="text-white ml-2">Employee App</h3>
 <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
 </ul>

 <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
   <li className="nav-item active">
     {/* <Link className='nav-link nav-item-active' to='/home'>Home</Link> */}
     <label className='lbl-user'><strong>{getUserName()}</strong></label>
   </li>

   <li className="nav-item active">
     <Button inverted color='grey' onClick={logout}>Logout</Button>
   </li>

 </ul>
</div>
</nav>
</div>
  )
}

export default Navbar