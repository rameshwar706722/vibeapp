import React from "react";
function Footer() {
    return (
      <div>
       <footer className="footer-one">
             <div className="footer-one__bg" style={{backgroundImage: 'url("assets/images/backgrounds/footer-bg.jpg")'}}>

            </div> 
            <div className="shape1 float-bob-x"><img src="assets/images/shapes/footer-v1-shape1.png" alt="#"/></div>
            <div className="shape2 float-bob-y"><img src="assets/images/shapes/footer-v1-shape2.png" alt="#"/></div>
            <div className="shape3 float-bob-y"><img src="assets/images/shapes/footer-v1-shape3.png" alt="#"/></div>
            <div className="shape4 float-bob-x"><img src="assets/images/shapes/footer-v1-shape4.png" alt="#"/></div>

            <div className="footer-one__top">
                <div className="container">
                    <div className="row">

                        <div className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.1s">
                            <div className="footer-one__single footer-one__about">
                                <div className="footer-one__about-logo">
                                    <a href="index-2.html"><img src="assets/images/white.png" alt=""/></a>
                                </div>

                                <div className="footer-one__about-text">
                                    <p>Over 20 years of experience we’ll ensure you get the best guidance.</p>
                                </div>
                            </div>
                        </div>
                    
                        <div className="col-xl-4 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.2s">
                            <div className="footer-one__single footer-one__post">
                                <div className="title-box">
                                    <h3>Popular Post</h3>
                                </div>
                                <div className="footer-one__post-box">
                                    <ul className="footer-one__post-list">
                                        <li>
                                            <div className="img-box">
                                                <img src="assets/images/resources/footer-v1-img1.jpg" alt="#"/>
                                            </div>

                                            <div className="content-box">
                                                <p><span className="icon-calendar2"></span> 02 Jan 2023</p>
                                                <h4><a href="blog.html">Benefits of Cloud-powered <br/>
                                                        disaster recovery network</a></h4>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="img-box">
                                                <img src="assets/images/resources/footer-v1-img2.jpg" alt="#"/>
                                            </div>

                                            <div className="content-box">
                                                <p><span className="icon-calendar2"></span> 05 Jan 2023</p>
                                                <h4><a href="blog.html">UX/UI design benefits for <br/>
                                                        businesses in 2023</a></h4>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                      
                        <div className="col-xl-2 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.3s">
                            <div className="footer-one__single footer-one__links">
                                <div className="title-box">
                                    <h3>Links</h3>
                                </div>
                                <div className="footer-one__links-box">
                                    <ul className="footer-one__links-list">
                                        <li>
                                            <a href="#">Cookie Policy</a>
                                        </li>
                                        <li>
                                            <a href="#">Careers</a>
                                        </li>
                                        <li>
                                            <a href="#">Policy</a>
                                        </li>
                                        <li>
                                            <a href="about.html">About us
                                            </a>
                                        </li>
                                        <li>
                                            <a href="contact.html">Contact Us</a>
                                        </li>
                                        <li>
                                            <a href="pricing.html">Pricing & Plans</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    
                        <div className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.4s">
                            <div className="footer-one__single footer-one__newsletter">
                                <div className="title-box">
                                    <h3>Newsletter</h3>
                                </div>
                                <div className="footer-one__newsletter-box">
                                    <div className="footer-one__newsletter-text1">
                                        <p>Get the latest news other tips </p>
                                    </div>
                                    <form className="footer-one__newsletter-form">
                                        <div className="footer-one__newsletter-form-input-box">
                                            <div className="icon"><span className="icon-email2"></span></div>
                                            <input type="email" placeholder="Email Address" name="email"/>
                                        </div>

                                        <div className="footer-one__newsletter-btn">
                                            <button className="thm-btn" type="submit">
                                                Subscribe
                                            </button>
                                        </div>
                                    </form>

                                    <div className="footer-one__newsletter-text2">
                                        <p>Looking to kick-off your project in <br/>
                                            the next 30-90 days? </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-one__bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="footer-one__bottom-inner">
                                <div className="footer-one__bottom-left">
                                    <div className="title-box">
                                        <p>Social </p>
                                    </div>

                                    <div className="social-links">
                                        <ul>
                                            <li><a href="#"><span className="icon-facebook"></span></a></li>
                                            <li><a href="#"><span className="icon-twitter"></span></a></li>
                                            <li><a href="#"><span className="icon-pinterest"></span></a></li>
                                            <li><a href="#"><span className="icon-instagram"></span></a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="footer-one__bottom-right">
                                    <p>©2023 <a href="index-2.html">VibeApps</a> All Rights Reserved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    
      </div>
    );
  }
  
  export default Footer;