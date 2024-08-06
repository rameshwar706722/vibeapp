import React from "react";
import Header from "./Header";

import { Link } from "react-router-dom";

function Android() {
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
                                    alt="#"/>Android App Development</div>
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
                    <h2>Android app Development</h2>
                    <p className="text1">

                    Android app development refers to the process of creating mobile applications for devices that run on the Android operating system. Android is an open-source operating system developed by the Open Handset Alliance, led by Google. Android apps can be developed using Java or Kotlin programming languages, and the official integrated development environment (IDE) for Android development is Android Studio. Here are key components of Android app development Android app development offers flexibility and a large user base, but developers need to be aware of the diverse ecosystem and design their apps accordingly. Staying updated with the latest Android versions, best practices, and design guidelines is crucial for creating successful Android applications.</p>
                    <h3>Key aspects of Android app development include:</h3><hr/>
                    <h3>Java/Kotlin Programming Languages:</h3>
                    <p className="text3">
                    Java has historically been the primary language for Android app development. However, Kotlin, a modern programming language developed by JetBrains, has gained popularity and is now officially supported by Google for Android development. Kotlin is often preferred for its conciseness and enhanced safety features.
                    </p>
                    <h3>Android Studio IDE:</h3>
                    <p className="text3">
                    Android Studio is the official IDE for Android development. It provides tools for building, testing, and debugging Android apps. Android Studio also includes a visual designer for creating user interfaces and a code editor for writing code.
                    </p>
                    <h3>Android SDK (Software Development Kit):</h3>
                    <p className="text3">
                    The Android SDK is a set of tools and libraries that developers use to build Android applications. It includes APIs (Application Programming Interfaces) for accessing various device features such as the camera, sensors, location services, and more.
                    </p>
                    <h3>XML (eXtensible Markup Language):</h3>
                    <p className="text3">
                    XML is used to design the layout of Android app interfaces. Developers define the structure and appearance of app screens using XML, and the layout is inflated at runtime.
                    </p>
                    <h3>Gradle Build System:</h3>
                    <p className="text3">
                    Android Studio uses the Gradle build system to automate the build and compilation process. Gradle is highly customizable and allows developers to define dependencies, build types, and other aspects of the build process.
                    </p>
                    <h3>Android Architecture Components:</h3>
                    <p className="text3">
                    Android Architecture Components, such as LiveData, ViewModel, Room, and Navigation, are libraries provided by Google to help developers design robust, maintainable, and scalable Android applications.
                    </p>
                    <h3>Material Design:</h3>
                    <p className="text3">
                    Material Design is a design language introduced by Google, providing guidelines for creating visually appealing and consistent user interfaces across Android devices. It includes principles for layout, animation, and interaction.
                    </p>
                    <h3>App Distribution:</h3>
                    <p className="text3">
                    Android apps can be distributed through various channels, including the Google Play Store, third-party app stores, or direct distribution through APK files. The Google Play Store is the primary platform for publishing and distributing Android apps.
                    </p>
                    <h3>Device Fragmentation:</h3>

                    <p className="text3">

                    Android runs on a wide variety of devices with different screen sizes, resolutions, and hardware specifications. Developers need to consider this device fragmentation when designing and testing their apps.
                    </p>
                    <h3>Testing:

</h3>

                    <p className="text3">

                    Android app developers perform testing on various devices, emulators, and screen sizes to ensure their apps work well across a diverse range of devices.  
                    </p>
                    <h3>Security Considerations:</h3>

                    <p className="text3">
                    Developers need to be mindful of security considerations, such as secure data storage, user authentication, and secure communication, to protect user data and maintain the integrity of the app.
                        
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
  
  export default Android;