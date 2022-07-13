import React from 'react'
import './style.css'
import logonav from './media/logonav.png'
import 'bootstrap/dist/css/bootstrap.min.css'
const Nav =()=>{
 return(
    <>
    
 <ul id="nav" className="nav fixed-top justify-content-center ">
    <li id='logonav'><img className='logonav1' src={logonav} alt="logonav"/></li>
  <li className="nav-item">
    <a className="nav-link " aria-current="page" href="#"> <em id="home"> Home </em></a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-white" smooth spy to="Features" href="#">Feature</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-white" href="#">Parnet</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-white">About</a>
  </li>
  <button className="getquote">Get The Quotes</button>
</ul>
    </>
 )
}
export default Nav