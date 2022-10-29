import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './login.css';
import {useState} from 'react';
import axios from "axios";
import scsLogo from '../Assets/scs-logo.png'



function Login() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState(''); 

  const handleEmail = (e)=>{
    setEmail(e.target.value)
  }

  const handlePassword = (e)=>{
    setPassword(e.target.value)
  }
  const handleApi = ()=>{
    axios.post('',{
      email: email,
      password: password
    })
    .then(result => {
      console.log(result.data)
      alert('success')
    })
    .catch(error => {
      console.log(error)
      alert('service error')
    })
  }

  return (
    <>
    <img src={scsLogo} alt="Student Counselling Services Logo" />
    <Form className="forms">
      <h1 className='text-center'>LOGIN</h1>
      <br />
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" value={email} onChange={handleEmail} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" value={password} onChange={handlePassword} class="form-control" id="exampleInputPassword1" placeholder="Enter password" />
  </div>
  <br />
  <Button type="submit" onClick={handleApi} class="btn btn-primary">LOGIN</Button>
</Form>
</>
  )
}

export default Login