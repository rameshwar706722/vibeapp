import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import { useState, useEffect } from "react";

function Courses() {

    //const navigate = useNavigate();

    // alert(storeid);

    const [courses, setCourses] = useState([]);



    // alert(storeid);
    const [category, setCategory] = useState([]);
    const [coupon, setCoupon] = useState([]);


    useEffect(() => {


        fetch('https://vibeapps.in/campus/index.php/rest/blog_api').then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                setCourses(responseJson);

            }).catch((error) => {
                console.log(error);
            });


    }, []);
    return (

        <>
            <Header />
            <main>


                <section class="breadcrumb-area d-flex  p-relative align-items-center" style={{ backgroundImage: "url(assets/img/bg/bdrc-bg.png)" }}>

                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-xl-12 col-lg-12">
                                <div class="breadcrumb-wrap text-left">
                                    <div class="breadcrumb-title">
                                        <h2>Courses</h2>

                                    </div>
                                </div>
                            </div>
                            <div class="breadcrumb-wrap2">

                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="index-2.html">Home</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">Courses</li>
                                    </ol>
                                </nav>
                            </div>

                        </div>
                    </div>
                </section>

                

                    <section class="shop-area pt-120 pb-120 p-relative " data-animation="fadeInUp animated" data-delay=".2s">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 col-sm-6">
                                    <h6 class="mt-20 mb-50">Showing 1–9 of 10 results</h6>
                                </div>
                                <div class="col-lg-6 col-sm-6 text-right">
                                    <select name="orderby" class="orderby" aria-label="Shop order">
                                        <option value="menu_order" selected="selected">Default sorting</option>
                                        <option value="popularity">Sort by popularity</option>
                                        <option value="rating">Sort by average rating</option>
                                        <option value="date">Sort by latest</option>
                                        <option value="price">Sort by price: low to high</option>
                                        <option value="price-desc">Sort by price: high to low</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row align-items-center">
                            <div class="col-lg-4 col-md-6 ">
                            {courses.map(x => (
                        <div class="courses-item mb-30 hover-zoomin">
                            <div class="thumb fix">
                                <a href="single-courses.html"><img src="assets/img/bg/couress-img-1.jpg"
                                        alt="contact-bg-an-01"/></a>
                                        
                            </div>
                           
                            <div class="courses-content">
                                <div class="cat"><i class="fal fa-graduation-cap"></i>{x.c_dep}</div>
                                <h3><a href="single-courses.html"> {x.c_name}</a></h3>
                                <p>{x.c_detail}</p>
                                <a href="single-courses.html" class="readmore">Read More <i
                                        class="fal fa-long-arrow-right"></i></a>
                            </div>
                            <div class="icon">
                                <img src="img/icon/cou-icon.png" alt="img"/>
                            </div>
                           
                        </div>
                        ))}
                    </div>

                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <div class="pagination-wrap mt-20 text-center">
                                        <nav>
                                            <ul class="pagination">
                                                <li class="page-item"><a href="#"><i class="fas fa-angle-double-left"></i></a></li>
                                                <li class="page-item active"><a href="#">1</a></li>
                                                <li class="page-item"><a href="#">2</a></li>
                                                <li class="page-item"><a href="#">3</a></li>
                                                <li class="page-item"><a href="#">...</a></li>
                                                <li class="page-item"><a href="#">10</a></li>
                                                <li class="page-item"><a href="#"><i class="fas fa-angle-double-right"></i></a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div></div></div>
                        </div>
                    </section>

               



                <div class="brand-area pt-60 pb-60" style={{ background: "#125875;" }}>
                    <div class="container">
                        <div class="row brand-active">
                            <div class="col-xl-2">
                                <div class="single-brand">
                                    <img src="assets/img/brand/b-logo1.png" alt="img"/>
                                </div>
                            </div>
                            <div class="col-xl-2">
                                <div class="single-brand">
                                    <img src="assets/img/brand/b-logo2.png" alt="img"/>
                                </div>
                            </div>
                            <div class="col-xl-2">
                                <div class="single-brand">
                                    <img src="assets/img/brand/b-logo3.png" alt="img"/>
                                </div>
                            </div>
                            <div class="col-xl-2">
                                <div class="single-brand">
                                    <img src="assets/img/brand/b-logo4.png" alt="img"/>
                                </div>
                            </div>
                            <div class="col-xl-2">
                                <div class="single-brand">
                                    <img src="assets/img/brand/b-logo5.png" alt="img"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </>
    );
}

export default Courses;