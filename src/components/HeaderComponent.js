import React from 'react'

const HeaderComponent = () => {
  return (
    <div>
      <header className="header">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">

          <div>
            <a href="http://localhost:3000/customers" className="navbar-brand">
              Bank Application
            </a>
          </div>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="/Login">Login</a>
              <a className="nav-item nav-link" href="/AdminLogin">Admin Login</a>
              <a className="nav-item nav-link " href="/AdminLogin">Logout</a>
            </div>
          </div>



        </nav>
      </header>
    </div>
  )
}

export default HeaderComponent
