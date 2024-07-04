import React from 'react'
import  Logo from '../../images/footer-logo.png'
import  Facebook from '../../images/social-icons/Facebook.png'
import  Instagram from'../../images/social-icons/Instagram.png'
import  LinkedIn from'../../images/social-icons/LinkedIn.png'
import  Twitter from'../../images/social-icons/Twitter.png'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-sec'>
        <div className='container footer-line'>
            <div className='row footer-row'>
           
                <div className='col-lg-2 '>
                <ul className='logo-sec'>
                <a className="navbar-brand ml-auto" href="/">
          <img src={Logo} alt="logo" aria-label='logo' style={{width:'160px'}}/>
        </a>
                    <li className='copy'><a href='/'>&copy; R Singhania
                    </a></li>
                </ul>
                </div>
                <div className='col-lg-2 company'>
                <h1 className='footer-head '>Company</h1>
                <ul>
                    <li className='footer-menu'><a href='/'>About</a></li>
                    <li className='footer-menu'><a href='/'>FAQ</a></li>
                </ul>
                </div>
                <div className='col-lg-2 '>
                <h1 className='footer-head'>Terms</h1>
                <ul>
                    <li className='footer-menu'><a href='/'>Data Privacy</a></li>
                    <li className='footer-menu'><a href='/'>Terms</a></li>
                    <li className='footer-menu'><a href='/'>Accessibility</a></li>
                </ul>
                </div> 
                <div className='col-lg-2 '>
                <h1 className='footer-head'>Related</h1>
                <ul>
                    <li className='footer-menu'><a href='/'>Find Buyer</a></li>
                    <li className='footer-menu'><a href='/'>Feedback</a></li>
                </ul>
                </div>
                <div className='col-lg-4 '>
                <ul className='footer-icons'>
                    <li><a href='/'> <img src={LinkedIn} alt="logo" aria-label='logo' style={{width:'40px', height:'40px'}}/></a></li>
                    <li><a href='/'> <img src={Twitter} alt="logo" aria-label='logo' style={{width:'40px', height:'40px'}}/></a></li>
                    <li><a href='/'> <img src={Facebook} alt="logo" aria-label='logo' style={{width:'40px', height:'40px'}}/></a></li>
                    <li><a href='/'> <img src={Instagram} alt="logo" aria-label='logo' style={{width:'40px', height:'40px'}}/></a></li>
                </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer