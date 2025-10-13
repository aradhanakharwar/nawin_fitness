import React, { useEffect, useState } from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
    useEffect(() => {
        // Initialize Owl Carousel after the component mounts
        window.$(".hs-slider").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 9000,
            nav: true,
            dots: false,
            navText: ["<i className='fa fa-angle-left'></i>", "<i className='fa fa-angle-right'></i>"],
        });
    }, []);

    const slides = [
        { id: 1, image: "/img/hero/hero-1.jpg", text: "Be strong training hard" },
        { id: 2, image: "/img/hero/hero-2.jpg", text: "Push yourself to the limit" },
    ];


    const testimonialSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    };



    const galleryData = [
        { id: 1, src: 'img/gallery/gallery-1.jpg', isWide: true },
        { id: 2, src: 'img/gallery/gallery-2.jpg', isWide: false },
        { id: 3, src: 'img/gallery/gallery-3.jpg', isWide: false },
        { id: 4, src: 'img/gallery/gallery-4.jpg', isWide: false },
        { id: 5, src: 'img/gallery/gallery-5.jpg', isWide: false },
        { id: 6, src: 'img/gallery/gallery-6.jpg', isWide: true }
    ];

    // 2. State to manage the currently opened image
    const [selectedImage, setSelectedImage] = useState(null);

    // 3. Functions to open and close the modal
    const openModal = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };


    return (
        <>
            {/* Hero Section Begin */}
            <section className="hero-section">
                <div className="hs-slider owl-carousel">
                    {slides.map((slide) => (
                        <div
                            key={slide.id}
                            className="hs-item set-bg"
                            style={{ backgroundImage: `url(${slide.image})`, transition: "all 0.5s ease-in-out" }}
                        >
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 offset-lg-6">
                                        <div className="hi-text">
                                            <span>Shape your body</span>
                                            <h1>{slide.text}</h1>
                                            <a href="#" className="primary-btn">
                                                Get info
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* Hero Section End */}

            {/* ChoseUs Section Begin */}
            <section className="choseus-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <span>Why chose us?</span>
                                <h2>PUSH YOUR LIMITS FORWARD</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="cs-item">
                                <span className="flaticon-034-stationary-bike"></span>
                                <h4>Modern equipment</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    dolore facilisis.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="cs-item">
                                <span className="flaticon-033-juice"></span>
                                <h4>Healthy nutrition plan</h4>
                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
                                    facilisis.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="cs-item">
                                <span className="flaticon-002-dumbell"></span>
                                <h4>Proffesponal training plan</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    dolore facilisis.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="cs-item">
                                <span className="flaticon-014-heart-beat"></span>
                                <h4>Unique to your needs</h4>
                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
                                    facilisis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ChoseUs Section End */}

            {/* Classes Section Begin */}
            <section className="classes-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <span>Our Classes</span>
                                <h2>WHAT WE CAN OFFER</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="class-item">
                                <div className="ci-pic">
                                    {/* <img src={img1} alt="" /> */}

                                    <img src="img/classes/class-1.jpg" alt="" />
                                </div>
                                <div className="ci-text">
                                    <span>STRENGTH</span>
                                    <h5>Weightlifting</h5>
                                    <a href="#"><i className="fa fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="class-item">
                                <div className="ci-pic">
                                    <img src="img/classes/class-2.jpg" alt="" />
                                </div>
                                <div className="ci-text">
                                    <span>Cardio</span>
                                    <h5>Indoor cycling</h5>
                                    <a href="#"><i className="fa fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="class-item">
                                <div className="ci-pic">
                                    <img src="img/classes/class-3.jpg" alt="" />
                                </div>
                                <div className="ci-text">
                                    <span>STRENGTH</span>
                                    <h5>Kettlebell power</h5>
                                    <a href="#"><i className="fa fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="class-item">
                                <div className="ci-pic">
                                    <img src="img/classes/class-4.jpg" alt="" />
                                </div>
                                <div className="ci-text">
                                    <span>Cardio</span>
                                    <h4>Indoor cycling</h4>
                                    <a href="#"><i className="fa fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="class-item">
                                <div className="ci-pic">
                                    <img src="img/classes/class-5.jpg" alt="" />
                                </div>
                                <div className="ci-text">
                                    <span>Training</span>
                                    <h4>Boxing</h4>
                                    <a href="#"><i className="fa fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ChoseUs Section End */}

            {/* Banner Section Begin */}
            {/* <section className="banner-section set-bg" data-setbg="img/banner-bg.jpg"> */}
            <section className="banner-section set-bg" style={{ backgroundImage: "url('img/banner-bg.jpg')" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="bs-text">
                                <h2>registration now to get more deals</h2>
                                <div className="bt-tips">Where health, beauty and fitness meet.</div>
                                <a href="#" className="primary-btn  btn-normal">Appointment</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Banner Section End */}

            {/* Pricing Section Begin */}
            <section className="pricing-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <span>Our Plan</span>
                                <h2>Choose your pricing plan</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-8">
                            <div className="ps-item">
                                <h3>Class drop-in</h3>
                                <div className="pi-price">
                                    <h2>$ 39.0</h2>
                                    <span>SINGLE CLASS</span>
                                </div>
                                <ul>
                                    <li>Free riding</li>
                                    <li>Unlimited equipments</li>
                                    <li>Personal trainer</li>
                                    <li>Weight losing classes</li>
                                    <li>Month to mouth</li>
                                    <li>No time restriction</li>
                                </ul>
                                <a href="#" className="primary-btn pricing-btn">Enroll now</a>
                                <a href="#" className="thumb-icon"><i className="fa fa-picture-o"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8">
                            <div className="ps-item">
                                <h3>12 Month unlimited</h3>
                                <div className="pi-price">
                                    <h2>$ 99.0</h2>
                                    <span>SINGLE CLASS</span>
                                </div>
                                <ul>
                                    <li>Free riding</li>
                                    <li>Unlimited equipments</li>
                                    <li>Personal trainer</li>
                                    <li>Weight losing classes</li>
                                    <li>Month to mouth</li>
                                    <li>No time restriction</li>
                                </ul>
                                <a href="#" className="primary-btn pricing-btn">Enroll now</a>
                                <a href="#" className="thumb-icon"><i className="fa fa-picture-o"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8">
                            <div className="ps-item">
                                <h3>6 Month unlimited</h3>
                                <div className="pi-price">
                                    <h2>$ 59.0</h2>
                                    <span>SINGLE CLASS</span>
                                </div>
                                <ul>
                                    <li>Free riding</li>
                                    <li>Unlimited equipments</li>
                                    <li>Personal trainer</li>
                                    <li>Weight losing classes</li>
                                    <li>Month to mouth</li>
                                    <li>No time restriction</li>
                                </ul>
                                <a href="#" className="primary-btn pricing-btn">Enroll now</a>
                                <a href="#" className="thumb-icon"><i className="fa fa-picture-o"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Pricing Section End */}

            {/* Gallery Section Begin */}
            <div className="gallery-section">
                <div className="gallery">
                    {/* <div className="grid-sizer"></div> */}
                    {/* <div className="gs-item grid-wide set-bg" style={{ backgroundImage: "url('img/gallery/gallery-1.jpg')" }}> */}
                    {galleryData.map((image) => {
                        return (
                            <div key={image.id} className={`gs-item set-bg ${image.isWide ? 'grid-wide' : ''}`} style={{ backgroundImage: `url('${image.src}')` }}>
                                {/* <a href="img/gallery/gallery-1.jpg" className="thumb-icon image-popup"><i className="fa fa-picture-o"></i></a> */}
                                <div className="thumb-icon image-popup" onClick={() => openModal(image.src)}>
                                    <i className="fa fa-picture-o"></i>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>

            {selectedImage && (
                <div className="image-modal-overlay" onClick={closeModal}>
                    <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
                        {/* THIS IS YOUR CLOSE BUTTON */}
                        <button className="modal-close-button" onClick={closeModal}>×</button>
                        <img src={selectedImage} alt="Enlarged gallery view" />
                    </div>
                </div>
            )}
            {/* Gallery Section End */}

            {/* Team Section Begin */}
            <section className="team-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="team-title">
                                <div className="section-title">
                                    <span>Our Team</span>
                                    <h2>TRAIN WITH EXPERTS</h2>
                                </div>
                                <a href="#" className="primary-btn btn-normal appoinment-btn">appointment</a>
                            </div>
                        </div>
                    </div>
                    <Slider {...testimonialSettings} className="row">
                        {[0, 1].map((groupIndex) => (
                            <>
                                <div key={groupIndex} className="ts-slider owl-carousel owl-loaded owl-drag">
                                    {[1, 2, 3].map((numOffset) => {
                                        const num = groupIndex * 3 + numOffset;
                                        return (
                                            <div className="col-lg-4" key={num}>
                                                <div className="ts-item set-bg" style={{ backgroundImage: `url('/img/team/team-${num}.jpg')` }}>
                                                    <div className="ts_text">
                                                        <h4>Athart Rachel</h4>
                                                        <span>Gym Trainer</span>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                                {/* <div className="owl-dots"><button role="button" className="owl-dot active"><span></span></button><button role="button" className="owl-dot"><span></span></button><button role="button" className="owl-dot"><span></span></button></div> */}
                            </>
                        ))}
                    </Slider>



                </div>
            </section>
            {/* Team Section End */}
        </>
    )
}

export default Home;