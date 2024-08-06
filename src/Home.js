import React from "react";
import Header from "./Header";
import Project from "./Project";

import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";




function Home() {
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
      <div>
        <Header/>

<section className="main-slider main-slider-one">
            <div className="main-slider-one__inner">
                <div className="main-slider__carousel owl-carousel owl-theme thm-owl__carousel"
                    data-owl-options='{"loop": true, "items": 1, "navText": ["<span className=\"icon-right-arrow\"></span>","<span className=\"icon-right-arrow2\"></span>"], "margin": 0, "dots": false, "nav": true, "animateOut": "slideOutDown", "animateIn": "fadeIn", "active": true, "smartSpeed": 1000, "autoplay": true, "autoplayTimeout": 7000, "autoplayHoverPause": false}'>


                    <div className="main-slider-one__single">
                        <div className="image-layer" style={{backgroundImage:'url("assets/images/slider/slider-v1-img1.jpg")'}}>
                        </div>
                        <div className="shape1"><img src="assets/images/shapes/slider-v1-shape1.png" alt="#"/></div>

                        <div className="container">
                            <div className="main-slider-one__content text-center">
                                <div className="tagline">
                                    <h6>innovative IT Solution</h6>
                                </div>

                                <div className="title">
                                    <h2>Digital IT Solution <br/>
                                        Services</h2>
                                </div>

                                <div className="text">
                                    <p>Transforming Visions into Digital Realities Explore VibeApps</p>
                                </div>

                                <div className="main-slider-one__content-btn">
                                    <a className="thm-btn" href="contact.html">View Our Services</a>
                                </div>

                            </div>

                        </div>
                    </div>
                  
                    <div className="main-slider-one__single">
                        <div className="image-layer" style={{backgroundImage:'url("assets/images/slider/slider-v1-img2.jpg")'}}>
                        </div>
                        <div className="shape1"><img src="assets/images/shapes/slider-v1-shape1.png" alt="#"/></div>

                        <div className="container">
                            <div className="main-slider-one__content text-center">
                                <div className="tagline">
                                    <h6>innovative IT Solution</h6>
                                </div>

                                <div className="title">
                                    <h2>Digital IT Solution <br/>
                                        Services</h2>
                                </div>

                                <div className="text">
                                    <p>Evolve into your full potential with digital IT solutions Services.</p>
                                </div>

                                <div className="main-slider-one__content-btn">
                                    <a className="thm-btn" href="contact.html">View Our Services</a>
                                </div>

                            </div>

                        </div>
                    </div>
                  
                    <div className="main-slider-one__single">
                        <div className="image-layer" style={{backgroundImage:'url("assets/images/slider/slider-v1-img3.jpg")'}}>
                        </div>
                        <div className="shape1"><img src="assets/images/shapes/slider-v1-shape1.png" alt="#"/>
                        </div>

                        <div className="container">
                            <div className="main-slider-one__content text-center">
                                <div className="tagline">
                                    <h6>innovative IT Solution</h6>
                                </div>

                                <div className="title">
                                    <h2>Digital IT Solution <br/>
                                        Services</h2>
                                </div>

                                <div className="text">
                                    <p>Evolve into your full potential with digital IT solutions Services.</p>
                                </div>

                                <div className="main-slider-one__content-btn">
                                    <a className="thm-btn" href="contact.html">View Our Services</a>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="intro-one">
            <div className="shape2"><img src="assets/images/shapes/intro-v1-shape2.png" alt=""/></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.1s">
                        <div className="intro-one__single">
                            <div className="intro-one__single-img">
                                <div className="inner">
                                    <img src="assets/images/resources/intro-v1-img1.jpg" alt="#"/>
                                </div>
                                <div className="icon-box">
                                    <span className="icon-privacy"></span>
                                </div>
                            </div>

                            <div className="intro-one__single-content text-center">
                                <div className="shape1"><img src="assets/images/shapes/intro-v1-shape1.png" alt="#"/></div>
                                <h2><a href="#">Digital Security</a></h2>
                                <p>Discover Advanced Digital Security Solutions for  <br/>
                                Complete Protection in the Online World</p>
                            </div>
                        </div>
                    </div>
                 
                    <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.2s">
                        <div className="intro-one__single">
                            <div className="intro-one__single-img">
                                <div className="inner">
                                    <img src="assets/images/resources/intro-v1-img2.jpg" alt="#"/>
                                </div>
                                <div className="icon-box">
                                    <span className="icon-filter"></span>
                                </div>
                            </div>

                            <div className="intro-one__single-content text-center">
                                <div className="shape1"><img src="assets/images/shapes/intro-v1-shape1.png" alt="#"/></div>
                                <h2><a href="#">Tech Solution</a></h2>
                                <p>Specialized services for swift product  <br/>
                                launches and rapid customer captivation </p>
                            </div>
                        </div>
                    </div>
                 
                    <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.3s">
                        <div className="intro-one__single">
                            <div className="intro-one__single-img">
                                <div className="inner">
                                    <img src="assets/images/resources/intro-v1-img3.jpg" alt="#"/>
                                </div>
                                <div className="icon-box">
                                    <span className="icon-laptop"></span>
                                </div>
                            </div>

                            <div className="intro-one__single-content text-center">
                                <div className="shape1"><img src="assets/images/shapes/intro-v1-shape1.png" alt="#"/></div>
                                <h2><a href="#">IT Outsourcing</a></h2>
                                <p>Elevate Your Operations with Our Expert IT Outsourcing Services for  Seamless  <br/>
                               Integration and Optimal Performance</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="about-one">
            <div className="shape5 rotate-me"><img src="assets/images/shapes/about-v1-shape4.png" alt="#"/></div>
            <div className="shape6"><img src="assets/images/shapes/about-v1-shape5.png" alt="#"/></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-one__content">
                            <div className="sec-title">
                                <div className="sec-title__tagline">
                                    <div className="inner">
                                        <div className="round-box"><img src="assets/images/shapes/sec-title-shape.png"
                                                alt="#"/>
                                        </div>
                                        <div className="text">
                                            <p>Our Expertise in IT Solutions</p>
                                        </div>
                                    </div>
                                </div>
                                <h2 className="sec-title__title">VibeApps <br/>
                                    specializesin IT Solutions</h2>
                            </div>

                            <div className="about-one__content-text1">
                                <p>Empowering Entrepreneurs to Create Meaningful Software Solutions. Building products that make a positive impact, 
                                shaping a better world for all including ourselves</p>
                                <h2>Ready to transform your business?</h2>
                            </div>

                            <div className="about-one__content-text2">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="about-one__content-text2-single">
                                            <div className="icon-box">
                                                <div className="shape1"></div>
                                                <span className="icon-buoy-help"></span>
                                            </div>

                                            <div className="content-box">
                                                <h3>Tech Solution</h3>
                                                <p>There are many variations
                                                    of passages of lorem </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="about-one__content-text2-single">
                                            <div className="icon-box">
                                                <div className="shape1"></div>
                                                <span className="icon-answer-call"></span>
                                            </div>

                                            <div className="content-box">
                                                <h3>Quick support</h3>
                                                <p>Where Unparalleled Support Meets 
                                                Delightful Solutions for Excellence</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="about-one__content-text3">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="about-one__content-text3-progress">
                                            <div className="shape2"><img src="assets/images/shapes/about-v1-shape1.png"
                                                    alt="#"/></div>
                                            <div className="shape3"><img src="assets/images/shapes/about-v1-shape2.png"
                                                    alt="#"/></div>
                                            <div className="progress-box">
                                                <div className="graph-outer">
                                                    <input type="text" className="dial" data-fgColor="#ffffff"
                                                        data-bgColor="#fcbb54" data-width="80" data-height="80"
                                                        data-linecap="normal" value="95"/>
                                                    <div className="inner-text count-box"><span className="count-text"
                                                            data-stop="95" data-speed="2000"></span><span
                                                            className="count-Parsent">%</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="title-box">
                                                <h3>IT Project Solution</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="about-one__content-text3-content">
                                            <p>Provides Services for your Business <br/>
                                                 </p>
                                            <ul>
                                                <li>
                                                    <p> <span className="icon-check-circle"></span> Web Design</p>
                                                </li>

                                                <li>
                                                    <p> <span className="icon-check-circle"></span> Website Development</p>
                                                </li>

                                                <li>
                                                    <p> <span className="icon-check-circle"></span> Digital marketing</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <div className="col-xl-6">
                        <div className="about-one__img">
                            <div className="about-one__img1">
                                <img src="assets/images/about/about-v1-img1.jpg" alt="#"/>
                            </div>

                            <div className="about-one__img2">
                                <div className="shape4 rotate-me"><img src="assets/images/shapes/about-v1-shape3.png"
                                        alt="#"/></div>
                                <ul>
                                    <li>
                                        <div className="img-box1">
                                            <img src="assets/images/about/about-v1-img2.jpg" alt="#"/>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="img-box2">
                                            <img src="assets/images/about/about-v1-img3.jpg" alt="#"/>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* // <!--Start Services One--> */}
        <section class="services-one">
            <div class="shape3"><img src="assets/images/shapes/services-v1-shape2.png" alt="#"/></div>
            <div class="shape4"><img src="assets/images/shapes/services-v1-shape3.png" alt="#"/></div>
            <div class="shape5"><img src="assets/images/shapes/services-v1-shape4.png" alt="#"/></div>
            <div class="shape6"><img src="assets/images/shapes/services-v1-shape5.png" alt="#"/></div>
            <div class="shape7"><img src="assets/images/shapes/services-v1-shape6.png" alt="#"/></div>
            <div class="shape8"><img src="assets/images/shapes/services-v1-shape7.png" alt="#"/></div>
            <div class="shape9"><img src="assets/images/shapes/services-v1-shape8.png" alt="#"/></div>
            <div class="shape10"><img src="assets/images/shapes/services-v1-shape9.png" alt="#"/></div>
            <div class="shape11"><img src="assets/images/shapes/services-v1-shape10.png" alt="#"/></div>
            <div class="shape12"><img src="assets/images/shapes/services-v1-shape11.png" alt="#"/></div>
            <div class="container">
                <div class="services-one__top">
                    <div class="sec-title">
                        <div class="sec-title__tagline">
                            <div class="inner">
                                <div class="round-box"><img src="assets/images/shapes/sec-title-shape.png" alt="#"/>
                                </div>
                                <div class="text">
                                    <p>Our Services</p>
                                </div>
                            </div>
                        </div>
                        <h2 class="sec-title__title">Providing complete <br/>
                            Professional IT Services</h2>
                    </div>

                    <div class="services-one__top-text">
                        <p>Elevate Your Operations with Seamless and Powerful Technology Solutions
                        Unlock the Full Potential of Your Business 
                        with Our Comprehensive Professional IT Services</p>
                    </div>
                </div>

                <div class="row">
     
                    <div class="col-xl-3 col-lg-6 col-md-6  wow fadeInLeft" data-wow-delay="0ms"
                        data-wow-duration="1000ms">
                        <div class="services-one__single text-center">
                            <div class="shape2"><img src="assets/images/shapes/services-v1-shape1.png" alt="#"/></div>
                            <div class="services-one__single-icon">
                                <div class="shape1"></div>
                                <span class="icon-server-data"></span>
                            </div>

                            <div class="services-one__single-content">
                                <h2><a href="it-consultancy.html">Tech Analysis</a></h2>
                                <p>Dive into our insights hub for a quick grasp of the latest trends, tech breakthroughs, and expert perspectives </p>
                            </div>
                        </div>
                    </div>
                  
                    <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms"
                        data-wow-duration="1000ms">
                        <div class="services-one__single text-center">
                            <div class="shape2"><img src="assets/images/shapes/services-v1-shape1.png" alt="#"/></div>
                            <div class="services-one__single-icon">
                                <div class="shape1"></div>
                                <span class="icon-laptop"></span>
                            </div>

                            <div class="services-one__single-content">
                                <h2><a href="it-consultancy.html">IT Consultancy</a></h2>
                                <p>Elevate your business to new heights with our expert IT consultancy, offering tailored strategies and seamless solutions for digital success </p>
                            </div>
                        </div>
                    </div>
                   
                    <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="0ms"
                        data-wow-duration="1000ms">
                        <div class="services-one__single text-center">
                            <div class="shape2"><img src="assets/images/shapes/services-v1-shape1.png" alt="#"/></div>
                            <div class="services-one__single-icon">
                                <div class="shape1"></div>
                                <span class="icon-hard-drive"></span>
                            </div>

                            <div class="services-one__single-content">
                                <h2><a href="it-consultancy.html">Data Structuring</a></h2>
                                <p>Optimize your data landscape with precision, harnessing strategic power through our expert data structure solutions</p>
                            </div>
                        </div>
                    </div>
                  
                    <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="100ms"
                        data-wow-duration="1000ms">
                        <div class="services-one__single text-center">
                            <div class="shape2"><img src="assets/images/shapes/services-v1-shape1.png" alt="#"/></div>
                            <div class="services-one__single-icon">
                                <div class="shape1"></div>
                                <span class="icon-marketing-analysis"></span>
                            </div>

                            <div class="services-one__single-content">
                                <h2><a href="it-consultancy.html">Market Analysis</a></h2>
                                <p>Gain Strategic Insights and Stay Ahead in the Market with Our Expert Market Analysis  </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="services-one__bottom text-center">
                    <h2>We’re Ready Grow your IT Solution !</h2>
                    <p>we are ready to elevate your IT projects to new heights.  <br/>
                    Whether you're a startup looking to establish a robust technological foundation or an established enterprise aiming to optimize your IT infrastructure
                      <br/>we have the expertise and passion to make it happen.</p>
                    <div class="btn-box">
                        <a class="thm-btn" href="#">More Solution</a>
                    </div>
                </div>
                

            </div>
        </section>
        {/* <!--End Services One-->

        <!--Start Video One--> */}
        <section className="video-one">
            <div className="shape1"><img src="assets/images/shapes/video-v1-shape1.png" alt="#"/></div>
            <div className="shape2"><img src="assets/images/shapes/video-v1-shape1.png" alt="#"/></div>
            <div className="container">
                <div className="video-one__inner">
                    <div className="shape3"><img src="assets/images/shapes/video-v1-shape3.png" alt="#"/></div>
                    <div className="video-one__bg"
                        style={{backgroundImage:'url("assets/images/backgrounds/video-v1-bg.jpg")'}}></div>
             

                    <div className=" video-one__icon">
                        <a href="https://www.youtube.com/watch?v=pVE92TNDwUk" className="video-one__btn video-popup">
                            <span className="icon-play-button"></span>
                        </a>
                        <span className="border-animation border-1"></span>
                        <span className="border-animation border-2"></span>
                        <span className="border-animation border-3"></span>
                    </div>
                    <div className="title-box text-center">
                        <h2>We are IT Solution Specialists.</h2>
                    </div>
                </div>
            </div>
        </section>
     

  
   
       
        <section className="testimonial-one">
            <div className="container">
                <div className="sec-title text-center">
                    <div className="sec-title__tagline">
                        <div className="inner">
                            <div className="round-box"><img src="assets/images/shapes/sec-title-shape.png" alt="#"/>
                            </div>
                            <div className="text">
                                <p>Our Testimonial</p>
                            </div>
                        </div>
                    </div>
                    <h2 className="sec-title__title">Our Client Feedback What <br/>
                        They’re Talking?</h2>
                </div>

                <div className="row">
                    <div className="col-xl-12">
                        <div className="testimonial-one__inner">
                            <div className="owl-carousel owl-theme thm-owl__carousel case-one__carousel" data-owl-options='{
                                "loop": true,
                                "autoplay": true,
                                "margin": 30,
                                "nav": false,
                                "dots": false,
                                "smartSpeed": 500,
                                "autoplayTimeout": 10000,
                                "navText": ["<span className=\"icon-left-arrow\"></span>","<span className=\"icon-next\"></span>"],
                                "responsive": {
                                        "0": {
                                            "items": 1
                                        },
                                        "768": {
                                            "items": 1
                                        },
                                        "992": {
                                            "items": 1
                                        },
                                        "1200": {
                                            "items": 1
                                        },
                                        "1500": {
                                            "items": 2
                                        }
                                    }
                                }'>

                 
                                <div className="testimonial-one__single">
                                    <div className="testimonial-one__single-img">
                                        <div className="testimonial-one__single-img-bg"
                                            style={{backgroundImage:'url("assets/images/shapes/testimonial-v1-shape1.png");'}}>
                                                
                                        </div>
                                        <img src="assets/images/testimonial/testimonial-v1-img1.jpg" alt="#"/>
                                    </div>

                                    <div className="testimonial-one__single-content">
                                        <div className="testimonial-one__single-content-top">
                                            <div className="icon-box">
                                                <span className="icon-bubble-message"></span>
                                            </div>
                                            <div className="rating-box">
                                                <ul>
                                                    <li>
                                                        <span className="icon-star"></span>
                                                    </li>
                                                    <li>
                                                        <span className="icon-star"></span>
                                                    </li>
                                                    <li>
                                                        <span className="icon-star"></span>
                                                    </li>
                                                    <li>
                                                        <span className="icon-star"></span>
                                                    </li>
                                                    <li>
                                                        <span className="icon-star2"></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="testimonial-one__single-content-middle">
                                            <h2>It is very good company</h2>
                                            <p>Lorem ipsum dolor sit amet conse
                                                ctetur review sed do eiusmodtempor incididunt ut labore et on dolore
                                            </p>
                                        </div>

                                        <div className="testimonial-one__single-content-bottom">
                                            <h2>Tony Adeson</h2>
                                            <p>Designer Switzerland</p>
                                        </div>
                                    </div>
                                </div>
                               
                                <div className="testimonial-one__single">
                                    <div className="testimonial-one__single-img">
                                        <div className="testimonial-one__single-img-bg"
                                            style={{backgroundImage: `url("assets/images/shapes/testimonial-v1-shape1.png")` }}></div>
                                  
                                        <img src="assets/images/testimonial/testimonial-v1-img2.jpg" alt="#"/>
                                    </div>

                                    <div className="testimonial-one__single-content">
                                        <div className="testimonial-one__single-content-top">
                                            <div className="icon-box">
                                                <span className="icon-bubble-message"></span>
                                            </div>
                                            <div className="rating-box">
                                                <ul>
                                                    <li>
                                                        <span className="icon-star"></span>
                                                    </li>
                                                    <li>
                                                        <span className="icon-star"></span>
                                                    </li>
                                                    <li>
                                                        <span className="icon-star"></span>
                                                    </li>
                                                    <li>
                                                        <span className="icon-star"></span>
                                                    </li>
                                                    <li>
                                                        <span className="icon-star2"></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="testimonial-one__single-content-middle">
                                            <h2>Nice Services</h2>
                                            <p>Lorem ipsum dolor sit amet conse
                                                ctetur review sed do eiusmodtempor incididunt ut labore et on dolore
                                            </p>
                                        </div>

                                        <div className="testimonial-one__single-content-bottom">
                                            <h2>Adam Wiliam</h2>
                                            <p>Designer Switzerland</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


      
        {/* <section class="projects-one">
            <div class="container">

                <div class="row">
                    
                <div className="text">
                                <p>OUR PROJECTS</p>
                                <h2>WEBSITES CREATED BY US</h2>
                            </div>

                    
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
                   
                   
                </div>
            </div>
        </section> */}
      
      
    
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

        <section className="cta-one">
            <div className="container">
                <div className="cta-one__inner">
                    <div className="cta-one__bg" style={{backgroundImage:'url("assets/images/backgrounds/cta-v1-bg.jpg")'}}>
                    </div>                      

                    <div className="cta-one__text">
                        <h2>IT Services Customized for Your Agency</h2>
                    </div>

                    <div className="cta-one__btn">
                        <a href="contact.html">View All Protfolio</a>
                    </div>
                </div>
            </div>
        </section>

        <section className="counter-one">
            <div className="counter-one__bg" style={{backgroundImage:'url("assets/images/backgrounds/counter-v1-bg.jpg")'}}>
            </div>                         
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.1s">
                        <div className="counter-one__single">
                            <div className="counter-one__single-top">
                                <div className="img-box"><img src="assets/images/shapes/counter-v1-shape1.png" alt="#"/>
                                </div>
                                <div className="content-box">
                                    <h2><span className="odometer" data-count="80">00</span> <span className="plus">+</span>
                                    </h2>
                                </div>
                            </div>

                            <div className="counter-one__single-text">
                                <h3>Our Successful <br/>
                                    Completed Projects</h3>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.2s">
                        <div className="counter-one__single">
                            <div className="counter-one__single-top">
                                <div className="img-box"><img src="assets/images/shapes/counter-v1-shape1.png" alt="#"/>
                                </div>
                                <div className="content-box">
                                    <h2><span className="odometer" data-count="50">00</span> <span className="plus">+</span>
                                    </h2>
                                </div>
                            </div>

                            <div className="counter-one__single-text">
                                <h3>Our Agency <br/>
                                    IT Specialists</h3>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.3s">
                        <div className="counter-one__single">
                            <div className="counter-one__single-top">
                                <div className="img-box"><img src="assets/images/shapes/counter-v1-shape1.png" alt="#"/>
                                </div>
                                <div className="content-box">
                                    <h2><span className="odometer" data-count="80">00</span> <span className="plus">+</span>
                                    </h2>
                                </div>
                            </div>

                            <div className="counter-one__single-text">
                                <h3>Our Successful <br/>
                                    Completed Projects</h3>
                            </div>
                        </div>
                    </div>
 
                </div>

                <div className="counter-one__bottom text-center">
                    <h2>Assisting you in Overcoming your <br/>
                        Technological Obstacles</h2>
                    <div className="btn-box">
                        <a className="thm-btn" href="contact.html">Discover more </a>
                    </div>
                </div>
            </div>
        </section>





        <section className="team-one">
            <div className="container">
                <div className="sec-title text-center">
                    <div className="sec-title__tagline">
                        <div className="inner">
                            <div className="round-box"><img src="assets/images/shapes/sec-title-shape.png" alt="#"/>
                            </div>
                            <div className="text">
                                <p>Our Team</p>
                            </div>
                        </div>
                    </div>
                    <h2 className="sec-title__title">Our Professional Team</h2>
                </div>
                <div className="row">
                <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="team-one__single">
                            <div className="team-one__single-img">
                                <div className="inner">
                                    <img src="/assets/team/4.jpg" alt="#"/>
                                    <div className="social-link">
                                        <ul>
                                            <li>
                                                <a className="fb" href="#"><span className="icon-facebook"></span></a>
                                            </li>
                                            <li>
                                                <a className="tw" href="#"><span className="icon-twitter"></span></a>
                                            </li>
                                            <li>
                                                <a className="pin" href="#"><span className="icon-pinterest"></span></a>
                                            </li>
                                            <li>
                                                <a className="in" href="https://www.instagram.com/shree_radhe_45?igsh=MTlwaG9uYjZ1ZHpjYg==" target="blank"><span className="icon-instagram"></span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="team-one__single-content text-center">
                                <h2><a href="team-details.html">Rameshwar</a></h2>
                                <p>Junior Developer</p>
                            </div>
                        </div>
                    </div>
     
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms" data-wow-duration="1500ms">
                        <div className="team-one__single">
                            <div className="team-one__single-img">
                                <div className="inner">
                                    <img src="/assets/team/5.jpg" alt="#"/>
                                    <div className="social-link">
                                        <ul>
                                            <li>
                                                <a className="fb" href="#"><span className="icon-facebook"></span></a>
                                            </li>
                                            <li>
                                                <a className="tw" href="#"><span className="icon-twitter"></span></a>
                                            </li>
                                            <li>
                                                <a className="pin" href="#"><span className="icon-pinterest"></span></a>
                                            </li>
                                            <li>
                                                <a className="in" href="#"><span className="icon-instagram"></span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="team-one__single-content text-center">
                                <h2><a href="#">Mr. Satish </a></h2>
                                <p>Senior Developer</p>
                            </div>
                        </div>
                    </div>
                
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="team-one__single">
                            <div className="team-one__single-img">
                                <div className="inner">
                                    <img src="/assets/team/2.jpg" alt="#"/>
                                    <div className="social-link">
                                        <ul>
                                            <li>
                                                <a className="fb" href="#"><span className="icon-facebook"></span></a>
                                            </li>
                                            <li>
                                                <a className="tw" href="#"><span className="icon-twitter"></span></a>
                                            </li>
                                            <li>
                                                <a className="pin" href="#"><span className="icon-pinterest"></span></a>
                                            </li>
                                            <li>
                                                <a className="in" href="#"><span className="icon-instagram"></span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="team-one__single-content text-center">
                                <h2><a href="team-details.html">Kshitij </a></h2>
                                <p>Project Manager</p>
                            </div>
                        </div>
                    </div>
                

                   
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
        {/* <!--End Blog One-->

        <!--Start Google Map One--> */}
        <section className="google-map-one">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                className="google-map-one__map" allowfullscreen></iframe>
        </section>
        {/* <!--End Google Map One-->

        <!--Start Contact Info One--> */}
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
                                    <h3><a href="tel:+91 8349359939">+91 8349359939</a></h3>
                                    <h3><a href="tel:+91 7067224946">+91 7067224946</a></h3>
                                    <h3><a href="tel:+91 7470409407">+91 7470409407</a></h3>
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
  
  export default Home;