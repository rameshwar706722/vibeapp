import React from "react";

import { Link } from "react-router-dom";




function Header() {
    return (
      <div className="App">
      
        <header className="main-header main-header-one clearfix">
            <div className="main-header-one__top">
                <div className="container">
                    <div className="main-header-one__top-inner">
                        <div className="main-header-one__top-left">
                            <div className="main-header-one__top-left-btn">
                                <a href="contact.html">Contact us</a>
                            </div>
                        </div>

                        <div className="main-header-one__top-right">
                            <div className="main-header__contact-info">
                                <ul>
                                    <li>
                                        <div className="inner">
                                            <div className="icon-box">
                                                <span className="icon-call"></span>
                                            </div>
                                            <div className="text-box">
                                                <p>Call for Anything </p>
                                                <h4><a href="tel:8857002451">+91 8349359939 </a></h4>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="inner">
                                            <div className="icon-box">
                                                <span className="icon-email"></span>
                                            </div>
                                            <div className="text-box">
                                                <p>You may send an email</p>
                                                <h4><a href="mailto:yourmail@email.com">helpus24@gmail.com</a></h4>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="inner">
                                            <div className="icon-box">
                                                <span className="icon-clock2"></span>
                                            </div>
                                            <div className="text-box">
                                                <p>Sunday - Closed</p>
                                                <h4>Mon - Sat(9.00 - 6.00) </h4>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-header-one__bottom">
                <nav className="main-menu clearfix">
                    <div className="main-menu__wrapper clearfix">
                        <div className="container">
                            <div className="main-header-one__bottom-inner">

                                <div className="main-header-one__bottom-left">
                                    <div className="logo-one">
                                    <Link to="/home"><img src="assets/images/white.png" alt="" /></Link>
                                    </div>

                                    <div className="main-menu__main-menu-box">
                                    <Link to="/"className="mobile-nav__toggler"><i className="fa fa-bars"></i></Link>
                                  
                                        <ul className="main-menu__list">
                                            <li>
                                            <Link to="/home">Home</Link>
                                            </li>
                                            <li>
                                                <Link to="/project">Project</Link>

                                                {/* <ul>
                                                    <li>
                                                    <Link to="/ecom">E-Commerce</Link>
                                                    </li>
                                                    <li>
                                                    <Link to="/informative">Informative</Link>
                                                    </li>
                                                    <li>
                                                    <Link to="/erp">ERP & CRM</Link>
                                                    </li>
                                                    <li>
                                                    <Link to="/webdev">Mobile Apps</Link>
                                                    </li>
                                                    <li>
                                                    <Link to="/cms">CMS</Link>
                                                    </li>
                                                </ul> */}
                                                
                                            </li>
                                            <li>
                                                <Link to="/internship">Internship</Link>
                                                
                                            </li>
                                            <li>
                                                {/* <a href="about.html">About</a> */}
                                                <Link to="/about">About</Link>
                                            </li>
                                            <li>
                                            <Link to="/services">Services</Link>
                                          
                                                <ul>
                                                    <li>
                                                    <Link to="/websitedev">Web Development</Link>
                                                    </li>
                                                    <li className="disable">
                                                    <Link to="/webdev">App Development</Link>
                                                    </li>
                                                    {/* <li>
                                                    <Link to="#">Marketing</Link>
                                                    </li> */}
                                                </ul>
                                            </li>
                                           <li>
                                           <Link to="/blogs">Blogs</Link>
                                               
                                            </li>
                                            <li>  <Link to="/contact">Contact</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="main-header-one__bottom-right">
                                  

                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
      

        <div className="stricky-header stricky-header__one stricked-menu main-menu">
            <div className="sticky-header__content"></div>
        </div>















    
      </div>
    );
  }
  
  export default Header;