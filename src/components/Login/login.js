import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import './login.css';
// import {useState} from 'react';
// import axios from "axios";
import {IconButton} from "@material-ui/core";
import EmailIcon from '@mui/icons-material/Email';



function Login() {
  // const [email,setEmail] = useState('');
  // const [password,setPassword] = useState(''); 

  // const handleEmail = (e)=>{
  //   setEmail(e.target.value)
  // }

  // const handlePassword = (e)=>{
  //   setPassword(e.target.value)
  // }
  // const handleApi = ()=>{
  //   axios.post('',{
  //     email: email,
  //     password: password
  //   })
  //   .then(result => {
  //     console.log(result.data)
  //     alert('success')
  //   })
  //   .catch(error => {
  //     console.log(error)
  //     alert('service error')
  //   })

  return (
    <div>
      <div className='row'>
        <div className='col'>
          <IconButton>
            <EmailIcon/>
          </IconButton>
        </div>
        <div className='col' placeholder='Email ID'></div>
      </div>

    </div>
//     <form className="forms">
//       <h2 className='text-center'>Sign In</h2>
//       {/* <div className='row'>
//       <a className='text-center col' href="/login">Sign In</a>
//       </div> */}
//       <br />
//   <div class="mb-3">
//     <label for="exampleInputEmail1" class="form-label">Email address</label>
//     <input type="email" value={email} onChange={handleEmail} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
//   </div>
//   <div class="mb-3">
//     <label for="exampleInputPassword1" class="form-label">Password</label>
//     <input type="password" value={password} onChange={handlePassword} class="form-control" id="exampleInputPassword1" placeholder="Enter password" />
//   </div>
//   <div class="mb-3 form-check">
//     <input type="checkbox" class="form-check-input" id="exampleCheck1" />
//     <label class="form-check-label" for="exampleCheck1">Remember me</label>
//   </div>
//   <button type="submit" onClick={handleApi} class="btn btn-primary">Submit</button>
// </form>
  )
}

export default Login