import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutUsPage = () => {
  const testimonialSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };
  return (
    <div>
      {/* Breadcrumb Section Begin */}
      <section className="breadcrumb-section set-bg" style={{ backgroundImage: "url('/img/breadcrumb-bg.jpg')" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb-text">
                <h2>About us</h2>
                <div className="bt-option">
                  <a href="./index.html">Home</a>
                  <span>About</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Section End */}

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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs-item">
                <span className="flaticon-033-juice"></span>
                <h4>Healthy nutrition plan</h4>
                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs-item">
                <span className="flaticon-002-dumbell"></span>
                <h4>Professional training plan</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs-item">
                <span className="flaticon-014-heart-beat"></span>
                <h4>Unique to your needs</h4>
                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ChoseUs Section End */}

      {/* About US Section Begin */}
      <section className="aboutus-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 p-0">
              <div className="about-video set-bg" style={{ backgroundImage: "url('/img/about-us.jpg')" }}>
                <a href="https://www.youtube.com/watch?v=EzKkl64rRbM" className="play-btn video-popup"><i className="fa fa-caret-right"></i></a>
              </div>
            </div>
            <div className="col-lg-6 p-0">
              <div className="about-text">
                <div className="section-title">
                  <span>About Us</span>
                  <h2>What we have done</h2>
                </div>
                <div className="at-desc">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. aliquip ex ea commodo consequat sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
                <div className="about-bar">
                  <div className="ab-item">
                    <p>Body building</p>
                    <div id="bar1" className="barfiller">
                      <span className="fill" data-percentage="80"></span>
                      <div className="tipWrap">
                        <span className="tip"></span>
                      </div>
                    </div>
                  </div>
                  <div className="ab-item">
                    <p>Training</p>
                    <div id="bar2" className="barfiller">
                      <span className="fill" data-percentage="85"></span>
                      <div className="tipWrap">
                        <span className="tip"></span>
                      </div>
                    </div>
                  </div>
                  <div className="ab-item">
                    <p>Fitness</p>
                    <div id="bar3" className="barfiller">
                      <span className="fill" data-percentage="75"></span>
                      <div className="tipWrap">
                        <span className="tip"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About US Section End */}

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
          <div className="row">
            <div className="ts-slider owl-carousel">
              <div className="col-lg-4">
                <div className="ts-item set-bg" style={{ backgroundImage: "url('/img/team/team-1.jpg')" }}>
                  <div className="ts_text">
                    <h4>Athart Rachel</h4>
                    <span>Gym Trainer</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="ts-item set-bg" style={{ backgroundImage: "url('/img/team/team-2.jpg')" }}>
                  <div className="ts_text">
                    <h4>Athart Rachel</h4>
                    <span>Gym Trainer</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="ts-item set-bg" style={{ backgroundImage: "url('/img/team/team-3.jpg')" }}>
                  <div className="ts_text">
                    <h4>Athart Rachel</h4>
                    <span>Gym Trainer</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="ts-item set-bg" style={{ backgroundImage: "url('/img/team/team-4.jpg')" }}>
                  <div className="ts_text">
                    <h4>Athart Rachel</h4>
                    <span>Gym Trainer</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="ts-item set-bg" style={{ backgroundImage: "url('/img/team/team-5.jpg')" }}>
                  <div className="ts_text">
                    <h4>Athart Rachel</h4>
                    <span>Gym Trainer</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="ts-item set-bg" style={{ backgroundImage: "url('/img/team/team-6.jpg')" }}>
                  <div className="ts_text">
                    <h4>Athart Rachel</h4>
                    <span>Gym Trainer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Section End */}

      {/* Banner Section Begin */}
      <section className="banner-section set-bg" style={{ backgroundImage: "url('/img/banner-bg.jpg')" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="bs-text">
                <h2>registration now to get more deals</h2>
                <div className="bt-tips">Where health, beauty and fitness meet.</div>
                <a href="#" className="primary-btn btn-normal">Appointment</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Banner Section End */}


      {/* Testimonial Section Begin */}
      <section className="testimonial-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>Testimonial</span>
                <h2>Our client says</h2>
              </div>
            </div>
          </div>
          <Slider {...testimonialSettings} className="ts_slider">
            {[1, 2].map((num) => (
              <div className="ts_item" key={num}>
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <div className="ti_pic flex justify-center">
                      <img src={`/img/testimonial/testimonial-${num}.jpg`} alt="" />
                    </div>
                    <div className="ti_text">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt<br /> ut labore et dolore magna aliqua...</p>
                      <h5>Marshmello Gomez</h5>
                      <div className="tt-rating">
                        {[...Array(5)].map((_, i) => (
                          <i className="fa fa-star" key={i}></i>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      {/* Testimonial Section End */}




      {/* <section class="testimonial-section spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title">
                <span>Testimonial</span>
                <h2>Our cilent say</h2>
              </div>
            </div>
          </div>
          <Slider {...testimonialSettings} class="ts_slider owl-carousel">
            {[1, 2].map((num) => (
              <div class="ts_item" key={num}>
                <div class="row">
                  <div class="col-lg-12 text-center">
                    <div class="ti_pic">
                      <img src={`/img/testimonial/testimonial-${num}.jpg`} alt="" />
                    </div>
                    <div class="ti_text">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt<br /> ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                        gravida. Risus commodo<br /> viverra maecenas accumsan lacus vel facilisis.</p>
                      <h5>Marshmello Gomez</h5>
                      <div class="tt-rating">
                        {[...Array(5)].map((_, i) => (
                          <i className="fa fa-star" key={i}></i>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section> */}



      {/* Get In Touch Section Begin */}
      <div className="gettouch-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="gt-text">
                <i className="fa fa-map-marker"></i>
                <p>333 Middle Winchendon Rd, Rindge,<br /> NH 03461</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="gt-text">
                <i className="fa fa-mobile"></i>
                <ul>
                  <li>125-711-811</li>
                  <li>125-668-886</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="gt-text email">
                <i className="fa fa-envelope"></i>
                <p>Support.gymcenter@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Get In Touch Section End */}
    </div>
  );
};

export default AboutUsPage;
