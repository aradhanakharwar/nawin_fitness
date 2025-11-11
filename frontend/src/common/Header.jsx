import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <>
            {/* Offcanvas Menu Section */}
            <div
                className={`offcanvas-menu-overlay ${menuOpen ? "active" : ""}`}
                onClick={() => setMenuOpen(false)}
            ></div>

            <div
                className={`offcanvas-menu-wrapper ${menuOpen ? "show-offcanvas-menu-wrapper" : ""
                    }`}
            >
                <div className="canvas-close" onClick={() => setMenuOpen(false)}>
                    <i className="fa fa-close"></i>
                </div>

                <div className="canvas-search search-switch">
                    <i className="fa fa-search"></i>
                </div>

                <nav className="canvas-menu mobile-menu">
                    <ul>
                        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                        <li><Link to="/about-us" onClick={() => setMenuOpen(false)}>About Us</Link></li>
                        <li><Link to="/classes" onClick={() => setMenuOpen(false)}>Classes</Link></li>
                        <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
                        <li>
                            <button
                                type="button"
                                className="dropdown-toggle-btn"
                                onClick={toggleDropdown}
                            >
                                Pages <i className={`fa fa-caret-${dropdownOpen ? "down" : "right"}`}></i>
                            </button>
                            <ul className={`dropdown ${dropdownOpen ? "show" : ""}`}>
                                <li><Link to="/about-us" onClick={() => setMenuOpen(false)}>About Us</Link></li>
                                <li><Link to="/classes" onClick={() => setMenuOpen(false)}>Classes Timetable</Link></li>
                                <li><Link to="/bmi-calculator" onClick={() => setMenuOpen(false)}>BMI Calculator</Link></li>
                                <li><Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link></li>
                                <li><Link to="/blogs" onClick={() => setMenuOpen(false)}>Our Blog</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                    </ul>
                </nav>

                <div className="canvas-social">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-youtube-play"></i></a>
                    <a href="#"><i className="fa fa-instagram"></i></a>
                </div>
            </div>

            {/* Header Section */}
            <header className="header-section">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        {/* Logo */}
                        <div className="col-lg-3">
                            <div className="logo">
                                <Link to="/">
                                    <img src="img/logo.png" alt="Logo" />
                                </Link>
                            </div>
                        </div>

                        {/* Navigation Menu */}
                        <div className="col-lg-6">
                            <nav className="nav-menu">
                                <ul>
                                    <li className="active">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/about-us">About Us</Link>
                                    </li>
                                    <li>
                                        <Link to="/classes">Classes</Link>
                                    </li>
                                    <li>
                                        <Link to="/services">Services</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Pages</Link>
                                        <ul className="dropdown">
                                            <li><Link to="/about-us">About us</Link></li>
                                            <li><Link to="/classes">Classes timetable</Link></li>
                                            <li><Link to="/bmi-calculator">Bmi calculate</Link></li>
                                            <li><Link to="/gallery">Gallery</Link></li>
                                            <li><Link to="/blogs">Our blog</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        {/* Social & Search */}
                        <div className="col-lg-3">
                            <div className="top-option">
                                <div className="to-search search-switch">
                                    <i className="fa fa-search"></i>
                                </div>
                                <div className="to-social">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-youtube-play"></i></a>
                                    <a href="#"><i className="fa fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className="canvas-open" onClick={() => setMenuOpen(true)}>
                        <i className="fa fa-bars"></i>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
















//old code without responsive tab for mobile screens
// import React from "react";
// import { Link } from "react-router-dom";

// const Header = () => {

//     return (
//         <>
//             {/* <div id="preloder">
//                 <div className="loader"></div>
//             </div> */}

