import React from "react";

import Header from "./Header";
import { Link } from "react-router-dom";

function Ecom() {
  return (
    <>
      <Header />

      <section className="services-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="sidebar">
                <div
                  className="sidebar__single sidebar__services wow animated fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="title-box">
                    <div className="inner">
                      <div className="shape">
                        <img
                          src="assets/images/shapes/sidebar-title-shape.png"
                          alt="#"
                        /> E-Commerce 
                      </div>
                    </div>
                  </div>

                  <div className="sidebar__services-box">
                    <ul className="sidebar__services-box-list clearfix">
                      <li>
                        <Link to="/ecom">
                          E-Commerce <span className="icon-right-arrow2"></span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/cms">
                          CMS<span className="icon-right-arrow2"></span>
                        </Link>
                      </li>{" "}
                      <li>
                        <Link to="/informative">
                          Informative{" "}
                          <span className="icon-right-arrow2"></span>
                        </Link>
                      </li>{" "}
                      <li>
                        <Link to="/erp">
                          ERP & CRM <span className="icon-right-arrow2"></span>
                        </Link>
                      </li>{" "}
                      <li>
                        <Link to="/websitedev">
                         Web Development<span className="icon-right-arrow2"></span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  className="sidebar__single sidebar__author wow animated fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="sidebar__author-box text-center">
                    <div className="shape1">
                      <img
                        src="assets/images/shapes/sidebar-shape1.png"
                        alt="#"
                      />
                    </div>
                    <div className="shape2">
                      <img
                        src="assets/images/shapes/sidebar-shape2.png"
                        alt="#"
                      />
                    </div>
                    <div className="shape3">
                      <img
                        src="assets/images/shapes/sidebar-shape3.png"
                        alt="#"
                      />
                    </div>
                    <div className="shape4">
                      <img
                        src="assets/images/shapes/sidebar-shape4.png"
                        alt="#"
                      />
                    </div>
                    <div className="sidebar__author-box-icon">
                      <span className="icon-bubble-message"></span>
                    </div>
                    <div className="sidebar__author-box-text">
                      <h3>
                        Neque porro est qui dolorem ipsum quia quaed inventore
                        veritatis et{" "}
                      </h3>
                    </div>
                    <div className="sidebar__author-box-img">
                      <img
                        src="assets/images/resources/sidebar-img1.jpg"
                        alt="#"
                      />
                    </div>
                    <h2>Alex Handson</h2>
                  </div>
                </div>

                <div
                  className="sidebar__single sidebar__contact wow animated fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="title-box">
                    <div className="inner">
                      <div className="shape">
                        <img
                          src="assets/images/shapes/sidebar-title-shape.png"
                          alt="#"
                        />
                      </div>
                      <h2>Have Any Query</h2>
                    </div>
                  </div>

                  <div className="sidebar__contact-box">
                    <div className="sidebar__contact-box-img">
                      <div
                        className="gradient-bg"
                        style={{
                          backgroundImage:
                            'url("assets/images/backgrounds/sidebar-gradient-bg1.png")',
                        }}
                      ></div>
                      <img
                        src="assets/images/resources/sidebar-img2.jpg"
                        alt="#"
                      />

                      <div className="overlay-content text-center">
                        <h3>
                          Have Questions? <br />
                          Nothing stops us from <br />
                          doing what we like
                        </h3>
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
                  <h2>E-Commerce</h2>
                  <p className="text1">
                    E-commerce, short for electronic commerce, refers to the
                    buying and selling of goods and services over the internet.
                    In an e-commerce transaction, the exchange of products or
                    services, as well as the associated monetary transactions,
                    are conducted electronically.
                  </p>
                  <p className="text2">
                    E-commerce has transformed the way businesses operate and
                    how consumers shop. It offers convenience, accessibility,
                    and a global reach, allowing businesses to connect with
                    customers beyond geographical boundaries. The e-commerce
                    landscape continues to evolve with advancements in
                    technology, changing consumer preferences, and innovations
                    in online business models.
                  </p>
                  <h3>Key elements of e-commerce include:</h3><hr/>

                  <h4>Online Transactions:</h4>
                  <p className="text3">
                    E-commerce enables the buying and selling of products and
                    services through online platforms. This can include
                    websites, mobile apps, or other online interfaces.
                  </p>
                  <h4>Digital Payments:</h4>
                  <p className="text3">
                  Electronic transactions involve the use of digital payment methods, such as credit cards, digital wallets, or online banking systems. These methods facilitate secure and efficient monetary exchanges.
                  </p>
                  <h4>Online Marketplaces:</h4>
                  <p className="text3">
                  E-commerce can take place on dedicated online stores, but it also includes transactions on third-party platforms and marketplaces like Amazon, eBay, or Etsy, where multiple sellers can offer their products to a broad audience.
                  </p>
                  <h4>Electronic Data Interchange (EDI):</h4>
                  <p className="text3">
                  With the widespread use of smartphones and tablets, M-commerce has become a significant aspect of e-commerce. Consumers can browse, shop, and make transactions using mobile devices and dedicated apps
                  </p>
                  <h4>Online Banking and Financial Transactions:</h4>
                  <p className="text3">
                  E-commerce relies on secure online financial transactions, including the use of encryption and other security measures to protect sensitive information.
                  </p>
                  
                  <h4>Digital Marketing: </h4>
                  <p className="text3">
                  E-commerce businesses utilize various digital marketing strategies to reach and engage their target audience. This includes search engine optimization (SEO), social media marketing, email marketing, and other online promotional efforts.
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

            <hr />
            <div
              className="col-xl-6 wow fadeInLeft"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="projects-one__single">
                <div className="projects-one__single-img">
                  <div className="inner">
                    <img src="assets/website/1.png" alt="#" />
                    <div className="overlay-content">
                      <div className="shape1">
                        <img
                          src="assets/images/shapes/projects-v1-shape1.png"
                          alt="#"
                        />
                      </div>
                      <div className="shape2">
                        <img
                          src="assets/images/shapes/projects-v1-shape2.png"
                          alt="#"
                        />
                      </div>
                      <div className="shape3">
                        <img
                          src="assets/images/shapes/projects-v1-shape3.png"
                          alt="#"
                        />
                      </div>
                      <div className="shape4">
                        <img
                          src="assets/images/shapes/projects-v1-shape4.png"
                          alt="#"
                        />
                      </div>
                      <div className="content-box">
                        <p className="text1">y1electronics</p>
                        <h3>
                          <a href="https://y1electronics.in/">
                            electornics store
                          </a>
                        </h3>
                        <p className="text2">
                          Online electornics equipments store
                        </p>
                      </div>

                      <div className="icon-box">
                        <a href="https://y1electronics.in/">
                          <span className="icon-right-arrow3"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-6 wow fadeInRight"
              data-wow-delay="100ms"
              data-wow-duration="1500ms"
            >
              <div className="projects-one__single">
                <div className="projects-one__single-img">
                  <div className="inner">
                    <img src="assets/website/4.png" alt="#" />
                    <div className="overlay-content">
                      <div className="shape1">
                        <img
                          src="assets/images/shapes/projects-v1-shape1.png"
                          alt="#"
                        />
                      </div>
                      <div className="shape2">
                        <img
                          src="assets/images/shapes/projects-v1-shape2.png"
                          alt="#"
                        />
                      </div>
                      <div className="shape3">
                        <img
                          src="assets/images/shapes/projects-v1-shape3.png"
                          alt="#"
                        />
                      </div>
                      <div className="shape4">
                        <img
                          src="assets/images/shapes/projects-v1-shape4.png"
                          alt="#"
                        />
                      </div>
                      <div className="content-box">
                        <p className="text1">VB DESIGNS</p>
                        <h3>
                          <a href="https://vbdesignstore.com/">Digital Art</a>
                        </h3>
                        <p className="text2">Digital art selling website</p>
                      </div>

                      <div className="icon-box">
                        <a href="https://vbdesignstore.com/">
                          <span className="icon-right-arrow3"></span>
                        </a>
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

export default Ecom;
