import React from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'


function Header() {


  return (
    < >

<nav className="navbar navbar-expand-lg navbar-light bg-light fixed w-100 z-50">
  <a className="navbar-brand" href="/">
  <img className='w-28 md:w-32 md:ml-8' src={logo} alt="Logo" />
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About Us</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/events" className="nav-link">Events</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/team" className="nav-link">Team</NavLink>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/contact">Join us</a>
      </li>
      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Social media
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" target='blank' href="https://www.instagram.com/clubtwentyorg/">Instagram</a>
          <a className="dropdown-item" target='blank' href="https://www.facebook.com/clubtwenty.in">Facebook</a>
          <a className="dropdown-item" target='blank' href="https://twitter.com/clubtwentyorg?s=21">Twitter</a>
          <a className="dropdown-item" target='blank' href="https://www.linkedin.com/company/clubtwentyorg/">Linkedin</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" target='blank' href="https://www.youtube.com/@clubtwenty7534">Youtube</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
    </>
  )
}

export default Header
