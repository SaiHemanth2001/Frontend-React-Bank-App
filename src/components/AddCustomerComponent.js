import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CustomerService from '../Services/CustomerService'

const AddCustomerComponent = () => {

    const [accountNumber, setAccountNumber] = useState(0)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [ifsc, setIfsc] = useState('')
    const [amount, setAmount] = useState(0)
    const navigate = useNavigate();

    const saveCustomer = (e) => {
        e.preventDefault();
        const customer = { accountNumber, firstName, lastName, email, password, ifsc, amount }
        CustomerService.createEmployee(customer).then((response) => {
            console.log(response.data)
            navigate("/")
        }).catch(error => {
            console.log(error)
        })
    }
    return (
        <div>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h2 className="text-center">Register Customer</h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label">Account Number</label>
                                    <input
                                        type="number"
                                        placeholder="Enter the account number"
                                        name="accountNumber"
                                        className="form-control"
                                        value={accountNumber}
                                        onChange={(e) => setAccountNumber(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">First Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter the first name"
                                        name="firstName"
                                        className="form-control"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Last Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter the last name"
                                        name="lastName"
                                        className="form-control"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mt-3">
                                    <label>Email address</label>
                                    <input
                                        type="email"
                                        className="form-control mt-1"
                                        placeholder="Enter email"
                                        name="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Password</label>
                                    <input
                                        type="password"
                                        placeholder="Enter the password"
                                        name="password"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">IFSC</label>
                                    <input
                                        type="text"
                                        placeholder="Enter the ifsc"
                                        name="ifsc"
                                        className="form-control"
                                        value={ifsc}
                                        onChange={(e) => setIfsc(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Amount</label>
                                    <input
                                        type="number"
                                        placeholder="Enter the amount"
                                        name="amount"
                                        className="form-control"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className="btn btn-primary" onClick={(e) => saveCustomer(e)}>Submit</button>

                                <Link to="/customers" className="btn btn-danger">Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCustomerComponent
