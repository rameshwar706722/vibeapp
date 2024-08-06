import React from "react";
import Header from "./Header";

import { Link } from "react-router-dom";

function Webapp() {
    return (
    <>

    <Header/>


    <section className="services-details">
<div className="container">
    <div className="row">

        <div className="col-xl-4">
            <div className="sidebar">
                <div className="sidebar__single sidebar__services wow animated fadeInUp" data-wow-delay="0.1s">
                    <div className="title-box">
                        <div className="inner">
                            <div className="shape"><img src="assets/images/shapes/sidebar-title-shape.png"
                                    alt="#"/>Web App Development</div>
                        </div>
                    </div>

                    <div className="sidebar__services-box">
                        <ul className="sidebar__services-box-list clearfix">
                        <li>
                           <Link to="/webdev">Mobile App Development<span className="icon-right-arrow2"></span></Link>
                     </li>

                     <li>
                     <Link to="/ios">iOS App Development<span className="icon-right-arrow2"></span></Link>
                     </li> <li>
                     <Link to="/android">Android App Development <span className="icon-right-arrow2"></span></Link>
                     </li> 
                        </ul>
                    </div>

                </div>

                <div className="sidebar__single sidebar__author wow animated fadeInUp" data-wow-delay="0.2s">
                    <div className="sidebar__author-box text-center">
                        <div className="shape1"><img src="assets/images/shapes/sidebar-shape1.png" alt="#"/>
                        </div>
                        <div className="shape2"><img src="assets/images/shapes/sidebar-shape2.png" alt="#"/>
                        </div>
                        <div className="shape3"><img src="assets/images/shapes/sidebar-shape3.png" alt="#"/>
                        </div>
                        <div className="shape4"><img src="assets/images/shapes/sidebar-shape4.png" alt="#"/>
                        </div>
                        <div className="sidebar__author-box-icon">
                            <span className="icon-bubble-message"></span>
                        </div>
                        <div className="sidebar__author-box-text">
                            <h3>Neque porro est qui
                                dolorem ipsum quia quaed
                                inventore veritatis et </h3>
                        </div>
                        <div className="sidebar__author-box-img"><img
                                src="assets/images/resources/sidebar-img1.jpg" alt="#"/></div>
                        <h2>Alex Handson</h2>
                    </div>
                </div>

                <div className="sidebar__single sidebar__contact wow animated fadeInUp" data-wow-delay="0.3s">
                    <div className="title-box">
                        <div className="inner">
                            <div className="shape"><img src="assets/images/shapes/sidebar-title-shape.png"
                                    alt="#"/></div>
                            <h2>Have Any Query</h2>
                        </div>
                    </div>

                    <div className="sidebar__contact-box">
                        <div className="sidebar__contact-box-img">
                            <div className="gradient-bg" style={{backgroundImage:'url("assets/images/backgrounds/sidebar-gradient-bg1.png")'}}
                            ></div>                                        
                            <img src="assets/images/resources/sidebar-img2.jpg" alt="#"/>

                            <div className="overlay-content text-center">
                                <h3>Have Questions? <br/>
                                    Nothing stops us from <br/>
                                    doing what we like</h3>
                                <div className="number-box">
                                    <div className="icon-box">
                                        <span className="icon-phone-auricular"></span>
                                    </div>

                                    <div className="text-box">
                                        <a href="tel:+91 8349359939 ">+91 8349359939  </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              
            </div>
        </div>
        {/* <!--End Sidebar-->

        <!--Start Services Details Content--> */}
        <div className="col-xl-8">
            <div className="services-details__content">
                <div className="services-details__content-text1">
                    <h2>Web App Development</h2>
                    <p className="text1">
App development, short for application development, refers to the process of creating software applications that run on various devices, such as smartphones, tablets, desktop computers, and other electronic devices. These applications, commonly known as apps, are designed to perform specific tasks, offer services, or provide entertainment for users.</p>
                    <h3>Key aspects of app development include:</h3><hr/>
                    <h3>User Interface (UI) Design:</h3>
                    <p className="text3">
                    Creating an intuitive and visually appealing interface for users to interact with. UI design is crucial for providing a positive user experience.
                    </p>
                    <hr/>
                    <h3>Functionality:</h3>
                    <p className="text3">
                    Implementing the features and functionalities that fulfill the app's purpose. This involves writing code, integrating APIs (Application Programming Interfaces), and managing data.
                    </p><hr/>
                    <h3>Testing:</h3>
                    <p className="text3">
                    Rigorous testing is performed to identify and fix bugs, ensure the app functions correctly, and provide a smooth user experience. Testing may include unit testing, integration testing, and user acceptance testing
                    </p><hr/>
                    <h3>Deployment:</h3>
                    <p className="text3">
                    Making the app available for users to download and install. For mobile apps, this often involves submitting the app to app stores (such as the Apple App Store or Google Play Store).
                    </p><hr/>
                    <h3>Maintenance and Updates:</h3>
                    <p className="text3">
                    Ongoing maintenance is essential to address bugs, security vulnerabilities, and compatibility issues. Developers also release updates to introduce new features or improvements.
                    </p><hr/>
                   
                    <ul className="services-details__content-text1-list">
                        <li>
                            <div className="icon-box">
                                <span className="icon-check-circle"></span>
                            </div>

                            <div className="text-box">
                                <h4>Business IT Solutions</h4>
                            </div>
                        </li>

                        <li>
                            <div className="icon-box">
                                <span className="icon-check-circle"></span>
                            </div>

                            <div className="text-box">
                                <h4>Identify Areas to Optimize</h4>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="services-details__content-img1">
                    <img src="assets/images/services/services-details-img1.jpg" alt="#"/>                </div>

                <div className="services-details__content-text2">
                    <p className="text1">There are many variations of passages of Lorem Ipsum available, but the
                        majority have suffered alteration in some form, by injected humour, or randomised
                        words which don't look even slightly believable. Labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea
                        commodo consequat.</p>

                    <ul className="services-details__content-text2-list">
                        <li>
                            <div className="icon-box">
                                <span className="icon-web-design"></span>
                                <div className="top-icon"><span className="icon-check-circle"></span></div>
                            </div>

                            <div className="content-box">
                                <h3>IT Disaster recovery maturity Assessment</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliquamini</p>
                            </div>
                        </li>

                        <li>
                            <div className="icon-box">
                                <span className="icon-data"></span>
                                <div className="top-icon"><span className="icon-check-circle"></span></div>
                            </div>

                            <div className="content-box">
                                <h3>Plan for the unexpected</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua </p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="services-details__content-text3">
                    <div className="content-box">
                        <p>Get the most out of your technology investment with transformative integrated
                            business IT solutions that enable you to achieve essential business goals and
                            seize valuable opportunities for growth.ensure the
                            campaign is successful.</p>

                        <ul>
                            <li>
                                <p><span className="icon-tick"></span> I must explain to you how all this
                                    mistaken idea
                                </p>
                            </li>

                            <li>
                                <p><span className="icon-tick"></span> At vero eos et accusamus et iusto odio
                                </p>
                            </li>

                            <li>
                                <p><span className="icon-tick"></span> Lorem ipsum dolor sit amet, consectetur
                                    elit
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div className="img-box">
                        <img src="assets/images/services/services-details-img2.jpg" alt="#"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>

<section class="contact-info-one">
            <div class="container">
                <div class="contact-info-one__inner">
                    <div class="contact-info-one__bg"
                        style={{backgroundImage:' url(assets/images/backgrounds/contact-info-v1-bg.jpg)'}}></div>
                    <div class="row">
                        
                        <div class="col-xl-4 col-lg-4">
                            <div class="contact-info-one__single">
                                <div class="icon-box">
                                    <span class="icon-location-filled"></span>
                                </div>

                                <div class="content-box">
                                <p>Address</p>
                                    <h3>Mr 10 Square Vijay Nagar, Indore  <br/>Madhya Pradesh, India</h3>
                                </div>
                            </div>
                        </div>
                       
                        <div class="col-xl-4 col-lg-4">
                            <div class="contact-info-one__single ml75">
                                <div class="icon-box">
                                    <span class="icon-phone-auricular"></span>
                                </div>

                                <div class="content-box">
                                    <p>Get In Touch</p>
                                    <h3><a href="tel:7067224946">+91 7067224946</a></h3>
                                    <h3><a href="tel:7470409407">+91 7470409407</a></h3>
                                </div>
                            </div>
                        </div>
                       
                        <div class="col-xl-4 col-lg-4">
                            <div class="contact-info-one__single ml70">
                                <div class="icon-box">
                                    <span class="icon-email2"></span>
                                </div>

                                <div class="content-box">
                                    <p>Quick Email us</p>
                                    <h3><a href="mailto:yourmail@email.com">help12@sitename.com</a></h3>
                                    <h3><a href="mailto:Support24@gmail.com">Support24@gmail.com</a></h3>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
   

    </>
    );
  }
  
  export default Webapp;