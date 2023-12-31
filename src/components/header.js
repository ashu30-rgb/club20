import React from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'


function Header() {


  return (
    < >
    {/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> */}


<nav className="navbar navbar-expand-lg navbar-light bg-light fixed w-100 z-50 px-2 md:px-0">
  <a className="navbar-brand" href="/">
  <img className='w-28 md:w-32 md:ml-8' src={logo} alt="Logo" />
  </a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
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
        <NavLink className="nav-link" to="/contact">Join us</NavLink>
      </li>
      <li className="nav-item dropdown">
      <Link className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown"  aria-expanded="false">
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
