import React from 'react';
import "./signup.css";

export default function signup() {
  return (
    <form className="forms">
      <div className='row'>
      <a className='text-center col' href="/login">Sign In</a>
      <a className='col' href="/signup">Sign Up</a>
      </div>
      <br />
      <div class="mb-3">
    <label for="exampleInputfirstName" class="form-label">First Name</label>
    <input type="firstName" class="form-control" id="exampleInputFirstName" placeholder="First name"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputLastName" class="form-label">Last Name</label>
    <input type="lastName" class="form-control" id="exampleInputLastName" placeholder="Last name"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter password" />
  </div>
  {/* <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Remember me</label>
  </div> */}
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  )
}
