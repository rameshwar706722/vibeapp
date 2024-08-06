import React from "react";
import Header from "./Header";

import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



function Blogs() {

    const [blog, setBlog] = useState([]);


    useEffect(() => {


        fetch('https://vibeapps.in/campus/index.php/rest/blog_api').then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                setBlog(responseJson);

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
                    <h2>Our Blog</h2>
                    <ul class="thm-breadcrumb">
                    <li><Link to="/home">Home</Link></li>
                        <li><span>/</span></li>
                        <li>Blog</li>
                    </ul>
                </div>
            </div>
        </section>
     <section class="blog-one blog-one--blog">
            <div class="container">
                <div class="row">
                {blog.map(b => (

                    <div class="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                        <div class="blog-one__single">
                            <div class="blog-one__single-img">
                                <img  src={"https://vibeapps.in/campus/assets/img/"+b.blog_img} alt="#"/> 
                                <div class="text-box"> {b.blog_tittle}</div>
                            </div>
                            <div class="blog-one__single-content">
                                <ul class="meta-box">
                                    <li>
                                        <div class="icon">
                                            <span class="icon-user3"></span>
                                        </div>
                                        <div class="text">
                                            <p><a href="#">{b.blog_auth}</a></p>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="icon">
                                            <span class="icon-comment"></span>
                                        </div>
                                        <div class="text">
                                            <p>{b.blog_date}</p>
                                        </div>
                                    </li>
                                </ul>

                                <p>{b.blog_sdes} 
                                </p>
                                <div class="btn-box">
                                    <li><Link to={"/blogdetail/"+b.blog_id}>MoreDetails</Link>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                ))} 
                    
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
  
  export default Blogs;