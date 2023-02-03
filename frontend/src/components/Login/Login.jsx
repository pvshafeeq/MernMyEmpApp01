import React from 'react'
import { useState } from 'react';
import { Icon, Label, Menu, Table, Button, Segment, Container, Form, TextArea, Dropdown } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const authenticate = () => {
    if(username !== undefined && username !== null && username !==''&& password !== undefined && password !== null && password !=='')
    {
      const userData = {
        "user": username,
        "password": password
      }
  
      axios.post('http://localhost:8052/api/user/login', userData)
        .then((getData) => {
          if (getData.data) {
            sessionStorage.setItem("username", userData.user);
            navigate('/home');
          }
          else {
            alert('Invalid Username or Password!')
          }
        }
        )
      }
      else
      {
        alert('Username and Password are required!')
      }
    }

  return (
    <Container text>
    <br></br>
    <div className="p-3 mb-2 bg-secondary text-white"><b>Employee App Login</b></div>
    <Segment>
      <Form>
        <Form.Field>
          <label>User Name</label>
          <input name='username' placeholder='User Name' onChange={(e) => setUsername(e.target.value)} />
        </Form.Field>

        <Form.Field>
          <label>Password</label>
          <input type="password" name='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
        </Form.Field>

        <Button color='grey' type='submit' onClick={authenticate}>Log In</Button>
      </Form>
    </Segment>
  </Container>
  )
}

export default Login