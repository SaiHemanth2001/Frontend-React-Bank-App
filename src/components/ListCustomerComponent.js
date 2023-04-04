import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ListCustomerComponent = () => {


    const[customers,setCustomers] = useState([])
    const api ='http://localhost:8080/api/v1/demo/all';
    const token = window.localStorage.getItem('jwt')
    axios.get(api,{headers: {"Authorization":`Bearer ${token}`}})
    .then((response)=>{
            setCustomers(response.data)
        }).catch(error=>{
            console.log(error);
        })

  return (
    <div className="container">
      <h2 className="text-center">List Customers</h2>
      <Link to="/add-customer" className="btn btn-primary mb-2">Register Customer</Link>
      <table className="table table-bordered table-striped" >
        <thead>
            <th>Customer Id</th>
            <th> Account Number</th>
            <th> First Name</th>
            <th> Last Name</th>
            <th> Email</th>
            <th>Password</th>
            <th> IFSC</th>
            <th> Amount </th>
            
        </thead>
        <tbody>
            {
                customers.map(
                    customer =>
                    <tr key={customer.id}>
                        <td>{customer.id}</td>
                        <td>{customer.accountNumber}</td>
                        <td>{customer.firstName}</td>
                        <td>{customer.lastName}</td>
                        <td>{customer.email}</td>
                        <td>{customer.password}</td>
                        <td>{customer.ifsc}</td>
                        <td>{customer.amount}</td>
                    </tr>
                )
            }
        </tbody>
      </table>
    </div>
  )
}

export default ListCustomerComponent
