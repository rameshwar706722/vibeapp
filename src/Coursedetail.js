import Header from "./Header";
import Footer from "./Footer";
import { useState, useEffect } from "react";

function Coursedetail() {

    //const navigate = useNavigate();

    // alert(storeid);

    const [coursedetail, setCoursedetail] = useState([]);



    // // alert(storeid);
    // const [category, setCategory] = useState([]);
    // const [coupon, setCoupon] = useState([]);


    useEffect(() => {


        fetch('https://vibeapps.in/campus/index.php/rest/courses_api_details').then((response) => response.json())
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
                                        <h2>Course Details</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="breadcrumb-wrap2">

                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="index-2.html">Home</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">Course Details</li>
                                    </ol>
                                </nav>
                            </div>

                        </div>
                    </div>
                </section>

                <section class="project-detail">
                 
                 
                    <div class="container">

                        <div class="lower-content">
                            <div class="row">
                                <div class="text-column col-lg-9 col-md-9 col-sm-12">
                                    <h2></h2>

                                    <div class="upper-box">
                                        <div class="single-item-carousel owl-carousel owl-theme">
                                            <figure class="image"><img src="assets/img/class/class-9.jpg" alt="" /></figure>
                                        </div>
                                    </div>
                                    <div class="inner-column">
                                        <div class="course-meta2 review style2 clearfix mb-30">
                                            <ul class="left">
                                                 <li>
                                                    <div class="author">
                                                        <div class="thumb">
                                                            <img src="assets/img/bg/testi_avatar.png" alt="image" />
                                                        </div>

                                                        <div class="text">
                                                            <a href="single-courses-2.html">Robto Jone</a>
                                                            <p>Teacher</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="categories">
                                                    <div class="author">
                                                        <div class="text">
                                                            <a href="#" class="course-name">Photoshop</a>
                                                            <p>Categories</p>
                                                        </div>
                                                    </div>

                                                </li>

                                            </ul>
                                            <ul class="right">
                                                <li class="price">
                                                    $59.00
                                                </li>

                                            </ul>
                                        </div>
                                        <h3>Course Overview</h3>
                                        <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing.</p>

                                        <p>The world of search engine optimization is complex and ever-changing, but you can easily understand the basics, and even a small amount of SEO knowledge can make a big difference. Free SEO education is also widely available on the web, including in guides like this! (Woohoo!) This guide is designed to describe all major aspects of SEO, from finding the terms and phrases (keywords) that can generate qualified traffic to your website, to making your site friendly to search engines, to building links and marketing the unique value of your site.Etiam pharetra erat sed fermentum feugiat velit mauris egestas quam ut erat justo.</p>
                                        <h4>What You Will Learn</h4>
                                        <p>Fusce eleifend donec sapien sed phase lusa pellentesque lacus.Vivamus lorem arcu semper duiac. Cras ornare arcu avamus nda leo Etiam ind arcu. Morbi justo mauris tempus pharetra interdum at congue semper purus. Lorem ipsum dolor sit.The world of search engine optimization is complex and ever-changing, but you can easily understand the basics.</p>
                                        <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing.</p>
                                        <ul class="pr-ul">
                                            <li>
                                                <div class="icon"><i class="fal fa-check"></i></div>
                                                <div class="text">
                                                    Crawl accessibility so engines can read your website
                                                </div>
                                            </li>
                                            <li>
                                                <div class="icon"><i class="fal fa-check"></i></div>
                                                <div class="text">
                                                    Share-worthy content that earns links, citations
                                                </div>
                                            </li>
                                            <li>
                                                <div class="icon"><i class="fal fa-check"></i></div>
                                                <div class="text">
                                                    Keyword optimized to attract searchers & engines
                                                </div>
                                            </li>
                                            <li>
                                                <div class="icon"><i class="fal fa-check"></i></div>
                                                <div class="text">
                                                    Title, URL, & description to draw high CTR
                                                </div>
                                            </li>

                                        </ul>
                                        <h4>Study Options:</h4>
                                        <table class="table table-bordered mb-40">
                                            <thead>
                                                <tr>
                                                    <th>Qualification</th>
                                                    <th>Length</th>
                                                    <th>Code</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Bsc (Hons)</td>
                                                    <td>3 years full time</td>
                                                    <td>CDX3</td>
                                                </tr>
                                                <tr>
                                                    <td>Bsc </td>
                                                    <td>4 years full time</td>
                                                    <td>CDX4</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <h3>Frequently Asked Question</h3>
                                        <p>A business or organization established to provide a particular service, typically one that involves a organizing transactions.Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing..</p>
                                        <div class="faq-wrap pt-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                                            <div class="accordion" id="accordionExample">
                                                <div class="card">
                                                    <div class="card-header" id="headingThree">
                                                        <h2 class="mb-0">
                                                            <button class="faq-btn" type="button" data-bs-toggle="collapse"
                                                                data-bs-target="#collapseThree"  >
                                                                01 Cras turpis felis, elementum sed mi at arcu ?
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    <div id="collapseThree" class="collapse show"
                                                        data-bs-parent="#accordionExample">
                                                        <div class="card-body">
                                                            Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card">
                                                    <div class="card-header" id="headingOne">
                                                        <h2 class="mb-0">
                                                            <button class="faq-btn collapsed" type="button" data-bs-toggle="collapse"
                                                                data-bs-target="#collapseOne"  >
                                                                02 Vestibulum nibh risus, in neque eleifendulputate sem ?
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    <div id="collapseOne" class="collapse" data-bs-parent="#accordionExample">
                                                        <div class="card-body">
                                                            Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card">
                                                    <div class="card-header" id="headingTwo">
                                                        <h2 class="mb-0">
                                                            <button class="faq-btn collapsed" type="button" data-bs-toggle="collapse"
                                                                data-bs-target="#collapseTwo"  >
                                                                03 Donec maximus, sapien id auctor ornare ?
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    <div id="collapseTwo" class="collapse" data-bs-parent="#accordionExample">
                                                        <div class="card-body">
                                                            Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <aside class="sidebar-widget info-column">
                                        <div class="inner-column3">
                                            <h3>Course Features</h3>
                                            <ul class="project-info clearfix">
                                                <li>
                                                    <div class="priceing">
                                                        <strong>$59.00</strong> <sub>$139.00</sub>
                                                        <span class="discont">68% OFF</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span class="icon fal fa-home-lg-alt"></span> <strong>Instructor:</strong> <span>Eleanor Fant</span>
                                                </li>

                                                <li>
                                                    <span class="icon fal fa-book"></span> <strong>Lectures:</strong> <span>14</span>
                                                </li>

                                                <li>
                                                    <span class="icon fal fa-clock"></span> <strong>Duration:</strong> <span>6 weeks</span>
                                                </li>
                                                <li>
                                                    <span class="icon fal fa-user"></span> <strong>Enrolled: </strong> <span>20 students</span>
                                                </li>
                                                <li>
                                                    <span class="icon fal fa-globe"></span> <strong>Language: </strong> <span>English</span>
                                                </li>
                                                <li>
                                                    <div class="slider-btn">
                                                        <a href="contact.html" class="btn ss-btn smoth-scroll">Enroll <i class="fal fa-long-arrow-right"></i></a>
                                                    </div>
                                                </li>

                                            </ul>
                                        </div>
                                    </aside>



                                </div>


                            </div>


                        </div>


                    </div>
                </section>

                <div class="brand-area pt-60 pb-60" style={{ background: "#125875;" }}>
                    <div class="container">
                        <div class="row brand-active">
                            <div class="col-xl-2">
                                <div class="single-brand">
                                    <img src="assets/img/brand/b-logo1.png" alt="img" />
                                </div>
                            </div>
                            <div class="col-xl-2">
                                <div class="single-brand">
                                    <img src="assets/img/brand/b-logo2.png" alt="img" />
                                </div>
                            </div>
                            <div class="col-xl-2">
                                <div class="single-brand">
                                    <img src="assets/img/brand/b-logo3.png" alt="img" />
                                </div>
                            </div>
                            <div class="col-xl-2">
                                <div class="single-brand">
                                    <img src="assets/img/brand/b-logo4.png" alt="img" />
                                </div>
                            </div>
                            <div class="col-xl-2">
                                <div class="single-brand">
                                    <img src="assets/img/brand/b-logo5.png" alt="img" />
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

export default Coursedetail;