import React from "react";

import { Link } from "react-router-dom";

import Header from "./Header";

function Websitedev() {
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
                                    alt="#"/>Web Development</div>
                        </div>
                    </div>

                    <div className="sidebar__services-box">
                        <ul className="sidebar__services-box-list clearfix">
                        <li>
                           <Link to="/ecom">E-Commerce <span className="icon-right-arrow2"></span></Link>
                     </li>

                     <li>
                     <Link to="/cms">CMS<span className="icon-right-arrow2"></span></Link>
                     </li> <li>
                     <Link to="/informative">Informative <span className="icon-right-arrow2"></span></Link>
                     </li> <li>
                     <Link to="/erp">ERP & CRM <span className="icon-right-arrow2"></span></Link>
                     </li> <li>
                     <Link to="/websitedev">Web Development<span className="icon-right-arrow2"></span></Link>
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
                                        <a href="tel:8801051351">+88 010 513 51 </a>
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
                    <h2>Web Development</h2>
                    <p className="text1">
             Web development refers to the process of creating and maintaining websites or web applications. It involves a combination of skills, technologies, and practices to build and manage the structure, design, functionality, and overall user experience of websites. Web development can range from simple static web pages to complex dynamic web applications. </p>
                    <h3>Here are some key aspects of web development: </h3><hr/>
                    <h3>Front-end Development:  </h3>
                    <p className="text3">This involves designing and building the user interface and user experience that users interact with directly. Front-end developers use technologies like HTML, CSS, and JavaScript to create visually appealing and interactive websites.

                    </p>
                    <h3>Back-end Development:  </h3>
                    <p className="text3">
                    The back-end is the server-side of a web application. Back-end developers work on the server, database, and application logic. They use server-side programming languages like Python, Ruby, PHP, Java, or Node.js to handle data processing, user authentication, and server operations.

 
                    </p>
                    <h3> Full-stack Development:</h3>
                    <p className="text3">Full-stack developers have expertise in both front-end and back-end development. They are capable of working on the entire web development process, from designing the user interface to managing server operations.
                        
                    </p>
                    <h3>Database Management: </h3>
                    <p className="text3">
                    Web developers need to understand how to store and retrieve data efficiently. They work with databases such as MySQL, PostgreSQL, MongoDB, or others to manage and organize data.  
                    </p>
                    <h3> Web Development Frameworks:</h3>
                    <p className="text3">Developers often use frameworks and libraries to streamline the development process. For example, front-end frameworks like React, Angular, or Vue.js facilitate the creation of interactive user interfaces, while back-end frameworks like Django (Python), Ruby on Rails (Ruby), or Express.js (Node.js) provide structure for server-side development.
                        
                    </p>
                    <h3>Version Control:  </h3>
                    <p className="text3">
                    Developers use version control systems like Git to track changes in their code, collaborate with other developers, and manage different versions of the project.  
                    </p>
                    <h3>Web Standards and Best Practices </h3>
                    <p className="text3">
                    Following web standards and best practices is essential for creating websites that are accessible, scalable, and performant across different browsers and devices. 
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
                    <div className="col-xl-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="projects-one__single">
                            <div className="projects-one__single-img">
                                <div className="inner">
                                    <img src="assets/website/1.png" alt="#"/>
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
                    <div className="col-xl-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="projects-one__single">
                            <div className="projects-one__single-img">
                                <div className="inner">
                                    <img src="assets/website/2.png" alt="#"/>
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
                    <div className="col-xl-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="projects-one__single">
                            <div className="projects-one__single-img">
                                <div className="inner">
                                    <img src="assets/website/3.png" alt="#"/>
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


        
    </>
    );
  }
  
  export default Websitedev;