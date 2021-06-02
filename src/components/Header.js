import React from 'react'
import { Container } from 'react-bootstrap'
import Logo from '../images/Logo.png'
import '../assets/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClosedCaptioning, faPowerOff, faSearch } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    return (
       <header className="">
           <div className="header-container">
               <a href="" className=""><img src={Logo} alt="" className="logo" /></a>
               <div className="search-bar">
                   <input type="text" placeholder = "Search For Something..." className="" />
                   <FontAwesomeIcon icon = {faSearch}/>
               </div>
               <div className="log-out"><FontAwesomeIcon icon = {faPowerOff}/></div>
           </div>
       </header>         
    )
}

export default Header
