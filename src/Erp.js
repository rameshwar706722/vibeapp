import React from "react";

import Header from "./Header";
import { Link } from "react-router-dom";

function Erp() {
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
                                    alt="#"/> Enterprise Resource Planning</div>
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
                  <h2> Enterprise Resource Planning</h2>
                  <p className="text1">
                  ERP stands for Enterprise Resource Planning. It is a type of software that organizations use to manage and integrate various aspects of their business processes. ERP systems are designed to streamline and optimize operations by providing a centralized platform for data management and communication across different departments.
                  </p>
                  <p className="text2">
                  Implementing an ERP system requires careful planning and consideration, as it involves significant changes to existing business processes. However, when successfully implemented, an ERP system can lead to increased operational efficiency, better decision-making, and improved overall business performance.
                  </p>
                  <h3>Key elements of ERP systems  include:</h3><hr/>

                  <h4>Centralized Database:</h4>
                  <p className="text3">
                  ERP systems maintain a centralized database that stores data from various business processes. This allows different departments to access and share information in real-time.
                  </p>
                  <h4>Integration of Business Processes:</h4>
                  <p className="text3">
                  ERP integrates core business processes such as finance, human resources, procurement, manufacturing, supply chain management, and customer relationship management. This integration helps in seamless information flow and collaboration                  </p>
                  <h4>Automation of Routine Tasks: </h4>
                  <p className="text3">
                  ERP systems often include automation features to handle routine and repetitive tasks. This can reduce manual efforts, minimize errors, and increase overall efficiency.                  </p>
                  <h4>Real-time Reporting and Analytics:</h4>
                  <p className="text3">
                  ERP software provides real-time reporting and analytics tools that allow organizations to make informed decisions based on up-to-date information. It helps in monitoring key performance indicators (KPIs) and assessing the overall health of the business.                  </p>
                  <h4>Improved Customer Service:</h4>
                  <p className="text3">
                  ERP systems often include modules for customer relationship management (CRM), enabling organizations to manage customer interactions, track sales leads, and provide better customer service                  </p>
                  
                  <h4>Supply Chain Management: </h4>
                  <p className="text3">
                  ERP systems help in optimizing the supply chain by managing inventory levels, tracking shipments, and improving overall coordination between suppliers, manufacturers, and distributors.                  </p>
                  
                  <h4>Financial Management:  </h4>
                  <p className="text3">ERP systems integrate financial processes, including accounting, budgeting, and financial reporting. This provides a comprehensive view of the organization's financial health.
                  </p>
                  <h4>Human Resources Management: </h4>
            
                  <p className="text3">
                  ERP includes modules for managing human resources functions, such as payroll, employee attendance, performance evaluations, and talent management. </p>
                  <h4> Compliance and Risk Management:</h4>
                  <p className="text3"> ERP systems often include features to help organizations comply with industry regulations and manage risks associated with various business activities.
                  </p>
                  <h4>Scalability: </h4>
                  <p className="text3">ERP systems are designed to be scalable, allowing organizations to add or modify modules as their business needs evolve and expand.
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
                  <img
                    src="assets/images/services/services-details-img1.jpg"
                    alt="#"
                  />{" "}
                </div>

                <div className="services-details__content-text2">
                  <p className="text1">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. Labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi aliquip ex ea commodo consequat.
                  </p>

                  <ul className="services-details__content-text2-list">
                    <li>
                      <div className="icon-box">
                        <span className="icon-web-design"></span>
                        <div className="top-icon">
                          <span className="icon-check-circle"></span>
                        </div>
                      </div>

                      <div className="content-box">
                        <h3>IT Disaster recovery maturity Assessment</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliquamini
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className="icon-box">
                        <span className="icon-data"></span>
                        <div className="top-icon">
                          <span className="icon-check-circle"></span>
                        </div>
                      </div>

                      <div className="content-box">
                        <h3>Plan for the unexpected</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua{" "}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="services-details__content-text3">
                  <div className="content-box">
                    <p>
                      Get the most out of your technology investment with
                      transformative integrated business IT solutions that
                      enable you to achieve essential business goals and seize
                      valuable opportunities for growth.ensure the campaign is
                      successful.
                    </p>

                    <ul>
                      <li>
                        <p>
                          <span className="icon-tick"></span> I must explain to
                          you how all this mistaken idea
                        </p>
                      </li>

                      <li>
                        <p>
                          <span className="icon-tick"></span> At vero eos et
                          accusamus et iusto odio
                        </p>
                      </li>

                      <li>
                        <p>
                          <span className="icon-tick"></span> Lorem ipsum dolor
                          sit amet, consectetur elit
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div className="img-box">
                    <img
                      src="assets/images/services/services-details-img2.jpg"
                      alt="#"
                    />
                  </div>
                </div>
              </div>
            </div>
    </div>
</div>
</section>



         <section className="projects-one projects-one--projects">
            <div className="container">

                <div className="row">
                    
                <div className="text">
                                <p>OUR PROJECTS</p>
                                <h2>WEBSITES CREATED BY US</h2>
                            </div>

                    
                    <hr/>
                    <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
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
                                            <p className="text1">y1electronics</p>
                                            <h3><a href="https://y1electronics.in/">electornics store</a></h3>
                                            <p className="text2">Online electornics equipments store</p>
                                        </div>

                                        <div className="icon-box">
                                            <a href="https://y1electronics.in/"><span className="icon-right-arrow3"></span></a>
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
  
  export default Erp;