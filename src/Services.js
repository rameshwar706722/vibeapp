import React from "react";
import Header from "./Header";


import { useState,useEffect } from "react";
import { useParams,Link, useNavigate} from 'react-router-dom';
function Services() {



  
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
      <Header />


      <section class="page-header">
            <div class="page-header__bg" style={{backgroundImage:'url(assets/images/backgrounds/page-header-bg.jpg)'}}>
            </div>
            <div class="page-header__gradient"
                 style={{backgroundImage:' url(assets/images/backgrounds/page-header-gradient-bg.png)'}}></div>
            <div class="shape1 float-bob-x"><img src="assets/images/shapes/page-header-shape1.png" alt="#"/></div>

            <div class="container">
                <div class="page-header__inner text-center">
                    <h2>Our Services</h2>
                    <ul class="thm-breadcrumb">
                        <li><a href="home">Home</a></li>
                        <li><span>/</span></li>
                        <li>Services</li>
                    </ul>
                </div>
            </div>
        </section>
      <section class="pricing-one">
            <div class="container">
                <div class="title-box">
                    <h2>Our Services <br/> & Payment Structure</h2>
                </div>
                <div class="row">
           
                    <div class="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                        <div class="pricing-one__single text-center">
                            <div class="table-header">
                                <div class="shape1"><img src="assets/images/shapes/pricing-v1-shape1.png" alt="#"/></div>
                                <div class="shape2"><img src="assets/images/shapes/pricing-v1-shape2.png" alt="#"/></div>
                                <h2>Website</h2>
                            </div>

                            <div class="table-content">
                                <div class="table-content__top">
                                    <div class="shape3"></div>
                           
                                    <h2>₹9,999 <span></span></h2>
                                    <br/>               <br/>
                                    <div></div>
                                </div>

                                <ul className="services-list" >
                    <li>5 pages Website </li>
                    <li>1 Year Free Domain Name </li>
                    <li> 1 Year Free Hosting </li>
                    <li> Dynamic Website </li>
                    <li> Lifetime 24/7 Free Hosting Support Admin Access </li>
                    <li> Unlimited Images & Videos Upload </li>
                    <li>Free SSL Certificates </li>
                    <li>5 Free Email Id </li>
                    <li>SEO Friendly Website </li>
                    <li>100% Responsive Website </li>
                    <li>Live Chat Integration </li>
                    <li>Payment Gateway Integration </li>
                    <li>Social Media Integration </li>
                    <li>Call Button Integration </li>
                    <li> WhatsApp Button Integration </li>
                    <li>Inquiry Form </li> <hr/>
                    <li>1 Year Free Technical Support For Website </li>
                    <li> Annual Renewal For Hosting Rs.3000. </li>
                   
                  </ul>
                            </div>

                            <div class="table-footer">
                                <div class="btn-box">
                                    <a class="thm-btn" href="tel:+91 8349359939">Call Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                        <div class="pricing-one__single text-center">
                            <div class="table-header">
                                <div class="shape1"><img src="assets/images/shapes/pricing-v1-shape1.png" alt="#"/></div>
                                <div class="shape2"><img src="assets/images/shapes/pricing-v1-shape2.png" alt="#"/></div>
                                <h2>Website</h2>
                            </div>

                            <div class="table-content">
                                <div class="table-content__top">
                                    <div class="shape3"></div>
                           
                                    <h2>₹13,999 <span></span></h2>
                                </div>

                                <ul className="services-list" >
                    <li>12 pages Website </li>
                    <li>1 Year Free Domain Name </li>
                    <li> 1 Year Free Hosting </li>
                    <li> Dynamic Website </li>
                    <li> Lifetime 24/7 Free Hosting Support Admin Access </li>
                    <li> Unlimited Images & Videos Upload </li>
                    <li>Free SSL Certificates </li>
                    <li>5 Free Email Id </li>
                    <li>SEO Friendly Website </li>
                    <li>100% Responsive Website </li>
                    <li>Live Chat Integration </li>
                    <li>Payment Gateway Integration </li>
                    <li>Social Media Integration </li>
                    <li>Call Button Integration </li>
                    <li> WhatsApp Button Integration </li>
                    <li>Inquiry Form </li> <hr/>
                    <li>1 Year Free Technical Support For Website </li>
                    <li> Annual Renewal For Hosting Rs.3000. </li>
                   
                  </ul>
                            </div>

                            <div class="table-footer">
                                <div class="btn-box">
                                    <a class="thm-btn" href="tel:+91 8349359939">Call Now</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                        <div class="pricing-one__single text-center">
                            <div class="table-header">
                                <div class="shape1"><img src="assets/images/shapes/pricing-v1-shape1.png" alt="#"/></div>
                                <div class="shape2"><img src="assets/images/shapes/pricing-v1-shape2.png" alt="#"/></div>
                                <h2>Website</h2>
                            </div>

                            <div class="table-content">
                                <div class="table-content__top">
                                    <div class="shape3"></div>
                           
                                    <h2>₹19,999 <span></span></h2>
                                </div>

                                <ul className="services-list" >
                    <li>Pages: According to Requirement </li>
                    <li>1 Year Free Domain Name </li>
                    <li> 1 Year Free Hosting </li>
                    <li> Dynamic Website </li>
                    <li> Lifetime 24/7 Free Hosting Support Admin Access </li>
                    <li> Unlimited Images & Videos Upload </li>
                    <li>Free SSL Certificates </li>
                    <li>5 Free Email Id </li>
                    <li>SEO Friendly Website </li>
                    <li>100% Responsive Website </li>
                    <li>Live Chat Integration </li>
                    <li>Payment Gateway Integration </li>
                    <li>Social Media Integration </li>
                    <li>Call Button Integration </li>
                    <li> WhatsApp Button Integration </li>
                    <li>Inquiry Form </li> <hr/>
                    <li>1 Year Free Technical Support For Website </li>
                    <li> Annual Renewal For Hosting Rs.3000. </li>
                   
                  </ul>
                            </div>

                            <div class="table-footer">
                                <div class="btn-box">
                                    <a class="thm-btn" href="tel:+91 8349359939">Call Now</a>
                                </div>
                            </div>
                        </div>
                    </div>

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

export default Services;
