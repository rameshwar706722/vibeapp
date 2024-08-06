import React from "react";
import Header from "./Header";
import axios from 'axios';
import { useState,useEffect } from "react";
import { useParams,Link, useNavigate} from 'react-router-dom';



function Contact() {

    const [cbxname,setCbxname]=useState([]);
    const [cbxsubject,setCbxsubject]=useState([]);

    const [cbxemail,setCbxemail]=useState('');
    const [cbxphone,setCbxphone]=useState('');
    const [cbxmessage,setCbxmessage]=useState('');

    const cbxsubjectchange=(e)=>{
        setCbxsubject(e.target.value);
    }
    const cbxnamechange=(e)=>{
        setCbxname(e.target.value);
    }
    const cbxemailchange=(e)=>{
        setCbxemail(e.target.value);
    }

    const cbxphonechange=(e)=>{
        setCbxphone(e.target.value);
    }

    const cbxmessagechange=(e)=>{
        setCbxmessage(e.target.value);
    }
  


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
                    <h2>Contact</h2>
                    <ul class="thm-breadcrumb">
                        <li><a href="home">Home</a></li>
                        <li><span>/</span></li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </section>
        
        <section className="contact-page">
            <div className="container">
            <div class="contact-page__top">
                    <div class="title text-center">
                        <h2>Please don't hesitate to contact us <br/> with any inquiries or messages.</h2>
                        <p>You can also reach out to us by phone or email are many variations</p>
                    </div>

                    <ul class="list-unstyled">
           
                        <li class="contact-page__top-single">
                            <div class="icon">
                                <span class="icon-location-filled"></span>
                            </div>
                            <div class="content">
                                <h2>Address</h2>
                                <p>Mr 10  Square Vijay Nagar, Indore <br/>
                                Madhya Pradesh</p>
                            </div>
                        </li>
                      
                        <li class="contact-page__top-single">
                            <div class="icon">
                                <span class="icon-phone-auricular"></span>
                            </div>
                            <div class="content">
                                <h2>Contact</h2>
                                <p>
                                    <a href="tel:+91 8349359939">+91 8349359939</a>
                                    <a href="tel: +91 7470409407">+91 7470409407 </a>
                                      <a href="tel:+91 7067224946">+91 7067224946</a>
                                   
                                </p>
                            </div>
                        </li>
                       
                        <li class="contact-page__top-single">
                            <div class="icon">
                                <span class="icon-email2"></span>
                            </div>
                            <div class="content">
                                <h2>Email </h2>
                                <p>
                                    <a href="mailto:info24@gmail.com">Info24@gmail.com</a>
                                    <a href="mailto:support24@gmail.com">Support24@gmail.com</a>
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="contact-page__bottom">
                    <div className="contact-page__bottom-pattern"
                        style={{backgroundImage: 'url("assets/images/pattern/contact-page-pattern.jpg")'}}> </div>
                    <div className="contact-page__bottom-inner">
                        <form action="https://bracketweb.com/ontech-html/assets/inc/sendemail.php" className="contact-page__form contact-form-validated">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    {cbxname}
                                    <div className="contact-page__input-box">
                                    <input type="text" name="cbxname"onChange={cbxnamechange}
                                 classNameName="form-control" placeholder="Name"/>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    {cbxemail}
                                    <div className="contact-page__input-box">
                                        <input type="email" placeholder="Email Address"name="cbxemail" onChange={cbxemailchange}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    {cbxphone}
                                    <div className="contact-page__input-box">
                                        <input type="text" placeholder="Phone" name="cbxphone" onChange={cbxphonechange} />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    {cbxsubject}
                                    <div className="contact-page__input-box">
                                        <input type="text" placeholder="Subject" name="cbxsubject" onChange={cbxsubjectchange} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                {cbxmessage}
                                    <div className="contact-page__input-box">
                                        <textarea name="cbxmessage" onChange={cbxmessagechange} placeholder="Your Message here "></textarea>
                                    </div>
                                    <div className="contact-page__btn">
                                        <button type="submit" className="thm-btn">
                                            Send A Message
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    
      </div>
    );
  }
  
  export default Contact;