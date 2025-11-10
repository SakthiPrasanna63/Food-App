import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-right">
          <img className="logo" src={assets.logo} alt="" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem earum qui omnis dolorem, ab praesentium sunt soluta ipsam aliquam veritatis quos error cum molestias impedit. Totam ipsam aliquid a ex!</p>
          <div className="footer-social-icons">
            <img  src={assets.facebook_icon} alt="" />
            <img  src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>

        </div>
        <div className="footer-content-left">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 1234567890</li>
                <li>prasanna@gmail.com</li>
            </ul>

        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2025 - All Right Reserved</p>
    </div>
  )
}

export default Footer