//             {/* Offcanvas Menu Section Begin */}
//             <div className="offcanvas-menu-overlay"></div>
//             <div className="offcanvas-menu-wrapper">
//                 <div className="canvas-close">
//                     <i className="fa fa-close"></i>
//                 </div>
//                 <div className="canvas-search search-switch">
//                     <i className="fa fa-search"></i>
//                 </div>
//                 <nav className="canvas-menu mobile-menu">
//                     <ul>
//                         <li><a href="/">Home</a></li>
//                         <li><a href="/about-us">About Us</a></li>
//                         <li><a href="./classes.html">Classes</a></li>
//                         <li><a href="./services.html">Services</a></li>
//                         <li><a href="./team.html">Our Team</a></li>
//                         <li><a href="#">Pages</a>
//                             <ul className="dropdown">
//                                 <li><a href="/about-us">About us</a></li>
//                                 <li><a href="./class-timetable.html">Classes timetable</a></li>
//                                 <li><a href="./bmi-calculator.html">Bmi calculate</a></li>
//                                 <li><a href="./team.html">Our team</a></li>
//                                 <li><a href="./gallery.html">Gallery</a></li>
//                                 <li><a href="./blog.html">Our blog</a></li>
//                                 <li><a href="./404.html">404</a></li>
//                             </ul>
//                         </li>
//                         <li><a href="./contact.html">Contact</a></li>
//                     </ul>
//                 </nav>
//                 <div id="mobile-menu-wrap"></div>
//                 <div className="canvas-social">
//                     <a href="#"><i className="fa fa-facebook"></i></a>
//                     <a href="#"><i className="fa fa-twitter"></i></a>
//                     <a href="#"><i className="fa fa-youtube-play"></i></a>
//                     <a href="#"><i className="fa fa-instagram"></i></a>
//                 </div>
//             </div>
//             {/* Offcanvas Menu Section End */}

//             {/* Header Section Begin */}
//             <header className="header-section">
//                 <div className="container-fluid">
//                     <div className="row">
//                         <div className="col-lg-3">
//                             <div className="logo">
//                                 <a href="/">
//                                     <img src="img/logo.png" alt="" />
//                                 </a>
//                             </div>
//                         </div>
//                         <div className="col-lg-6">
//                             <nav className="nav-menu">
//                                 <ul>
//                                     <li className="active"><a href="/">Home</a></li>
//                                     {/* <li><a href="/about-us">About Us</a></li> */}
//                                     <li><Link to="/about-us">About Us</Link></li>
//                                     <li><Link to="/classes">Classes</Link></li>
//                                     <li><Link to="/services">Services</Link></li>
//                                     {/* <li><Link to="./team.html">Our Team</Link></li> */}
//                                     <li><Link to="">Pages</Link>
//                                         <ul className="dropdown">
//                                             <li><Link to="/about-us">About us</Link></li>
//                                             <li><Link to="/classes">Classes timetable</Link></li>
//                                             <li><Link to="/bmi-calculator">Bmi calculate</Link></li>
//                                             {/* <li><Link to="./team.html">Our team</Link></li> */}
//                                             <li><Link to="/gallery">Gallery</Link></li>
//                                             <li><Link to="/blogs">Our blog</Link></li>
//                                             {/* <li><Link to="./404.html">404</Link></li> */}
//                                         </ul>
//                                     </li>
//                                     <li><Link to="/contact">Contact</Link></li>
//                                 </ul>
//                             </nav>
//                         </div>
//                         <div className="col-lg-3">
//                             <div className="top-option">
//                                 <div className="to-search search-switch">
//                                     <i className="fa fa-search"></i>
//                                 </div>
//                                 <div className="to-social">
//                                     <a href="#"><i className="fa fa-facebook"></i></a>
//                                     <a href="#"><i className="fa fa-twitter"></i></a>
//                                     <a href="#"><i className="fa fa-youtube-play"></i></a>
//                                     <a href="#"><i className="fa fa-instagram"></i></a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="canvas-open">
//                         <i className="fa fa-bars"></i>
//                     </div>
//                 </div>
//             </header>
//             {/* Header End */}
//         </>
//     );
// };

// export default Header;