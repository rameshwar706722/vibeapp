import React from "react";
import Header from "./Header";

import { Link } from "react-router-dom";

function ios() {
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
                                    alt="#"/>IOS App Development</div>
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
                    <h2>IOS app Development</h2>
                    <p className="text1">

                    iOS app development refers to the process of creating mobile applications specifically for Apple's iOS operating system, which powers devices like iPhones, iPads, and iPod Touches. iOS app development is typically done using the Swift programming language and the Apple development environment known as Xcode. Here are key components of iOS app development:</p>
                    <h3>Key aspects of IOS development include:</h3><hr/>
                    <h3>Swift Programming Language:</h3>
                    <p className="text3">
                    Swift is the primary programming language used for iOS app development. It is a powerful and modern programming language developed by Apple. Swift is designed to be easy to read, write, and maintain.
                    </p>
                    <h3>Xcode IDE (Integrated Development Environment):</h3>
                    <p className="text3">
                    Xcode is the official IDE provided by Apple for iOS app development. It includes a code editor, Interface Builder for designing the app's user interface, and various tools for debugging, profiling, and testing.
                    </p>
                    <h3>iOS SDK (Software Development Kit):</h3>
                    <p className="text3">
                    The iOS SDK provides a set of tools and libraries that developers use to build iOS applications. It includes APIs (Application Programming Interfaces) for accessing device features like the camera, GPS, sensors, and more.
                    </p>
                    <h3>Cocoa Touch Framework:</h3>
                    <p className="text3">
                    Cocoa Touch is a set of UI (User Interface) components and frameworks specifically designed for iOS app development. It includes libraries for handling touch events, animation, networking, and other essential tasks.
                    </p>
                    <h3>UIKit Framework:</h3>
                    <p className="text3">
                    UIKit is part of Cocoa Touch and is a framework that provides the building blocks for creating the user interface of an iOS app. It includes classes for handling views, view controllers, and user interactions.
                    </p>
                    <h3>Model-View-Controller (MVC) Architecture:</h3>
                    <p className="text3">
                    iOS apps are often built using the MVC architecture, where the Model represents the app's data and business logic, the View represents the user interface, and the Controller manages the flow of data between the Model and View.
                    </p>
                    <h3>App Store Submission:</h3>
                    <p className="text3">
                    Once an iOS app is developed, it needs to go through the App Store submission process. This involves preparing the app for submission, adhering to Apple's guidelines, and submitting it for review. If the app meets Apple's standards, it gets published on the App Store.
                    </p>
                    <h3>Device Testing:</h3>
                    <p className="text3">
                    iOS developers need to test their apps on various devices to ensure compatibility and a seamless user experience. This includes testing on different iPhone and iPad models with different iOS versions.
                    </p>
                    <h3>SwiftUI (Optional):</h3>
                    <p className="text3">
                    SwiftUI is a declarative framework for building user interfaces that can be used as an alternative to UIKit. It simplifies the process of creating dynamic and interactive UIs with less code.
                    </p>
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

               
            </div>
        </div>



    </div>
</div>
</section>

<section className="projects-one">
            <div className="shape5"><img src="assets/images/shapes/projects-v1-shape5.png" alt="#"/></div>
            <div className="shape6"><img src="assets/images/shapes/projects-v1-shape6.png" alt="#"/></div>
            <div className="container">
                <div className="sec-title text-center">
                    <div className="sec-title__tagline">
                        <div className="inner">
                            <div className="round-box"><img src="assets/images/shapes/sec-title-shape.png" alt="#"/>
                            </div>
                            <div className="text">
                                <p>Our Completed Projects</p>
                            </div>
                        </div>
                    </div>
                    <h2 className="sec-title__title">Technology Solutions Recent <br/>
                        Our Tech Projects</h2>
                </div>
                <div className="row">
                    <div className="col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="projects-one__single">
                            <div className="projects-one__single-img">
                                <div className="inner">
                                    <img src="assets/mobileapps/stocks.jpg" alt="#"/>
                                    <div className="overlay-content">
                                        <div className="shape1"><img src="assets/images/shapes/projects-v1-shape1.png"
                                                alt="#"/></div>
                                        <div className="shape2"><img src="assets/images/shapes/projects-v1-shape2.png"
                                                alt="#"/></div>
                                        <div className="shape3"><img src="assets/images/shapes/projects-v1-shape3.png"
                                                alt="#"/></div>
                                        <div className="shape4"><img src="assets/images/shapes/projects-v1-shape4.png"
                                                alt="#"/></div>
                                        <div className="content-box">
                                            <p className="text1">Tech</p>
                                            <h3><a href="projects-details.html">Tech cover industry</a></h3>
                                            <p className="text2">There are many variations of passages </p>
                                        </div>

                                        <div className="icon-box">
                                            <a href="projects-details.html"><span className="icon-right-arrow3"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="projects-one__single">
                            <div className="projects-one__single-img">
                                <div className="inner">
                                    <img src="assets/mobileapps/golld.jpg" alt="#"/>
                                    <div className="overlay-content">
                                        <div className="shape1"><img src="assets/images/shapes/projects-v1-shape1.png"
                                                alt="#"/></div>
                                        <div className="shape2"><img src="assets/images/shapes/projects-v1-shape2.png"
                                                alt="#"/></div>
                                        <div className="shape3"><img src="assets/images/shapes/projects-v1-shape3.png"
                                                alt="#"/></div>
                                        <div className="shape4"><img src="assets/images/shapes/projects-v1-shape4.png"
                                                alt="#"/></div>
                                        <div className="content-box">
                                            <p className="text1">Tech</p>
                                            <h3><a href="projects-details.html">Tech cover industry</a></h3>
                                            <p className="text2">There are many variations of passages </p>
                                        </div>

                                        <div className="icon-box">
                                            <a href="projects-details.html"><span className="icon-right-arrow3"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="projects-one__single">
                            <div className="projects-one__single-img">
                                <div className="inner">
                                    <img src="assets/mobileapps/medical.jpg" alt="#"/>
                                    <div className="overlay-content">
                                        <div className="shape1"><img src="assets/images/shapes/projects-v1-shape1.png"
                                                alt="#"/></div>
                                        <div className="shape2"><img src="assets/images/shapes/projects-v1-shape2.png"
                                                alt="#"/></div>
                                        <div className="shape3"><img src="assets/images/shapes/projects-v1-shape3.png"
                                                alt="#"/></div>
                                        <div className="shape4"><img src="assets/images/shapes/projects-v1-shape4.png"
                                                alt="#"/></div>
                                        <div className="content-box">
                                            <p className="text1">Tech</p>
                                            <h3><a href="projects-details.html">Tech cover industry</a></h3>
                                            <p className="text2">There are many variations of passages </p>
                                        </div>

                                        <div className="icon-box">
                                            <a href="projects-details.html"><span className="icon-right-arrow3"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="projects-one__single">
                            <div className="projects-one__single-img">
                                <div className="inner">
                                    <img src="/assets/mobileapps/pestiside.jpg" alt="#"/>
                                    <div className="overlay-content">
                                        <div className="shape1"><img src="assets/images/shapes/projects-v1-shape1.png"
                                                alt="#"/></div>
                                        <div className="shape2"><img src="assets/images/shapes/projects-v1-shape2.png"
                                                alt="#"/></div>
                                        <div className="shape3"><img src="assets/images/shapes/projects-v1-shape3.png"
                                                alt="#"/></div>
                                        <div className="shape4"><img src="assets/images/shapes/projects-v1-shape4.png"
                                                alt="#"/></div>
                                        <div className="content-box">
                                            <p className="text1">Tech</p>
                                            <h3><a href="projects-details.html">Tech cover industry</a></h3>
                                            <p className="text2">There are many variations of passages </p>
                                        </div>

                                        <div className="icon-box">
                                            <a href="projects-details.html"><span className="icon-right-arrow3"></span></a>
                                        </div>
                                    </div>
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
  
  export default ios;