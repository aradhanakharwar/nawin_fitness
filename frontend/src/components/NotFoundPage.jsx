const NotFoundPage = () => {
    return (
        <div>
            {/* 404 Section Begin */}
            <section className="section-404">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-404">
                                <h1>404</h1>
                                <h3>Opps! This page Could Not Be Found!</h3>
                                <p>
                                    Sorry bit the page you are looking for does not exist, have
                                    been removed or name changed
                                </p>
                                <form action="#" className="search-404">
                                    <input type="text" placeholder="Enter your keyword" />
                                    <button type="submit">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </form>
                                <a href="/">
                                    <i className="fa fa-home"></i> Go back home
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* 404 Section End */}

            {/* Offcanvas Menu Section Begin */}
            <div className="offcanvas-menu-overlay"></div>
            <div className="offcanvas-menu-wrapper">
                <div className="canvas-close">
                    <i className="fa fa-close"></i>
                </div>
                <div className="canvas-search search-switch">
                    <i className="fa fa-search"></i>
                </div>
                <nav className="canvas-menu mobile-menu">
                    <ul>
                        <li>
                            <a href="./index.html">Home</a>
                        </li>
                        <li>
                            <a href="./about-us.html">About Us</a>
                        </li>
                        <li>
                            <a href="./classes.html">Classes</a>
                        </li>
                        <li>
                            <a href="./services.html">Services</a>
                        </li>
                        <li>
                            <a href="./team.html">Our Team</a>
                        </li>
                        <li>
                            <a href="#">Pages</a>
                            <ul className="dropdown">
                                <li>
                                    <a href="./about-us.html">About us</a>
                                </li>
                                <li>
                                    <a href="./class-timetable.html">Classes timetable</a>
                                </li>
                                <li>
                                    <a href="./bmi-calculator.html">Bmi calculate</a>
                                </li>
                                <li>
                                    <a href="./team.html">Our team</a>
                                </li>
                                <li>
                                    <a href="./gallery.html">Gallery</a>
                                </li>
                                <li>
                                    <a href="./blog.html">Our blog</a>
                                </li>
                                <li>
                                    <a href="./404.html">404</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="./contact.html">Contact</a>
                        </li>
                    </ul>
                </nav>
                <div id="mobile-menu-wrap"></div>
                <div className="canvas-social">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-youtube-play"></i></a>
                    <a href="#"><i className="fa fa-instagram"></i></a>
                </div>
            </div>
            {/* Offcanvas Menu Section End */}

            {/* ... */}
            {/* KEEP COPYING OTHER SECTIONS THE SAME WAY as JSX (see next section for automation tip) */}
            {/* ... */}

            {/* Footer */}
            <footer className="footer-section">
                <div className="container">
                    <div className="row">
                        {/* Footer Columns */}
                        <div className="col-lg-4">
                            <div className="fs-about">
                                <div className="fa-logo">
                                    <a href="#"><img src="img/logo.png" alt="logo" /></a>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore dolore magna aliqua
                                    endisse ultrices gravida lorem.
                                </p>
                                <div className="fa-social">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-youtube-play"></i></a>
                                    <a href="#"><i className="fa fa-instagram"></i></a>
                                    <a href="#"><i className="fa  fa-envelope-o"></i></a>
                                </div>
                            </div>
                        </div>
                        {/* Continue other footer widgets... */}
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="copyright-text">
                                <p>
                                    &copy; {new Date().getFullYear()} All rights reserved | This
                                    template is made with <i className="fa fa-heart"></i> by{" "}
                                    <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">
                                        Colorlib
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Search Modal */}
            <div className="search-model">
                <div className="h-100 d-flex align-items-center justify-content-center">
                    <div className="search-close-switch">+</div>
                    <form className="search-model-form">
                        <input type="text" id="search-input" placeholder="Search here....." />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
