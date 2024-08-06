
import React from "react";
import Header from "./Header";
import { Link,useNavigate,useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
// import parse from "html-react-parser";




function Blogdetail() {


    const {bid}=useParams("bid");
    const [blog_id, setBlog_id] = useState();
    const [blog_tittle, setBlog_tittle] = useState();
    const [blog_date, setBlog_date] = useState();
    const [blog_des, setBlog_des] = useState();

    const [blog_sdes, setBlog_sdes] = useState();
    const [blog_img, setBlog_img] = useState();
    const [blog_auth, setBlog_auth] = useState();


    
const [blogs,  setBlogs] = useState([]);


    useEffect(() => {

        fetch('https://vibeapps.in/campus/index.php/rest/blog_api').then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            setBlogs(responseJson);

        }).catch((error) => {
            console.log(error);
        });


        fetch('https://vibeapps.in/campus/index.php/rest/blog_api_details/'+bid).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                //setBlog_title
                setBlog_tittle(responseJson.blog_tittle);
                setBlog_date(responseJson.blog_date);
                setBlog_des(responseJson.blog_des);
                setBlog_sdes(responseJson.blog_sdes);
                setBlog_img(responseJson.blog_img);
                setBlog_auth(responseJson.blog_auth);
            }).catch((error) => {
                console.log(error);
            });


    }, []);


    return (
        <div className="App">
           <Header/>  
           <section class="page-header">
            <div class="page-header__bg" style={{backgroundImage:'url(assets/images/backgrounds/page-header-bg.jpg)'}}>
            </div>
            <div class="page-header__gradient"
                 style={{backgroundImage:' url(assets/images/backgrounds/page-header-gradient-bg.png)'}}></div>
            <div class="shape1 float-bob-x"><img src="assets/images/shapes/page-header-shape1.png" alt="#"/></div>

            <div class="container">
                <div class="page-header__inner text-center">
                    <h2> Blog Detail</h2>
                    <ul class="thm-breadcrumb">
                    <li><Link to="/home">Home</Link></li>
                        <li><span>/</span></li>
                        <li>Blog Detail</li>
                    </ul>
                </div>
            </div>
        </section>
  <section className="blog-details">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8">
                        <div className="blog-details__content">

                           
                            <div className="blog-list-page__single">
                                <div className="blog-list-page__single-img">
                                    <img src={"https://vibeapps.in/campus/assets/img/"+blog_img} alt="#"/>
                                </div>

                                <div className="blog-list-page__single-content">
                                    <ul className="meta-box">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-user3"></span>
                                            </div>
                                            <div className="text">
                                                <p><a href="#">{blog_auth}</a></p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <span className="icon-comment"></span>
                                            </div>
                                            <div className="text">
                                                <p>{blog_date}</p>
                                            </div>
                                        </li>
                                    </ul>

                                    <h2>{blog_tittle}</h2>

                                    <div className="blog-list-page__single-content-bottom">
                                        <div className="share-btn">
                                            <a href="#"><span className="icon-share"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          

                            <div className="blog-details__content-inner">

                                <div className="blog-details__content-text1">
                                    <p className="text1">{blog_sdes} </p>
                                    <hr/>
                                  <div>{blog_des}</div>  
                                </div>

                               

                            

                              

                               

                             

                           

                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-4">
                        <div className="sidebar style2">
                            
                            
                            <div className="sidebar__single sidebar__post wow animated fadeInUp" data-wow-delay="0.3s">
                                <div className="title-box">
                                    <div className="inner">
                                        <div className="shape"><img src="assets/images/shapes/sidebar-title-shape.png"
                                                alt="#"/></div>
                                        <h2>Latest Post</h2>
                                    </div>
                                </div>

                                <ul className="sidebar__post-list list-unstyled">
                                {blogs.map(z => (
                                
                                    <li>
                                        <div className="sidebar__post-content">
                                            <h3>
                                            <Link to={"/blogdetail/"+z.blog_id}>{z.blog_tittle}</Link>
                                               
                                            </h3>
                                            <span className="sidebar__post-content-meta"><i className="icon-calendar2"></i>
                                              {z.blog_date}</span>
                                        </div>

                                        <div className="sidebar__post-image">
                                            <img  src={"https://vibeapps.in/campus/assets/img/"+z.blog_img} alt="#"/>
                                        </div>
                                    </li> 
                                ))}
                                
                                </ul>
                            </div>
                          
                            <div className="sidebar__single sidebar__tags wow animated fadeInUp" data-wow-delay="0.4s">
                                <div className="title-box">
                                    <div className="inner">
                                        <div className="shape"><img src="assets/images/shapes/sidebar-title-shape.png"
                                                alt="#"/></div>
                                        <h2>Tags</h2>
                                    </div>
                                </div>
{/* 
                                <div className="sidebar__tags-list">
                                    <a href="#">IT Solution</a>
                                    <a href="#">Security</a>
                                    <a href="#">IT</a>
                                    <a href="#">Technology</a>
                                    <a href="#">Business</a>
                                    <a href="#">Software </a>
                                    <a href="#">Digital </a>
                                </div>
                            </div> */}
                           
                            <div className="sidebar__single sidebar__author wow animated fadeInUp" data-wow-delay="0.5s">
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
                                    <h3>Mr 10 Square Vijay Nagar, Indore  <br/> Madhya Pradesh, India</h3>
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
                                    <h3><a href="tel:8349359939">+91 8349359939</a></h3>
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

       
      </div>
    );
  }
  
  export default Blogdetail;;
      
       