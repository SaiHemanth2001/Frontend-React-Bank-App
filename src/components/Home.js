import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='center'><br />
        <br />
      <Link className='btn btn-light'> Login</Link><br /><br />
      <Link className='btn btn-primary'>Admin Login</Link><br /><br />
      <Link className='btn btn-primary'>Manager Login</Link><br /><br />
    </div>
  )
}

export default Home
