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
                                    alt="#"/>Content Management System</div>
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
                    <h2>Content Management System</h2>
                    <p className="text1">
CMS stands for Content Management System. It is a software application or set of related programs that are used to create, manage, and modify digital content. A CMS is designed to simplify the process of content creation and management for websites, allowing users to update and organize content without requiring in-depth technical knowledge.</p>
                    <p className="text2">Popular CMS platforms include WordPress, Joomla, Drupal, and many others. Each has its strengths and is chosen based on factors such as the specific needs of the website, user preferences, and technical requirements. CMS systems play a crucial role in empowering individuals and organizations to create and manage digital content efficiently.</p>
                    <h3>Key features of a CMS include:</h3>
                    <hr/>
                    <h4> Content Creation and Editing:</h4>
                    <p className="text3">CMS allows users to create and edit digital content, including text, images, videos, and other multimedia elements. It typically provides a user-friendly interface that simplifies the content creation process.</p>
                    <h4> Content Organization:</h4>
                    <p className="text3">CMS structures content in a way that is easy to manage and navigate. Content can be categorized, tagged, and organized into different sections or pages.</p>
                    <h4> User Management: </h4>
                    <p className="text3">CMS often includes user management features, allowing different individuals or roles to have specific permissions for creating, editing, or publishing content. This is particularly useful for collaborative environments.</p>
                    <h4> Version Control: </h4>
                    <p className="text3">Many CMS platforms offer version control, enabling users to track changes made to content over time. This is valuable for reviewing past edits, rolling back to previous versions, and maintaining a record of content revisions.</p>
                    <h4> Publishing and Unpublishing:</h4>
                    <p className="text3">Content can be scheduled for publication or removal at specific times. This feature is useful for planning and automating content updates, ensuring that new material is published when needed.</p>
                    <h4> Templates and Themes</h4>
                    <p className="text3"> CMS platforms often provide templates and themes that determine the overall design and layout of a website. Users can choose or customize these templates to achieve a consistent look and feel across the site.</p>
                    <h4> SEO-Friendly</h4>
                    <p className="text3"> Many CMS platforms offer built-in features or plugins to optimize content for search engines. This includes the ability to set metadata, create SEO-friendly URLs, and manage other elements important for search engine visibility.</p>
                    <h4> Plugins and Extensions: </h4>
                    <p className="text3">CMS platforms typically support plugins or extensions that add extra functionality. These can include e-commerce features, social media integration, analytics tools, and more.</p>
                    <h4> </h4>
                    <p className="text3"></p>
                    <h4> </h4>
                    <p className="text3"></p>
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

         <section class="projects-one projects-one--projects">
            <div class="container">

                <div class="row">
                    
                <div className="text">
                                <p>OUR PROJECTS</p>
                                <h2>WEBSITES CREATED BY US</h2>
                            </div>

                    
                    <hr/>
                    <div class="col-xl-6 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div class="projects-one__single">
                            <div class="projects-one__single-img">
                                <div class="inner">
                                    <img src="assets/website/1.png" alt="#"/>
                                    <div class="overlay-content">
                                        <div class="shape1"><img src="assets/images/shapes/projects-v1-shape1.png"
                                                alt="#"/></div>
                                        <div class="shape2"><img src="assets/images/shapes/projects-v1-shape2.png"
                                                alt="#"/></div>
                                        <div class="shape3"><img src="assets/images/shapes/projects-v1-shape3.png"
                                                alt="#"/></div>
                                        <div class="shape4"><img src="assets/images/shapes/projects-v1-shape4.png"
                                                alt="#"/></div>
                                        <div class="content-box">
                                            <p class="text1">y1electronics</p>
                                            <h3><a href="https://y1electronics.in/">electornics store</a></h3>
                                            <p class="text2">Online electornics equipments store</p>
                                        </div>

                                        <div class="icon-box">
                                            <a href="https://y1electronics.in/"><span class="icon-right-arrow3"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div class="col-xl-6 wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1500ms">
                        <div class="projects-one__single">
                            <div class="projects-one__single-img">
                                <div class="inner">
                                    <img src="assets/website/4.png" alt="#"/>
                                    <div class="overlay-content">
                                        <div class="shape1"><img src="assets/images/shapes/projects-v1-shape1.png"
                                                alt="#"/></div>
                                        <div class="shape2"><img src="assets/images/shapes/projects-v1-shape2.png"
                                                alt="#"/></div>
                                        <div class="shape3"><img src="assets/images/shapes/projects-v1-shape3.png"
                                                alt="#"/></div>
                                        <div class="shape4"><img src="assets/images/shapes/projects-v1-shape4.png"
                                                alt="#"/></div>
                                        <div class="content-box">
                                            <p class="text1">VB DESIGNS</p>
                                            <h3><a href="https://vbdesignstore.com/">Digital Art</a></h3>
                                            <p class="text2">Digital art selling website</p>
                                        </div>

                                        <div class="icon-box">
                                            <a href="https://vbdesignstore.com/"><span class="icon-right-arrow3"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div class="col-xl-6 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div class="projects-one__single">
                            <div class="projects-one__single-img">
                                <div class="inner">
                                    <img src="assets/website/3.png" alt="#"/>
                                    <div class="overlay-content">
                                        <div class="shape1"><img src="assets/images/shapes/projects-v1-shape1.png"
                                                alt="#"/></div>
                                        <div class="shape2"><img src="assets/images/shapes/projects-v1-shape2.png"
                                                alt="#"/></div>
                                        <div class="shape3"><img src="assets/images/shapes/projects-v1-shape3.png"
                                                alt="#"/></div>
                                        <div class="shape4"><img src="assets/images/shapes/projects-v1-shape4.png"
                                                alt="#"/></div>
                                        <div class="content-box">
                                            <p class="text1"> Profito global</p>
                                            <h3><a href="https://profitoglobal.com/">Trading website</a></h3>
                                            <p class="text2">website for trading  </p>
                                        </div>

                                        <div class="icon-box">
                                            <a href="https://profitoglobal.com/"><span class="icon-right-arrow3"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 
                    <div class="col-xl-6 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div class="projects-one__single">
                            <div class="projects-one__single-img">
                                <div class="inner">
                                    <img src="assets/website/2.png" alt="#"/>
                                    <div class="overlay-content">
                                        <div class="shape1"><img src="assets/images/shapes/projects-v1-shape1.png"
                                                alt="#"/></div>
                                        <div class="shape2"><img src="assets/images/shapes/projects-v1-shape2.png"
                                                alt="#"/></div>
                                        <div class="shape3"><img src="assets/images/shapes/projects-v1-shape3.png"
                                                alt="#"/></div>
                                        <div class="shape4"><img src="assets/images/shapes/projects-v1-shape4.png"
                                                alt="#"/></div>
                                        <div class="content-box">
                                            <p class="text1">Sach cars</p>
                                            <h3><a href="https://sachcars.com/">booking</a></h3>
                                            <p class="text2">Website for car booking on Rent</p>
                                        </div>

                                        <div class="icon-box">
                                            <a href="https://sachcars.com/"><span class="icon-right-arrow3"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div class="projects-one__single">
                            <div class="projects-one__single-img">
                                <div class="inner">
                                    <img src="assets/website/6.png" alt="#"/>
                                    <div class="overlay-content">
                                        <div class="shape1"><img src="assets/images/shapes/projects-v1-shape1.png"
                                                alt="#"/></div>
                                        <div class="shape2"><img src="assets/images/shapes/projects-v1-shape2.png"
                                                alt="#"/></div>
                                        <div class="shape3"><img src="assets/images/shapes/projects-v1-shape3.png"
                                                alt="#"/></div>
                                        <div class="shape4"><img src="assets/images/shapes/projects-v1-shape4.png"
                                                alt="#"/></div>
                                        <div class="content-box">
                                            <p class="text1">Sach cars</p>
                                            <h3><a href="http://mzansigo.co.za">booking</a></h3>
                                            <p class="text2">Website for car booking on Rent</p>
                                        </div>

                                        <div class="icon-box">
                                            <a href="http://mzansigo.co.za"><span class="icon-right-arrow3"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                     <div class="col-xl-6 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div class="projects-one__single">
                            <div class="projects-one__single-img">
                                <div class="inner">
                                    <img src="assets/website/7.png" alt="#"/>
                                    <div class="overlay-content">
                                        <div class="shape1"><img src="assets/images/shapes/projects-v1-shape1.png"
                                                alt="#"/></div>
                                        <div class="shape2"><img src="assets/images/shapes/projects-v1-shape2.png"
                                                alt="#"/></div>
                                        <div class="shape3"><img src="assets/images/shapes/projects-v1-shape3.png"
                                                alt="#"/></div>
                                        <div class="shape4"><img src="assets/images/shapes/projects-v1-shape4.png"
                                                alt="#"/></div>
                                        <div class="content-box">
                                            <p class="text1">Sach cars</p>
                                            <h3><a href="https://progrowglobal.com">booking</a></h3>
                                            <p class="text2">Website for car booking on Rent</p>
                                        </div>

                                        <div class="icon-box">
                                            <a href="https://progrowglobal.com"><span class="icon-right-arrow3"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div class="projects-one__single">
                            <div class="projects-one__single-img">
                                <div class="inner">
                                    <img src="assets/website/5.png" alt="#"/>
                                    <div class="overlay-content">
                                        <div class="shape1"><img src="assets/images/shapes/projects-v1-shape1.png"
                                                alt="#"/></div>
                                        <div class="shape2"><img src="assets/images/shapes/projects-v1-shape2.png"
                                                alt="#"/></div>
                                        <div class="shape3"><img src="assets/images/shapes/projects-v1-shape3.png"
                                                alt="#"/></div>
                                        <div class="shape4"><img src="assets/images/shapes/projects-v1-shape4.png"
                                                alt="#"/></div>
                                        <div class="content-box">
                                            <p class="text1">Sach cars</p>
                                            <h3><a href="https://sarbach.swiss/">booking</a></h3>
                                            <p class="text2">Website for car booking on Rent</p>
                                        </div>

                                        <div class="icon-box">
                                            <a href="https://sarbach.swiss/"><span class="icon-right-arrow3"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div class="projects-one__single">
                            <div class="projects-one__single-img">
                                <div class="inner">
                                    <img src="assets/website/8.png" alt="#"/>
                                    <div class="overlay-content">
                                        <div class="shape1"><img src="assets/images/shapes/projects-v1-shape1.png"
                                                alt="#"/></div>
                                        <div class="shape2"><img src="assets/images/shapes/projects-v1-shape2.png"
                                                alt="#"/></div>
                                        <div class="shape3"><img src="assets/images/shapes/projects-v1-shape3.png"
                                                alt="#"/></div>
                                        <div class="shape4"><img src="assets/images/shapes/projects-v1-shape4.png"
                                                alt="#"/></div>
                                        <div class="content-box">
                                            <p class="text1">Sach cars</p>
                                            <h3><a href="https://wedmewide.com/">booking</a></h3>
                                            <p class="text2">Website for car booking on Rent</p>
                                        </div>

                                        <div class="icon-box">
                                            <a href="https://wedmewide.com/"><span class="icon-right-arrow3"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div class="projects-one__single">
                            <div class="projects-one__single-img">
                                <div class="inner">
                                    <img src="assets/website/9.png" alt="#"/>
                                    <div class="overlay-content">
                                        <div class="shape1"><img src="assets/images/shapes/projects-v1-shape1.png"
                                                alt="#"/></div>
                                        <div class="shape2"><img src="assets/images/shapes/projects-v1-shape2.png"
                                                alt="#"/></div>
                                        <div class="shape3"><img src="assets/images/shapes/projects-v1-shape3.png"
                                                alt="#"/></div>
                                        <div class="shape4"><img src="assets/images/shapes/projects-v1-shape4.png"
                                                alt="#"/></div>
                                        <div class="content-box">
                                            <p class="text1">Sach cars</p>
                                            <h3><a href="https://divysagartravels.com/">booking</a></h3>
                                            <p class="text2">Website for car booking on Rent</p>
                                        </div>

                                        <div class="icon-box">
                                            <a href="https://divysagartravels.com/"><span class="icon-right-arrow3"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div class="projects-one__single">
                            <div class="projects-one__single-img">
                                <div class="inner">
                                    <img src="assets/website/10.png" alt="#"/>
                                    <div class="overlay-content">
                                        <div class="shape1"><img src="assets/images/shapes/projects-v1-shape1.png"
                                                alt="#"/></div>
                                        <div class="shape2"><img src="assets/images/shapes/projects-v1-shape2.png"
                                                alt="#"/></div>
                                        <div class="shape3"><img src="assets/images/shapes/projects-v1-shape3.png"
                                                alt="#"/></div>
                                        <div class="shape4"><img src="assets/images/shapes/projects-v1-shape4.png"
                                                alt="#"/></div>
                                        <div class="content-box">
                                            <p class="text1">Sach cars</p>
                                            <h3><a href="https://dharmasuperalgo.com/">booking</a></h3>
                                            <p class="text2">Website for car booking on Rent</p>
                                        </div>

                                        <div class="icon-box">
                                            <a href="https://dharmasuperalgo.com/"><span class="icon-right-arrow3"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div class="projects-one__single">
                            <div class="projects-one__single-img">
                                <div class="inner">
                                    <img src="assets/website/11.png" alt="#"/>
                                    <div class="overlay-content">
                                        <div class="shape1"><img src="assets/images/shapes/projects-v1-shape1.png"
                                                alt="#"/></div>
                                        <div class="shape2"><img src="assets/images/shapes/projects-v1-shape2.png"
                                                alt="#"/></div>
                                        <div class="shape3"><img src="assets/images/shapes/projects-v1-shape3.png"
                                                alt="#"/></div>
                                        <div class="shape4"><img src="assets/images/shapes/projects-v1-shape4.png"
                                                alt="#"/></div>
                                        <div class="content-box">
                                            <p class="text1">Sach cars</p>
                                            <h3><a href="https://1specialplace.com/">booking</a></h3>
                                            <p class="text2">Website for car booking on Rent</p>
                                        </div>

                                        <div class="icon-box">
                                            <a href="https://1specialplace.com/"><span class="icon-right-arrow3"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div class="projects-one__single">
                            <div class="projects-one__single-img">
                                <div class="inner">
                                    <img src="assets/website/12.png" alt="#"/>
                                    <div class="overlay-content">
                                        <div class="shape1"><img src="assets/images/shapes/projects-v1-shape1.png"
                                                alt="#"/></div>
                                        <div class="shape2"><img src="assets/images/shapes/projects-v1-shape2.png"
                                                alt="#"/></div>
                                        <div class="shape3"><img src="assets/images/shapes/projects-v1-shape3.png"
                                                alt="#"/></div>
                                        <div class="shape4"><img src="assets/images/shapes/projects-v1-shape4.png"
                                                alt="#"/></div>
                                        <div class="content-box">
                                            <p class="text1">Sach cars</p>
                                            <h3><a href="http://mzansigo.co.za">booking</a></h3>
                                            <p class="text2">Website for car booking on Rent</p>
                                        </div>

                                        <div class="icon-box">
                                            <a href="http://mzansigo.co.za"><span class="icon-right-arrow3"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div class="projects-one__single">
                            <div class="projects-one__single-img">
                                <div class="inner">
                                    <img src="assets/website/13.png" alt="#"/>
                                    <div class="overlay-content">
                                        <div class="shape1"><img src="assets/images/shapes/projects-v1-shape1.png"
                                                alt="#"/></div>
                                        <div class="shape2"><img src="assets/images/shapes/projects-v1-shape2.png"
                                                alt="#"/></div>
                                        <div class="shape3"><img src="assets/images/shapes/projects-v1-shape3.png"
                                                alt="#"/></div>
                                        <div class="shape4"><img src="assets/images/shapes/projects-v1-shape4.png"
                                                alt="#"/></div>
                                        <div class="content-box">
                                            <p class="text1">Sach cars</p>
                                            <h3><a href="http://carparkit.com.au">booking</a></h3>
                                            <p class="text2">Website for car booking on Rent</p>
                                        </div>

                                        <div class="icon-box">
                                            <a href="http://carparkit.com.au"><span class="icon-right-arrow3"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div class="projects-one__single">
                            <div class="projects-one__single-img">
                                <div class="inner">
                                    <img src="assets/website/14.png" alt="#"/>
                                    <div class="overlay-content">
                                        <div class="shape1"><img src="assets/images/shapes/projects-v1-shape1.png"
                                                alt="#"/></div>
                                        <div class="shape2"><img src="assets/images/shapes/projects-v1-shape2.png"
                                                alt="#"/></div>
                                        <div class="shape3"><img src="assets/images/shapes/projects-v1-shape3.png"
                                                alt="#"/></div>
                                        <div class="shape4"><img src="assets/images/shapes/projects-v1-shape4.png"
                                                alt="#"/></div>
                                        <div class="content-box">
                                            <p class="text1">Sach cars</p>
                                            <h3><a href="https://fraternitysororitysvg.com/">booking</a></h3>
                                            <p class="text2">Website for car booking on Rent</p>
                                        </div>

                                        <div class="icon-box">
                                            <a href="https://fraternitysororitysvg.com/"><span class="icon-right-arrow3"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div class="projects-one__single">
                            <div class="projects-one__single-img">
                                <div class="inner">
                                    <img src="assets/website/15.png" alt="#"/>
                                    <div class="overlay-content">
                                        <div class="shape1"><img src="assets/images/shapes/projects-v1-shape1.png"
                                                alt="#"/></div>
                                        <div class="shape2"><img src="assets/images/shapes/projects-v1-shape2.png"
                                                alt="#"/></div>
                                        <div class="shape3"><img src="assets/images/shapes/projects-v1-shape3.png"
                                                alt="#"/></div>
                                        <div class="shape4"><img src="assets/images/shapes/projects-v1-shape4.png"
                                                alt="#"/></div>
                                        <div class="content-box">
                                            <p class="text1">Sach cars</p>
                                            <h3><a href="https://yenacademy.in/">booking</a></h3>
                                            <p class="text2">Website for car booking on Rent</p>
                                        </div>

                                        <div class="icon-box">
                                            <a href="https://yenacademy.in/"><span class="icon-right-arrow3"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div class="projects-one__single">
                            <div class="projects-one__single-img">
                                <div class="inner">
                                    <img src="assets/website/16.png" alt="#"/>
                                    <div class="overlay-content">
                                        <div class="shape1"><img src="assets/images/shapes/projects-v1-shape1.png"
                                                alt="#"/></div>
                                        <div class="shape2"><img src="assets/images/shapes/projects-v1-shape2.png"
                                                alt="#"/></div>
                                        <div class="shape3"><img src="assets/images/shapes/projects-v1-shape3.png"
                                                alt="#"/></div>
                                        <div class="shape4"><img src="assets/images/shapes/projects-v1-shape4.png"
                                                alt="#"/></div>
                                        <div class="content-box">
                                            <p class="text1">Embroidery Design</p>
                                            <h3><a href="https://embroiderykhazana.com">Ecommerce</a></h3>
                                            <p class="text2">Website for embroidery art selling</p>
                                        </div>

                                        <div class="icon-box">
                                            <a href="https://embroiderykhazana.com"><span class="icon-right-arrow3"></span></a>
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
  
  export default Websitedev;