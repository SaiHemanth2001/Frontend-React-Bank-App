import axios from 'axios'
import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Login = () => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const navigate =useNavigate();

    const authenticateCustomer=(e)=>{
        e.preventDefault();
        
        axios.post("http://localhost:8080/api/v1/customers/authenticate",{
            email:email,
            password:password
        }).then(res=>{
            window.localStorage.setItem("jwt",res.data)
             navigate("/UserView/3")
        }).catch(error=>{
            console.log(error)
            alert('Wrong Username or Password ')
        })
    }

  return (
    <div>
        <br /><br />
      <div className="container">
        <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
                <h2 className="text-center">Login</h2>
                <div className="card-body">
                    <form>
                        
                        <div className="form-group mb-2">
                            <label className="form-label">Email Id</label>
                            <input
                            type="text"
                            placeholder="Enter the Email"
                            name ="email"
                            className="form-control"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            >
                            </input>
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label">Password</label>
                            <input
                            type="text"
                            placeholder="Enter the password"
                            name ="password"
                            className="form-control"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            >
                            </input>
                        </div>                        
                        <button className="btn btn-success" onClick={(e)=>authenticateCustomer(e)}>Submit</button>
                        <Link to="/customers" className="btn btn-danger">Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login
