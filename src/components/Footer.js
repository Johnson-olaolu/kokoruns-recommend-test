import React from 'react'
import Logo from '../images/Logo.png'
import '../assets/footer.css'

const Footer = () => {
    return (
        <footer className="">
            <div className="footer-container">
                <img src={Logo} alt="" className=""/>
                <div className="menu">
                    <a href="">Contact Us</a>
                    <a href="">About Us</a>
                    <a href="">Our Community Guidelines</a>
                    <a href="">FAQ</a>
                    <a href="">Terms of Use</a>
                    <a href="">Terms of Service</a>
                    <a href="">Privacy Policy</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
