import React, { useState } from "react";
import "./externalCSS/Navbar.css";

function Navbar({ onBookCallClick }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bord blur">
        <div className="container">
          <a className="logo icon-img-100" href="#">
            {/* <img src="/light/assets/imgs/logo-light.png" alt="logo" /> */}
          </a>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="/"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="rolling-text">Home</span>
                </a>
                {/* <div className="dropdown-menu">
                  <a className="dropdown-item" href="/light/home-main">
                    Main Home
                  </a>
                  <a
                    className="dropdown-item"
                    href="/light/home-startup-onepage"
                  >
                    Modern Startup
                  </a>
                  <a
                    className="dropdown-item"
                    href="/light/home-creative-agency"
                  >
                    Creative Agency
                  </a>
                  <a className="dropdown-item" href="/light/home-modern-agency">
                    Modern Agency
                  </a>
                  <a
                    className="dropdown-item"
                    href="/light/home-creative-portfolio"
                  >
                    Creative Portfolio
                  </a>
                  <a
                    className="dropdown-item"
                    href="/light/home-digital-agency"
                  >
                    Digital Agency
                  </a>
                  <a className="dropdown-item" href="/light/home-freelancer">
                    Freelancer
                  </a>
                  <a
                    className="dropdown-item"
                    href="/light/home-personal-vcard"
                  >
                    Personal vCard
                  </a>
                  <a
                    className="dropdown-item"
                    href="/light/home-minimal-portfolio"
                  >
                    Minimal Portfolio
                  </a>
                  <a
                    className="dropdown-item"
                    href="/light/home-asymmetric-portfolio"
                  >
                    Asymmetric Portfolio
                  </a>
                </div> */}
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link "
                  href="/light/page-about"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="rolling-text">About Us</span>
                </a>
                {/* <div className="dropdown-menu mega-menu">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="clumn mb-80">
                          <div className="title">
                            <h6 className="sub-title ls1 pb-20 bord-thin-bottom">
                              Portfolio Type
                            </h6>
                          </div>
                          <div className="links row">
                            <div className="col-lg-4">
                              <a
                                className="dropdown-item"
                                href="/light/portfolio-standard"
                              >
                                Standerd
                              </a>
                              <a
                                className="dropdown-item"
                                href="/light/portfolio-gallery"
                              >
                                Gallery
                              </a>
                              <a
                                className="dropdown-item"
                                href="/ight/portfolio-metro"
                              >
                                Metro
                              </a>
                            </div>
                            <div className="col-lg-4">
                              <a
                                className="dropdown-item"
                                href="/light/masonry"
                              >
                                Masonry
                              </a>
                              <a
                                className="dropdown-item"
                                href="/light/portfolio-caption-curso"
                              >
                                Caption Cursor
                              </a>
                              <a
                                className="dropdown-item"
                                href="/light/outline"
                              >
                                Outline
                              </a>
                            </div>
                            <div className="col-lg-4">
                              <a
                                className="dropdown-item"
                                href="/light/portfolio-parallax"
                              >
                                Parallax
                              </a>
                              <a
                                className="dropdown-item"
                                href="/light/portfolio-sticky"
                              >
                                Sticky
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="clumn">
                          <div className="title">
                            <h6 className="sub-title ls1 pb-20 bord-thin-bottom">
                              Showcases
                            </h6>
                          </div>
                          <div className="links row">
                            <div className="col-lg-4">
                              <a
                                className="dropdown-item"
                                href="/light/showcase-fullscreen"
                              >
                                Parallax Slider
                              </a>
                              <a
                                className="dropdown-item"
                                href="/light/showcase-carousel"
                              >
                                Showcase Carousel
                              </a>
                            </div>
                            <div className="col-lg-4">
                              <a
                                className="dropdown-item"
                                href="/light/showcase-half-slider"
                              >
                                Creative Slider
                              </a>
                              <a
                                className="dropdown-item"
                                href="/light/showcase-interactive-full"
                              >
                                Interactive Full
                              </a>
                            </div>
                            <div className="col-lg-4">
                              <a
                                className="dropdown-item"
                                href="/light/showcase-interactive-center"
                              >
                                Interactive Center
                              </a>
                              <a
                                className="dropdown-item"
                                href="/light/showcase-interactive-vertical"
                              >
                                Interactive Vertical
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="clumn">
                          <div className="title">
                            <h6 className="sub-title ls1 pb-20 bord-thin-bottom">
                              Portfolio Single
                            </h6>
                          </div>
                          <div className="links row">
                            <div className="col-lg-4">
                              <a
                                className="dropdown-item"
                                href="/light/project1"
                              >
                                project1
                              </a>
                              <a
                                className="dropdown-item"
                                href="/light/project2"
                              >
                                project2
                              </a>
                            </div>
                            <div className="col-lg-4">
                              <a
                                className="dropdown-item"
                                href="/light/project3"
                              >
                                project3
                              </a>
                              <a
                                className="dropdown-item"
                                href="/light/project4"
                              >
                                project4
                              </a>
                            </div>
                            <div className="col-lg-4">
                              <a
                                className="dropdown-item"
                                href="/light/project5"
                              >
                                project5
                              </a>
                              <a
                                className="dropdown-item"
                                href="/light/project6"
                              >
                                project6
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>  */}
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="rolling-text">Services</span>
                </a>
                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <a href="/light/page-services">
                      Web Design and Development
                      <i className="fas fa-angle-right icon-arrow"></i>
                    </a>
                    <ul className="dropdown-side">
                      <li>
                        <a
                          className="dropdown-item"
                          href="/light/page-services"
                        >
                          Web Design
                        </a>
                      </li>
                      {/* <li>
                        <a className="dropdown-item" href="/light/page-about2">
                          About Us 2
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/light/page-about3">
                          About Us 3
                        </a>
                      </li> */}
                    </ul>
                  </li>
                  <li className="dropdown-item">
                    <a href="/light/page-services">
                      Social Media Marketing
                      <i className="fas fa-angle-right icon-arrow"></i>
                    </a>
                    <ul className="dropdown-side">
                      <li>
                        <a
                          className="dropdown-item"
                          href="/light/page-services"
                        >
                          Social Media
                        </a>
                      </li>
                      {/* <li>
                        <a
                          className="dropdown-item"
                          href="/light/page-services2"
                        >
                          Services 2
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/light/page-services-details"
                        >
                          Services Details
                        </a>
                      </li> */}
                    </ul>
                  </li>
                  {/* <li className="dropdown-item">
                    <a href="#0">
                      Contact Us
                      <i className="fas fa-angle-right icon-arrow"></i>
                    </a>
                    <ul className="dropdown-side">
                      <li>
                        <a className="dropdown-item" href="/light/page-contact">
                          Contact Us 1
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/light/page-contact2"
                        >
                          Contact Us 2
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/light/page-contact3"
                        >
                          Contact Us 3
                        </a>
                      </li>
                    </ul>
                  </li> */}
                  <li>
                    <a className="dropdown-item" href="/light/page-team">
                      content Marketing
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/light/page-team-single">
                      Search Engine Optimization (SEO)
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item " href="/light/page-FAQS">
                      Pay-Per-Click Advertising (PPC)
                    </a>
                  </li>
                  {/* <li>
                    <a className="dropdown-item" href="/light/page-error-404">
                    Email Marketing
                    </a>
                  </li> */}
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link "
                  href="/light/blog-list2"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="rolling-text">Blogs</span>
                </a>

                {/* <div className="dropdown-menu"> */}
                  {/* <a className="dropdown-item" href="/light/blog-classic">
                    Blog Standerd
                  </a>
                  <a className="dropdown-item" href="/light/blog-list">
                    Blog List
                  </a> */}
                  {/* <a className="dropdown-item" href="/light/blog-list2">
                    Blog List 2
                  </a> */}
                  {/* <a className="dropdown-item" href="/light/blog-details">
                    Blog Details
                  </a> */}
                {/* </div> */}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/light/page-contact">
                  <span className="rolling-text">Contact Us</span>
                </a>
              </li>
            </ul>
            <div>
              <button
                className="butn butn-full butn-bord radius-30"
                onClick={onBookCallClick}
              >
                <span className="text">Book a call.</span>
              </button>
            </div>
          </div>

          {/* <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:-blue-700">
            Book a Free Call
          </button> */}

          {/* <div className="search-form">
            <div className="form-group">
              <input type="text" name="search" placeholder="Search" />
              <button>
                <span className="pe-7s-search"></span>
              </button>
            </div>
            <div className="search-icon">
              <span className="pe-7s-search open-search"></span>
              <span className="pe-7s-close close-search"></span>
            </div>
          </div> */}
          <div className="topnav">
            <div className="menu-icon cursor-pointer">
              <span className="icon ti-align-right"></span>
            </div>
          </div>
        </div>
      </nav>

      <div className="hamenu">
        <div className="logo icon-img-100">
          <img src="/light/assets/imgs/logo-light.png" alt="" />
        </div>
        <div className="close-menu cursor-pointer ti-close"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div className="menu-text">
                <div className="text">
                  <h2>Menu</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="menu-links">
                <ul className="main-menu rest">
                  <li>
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <span className="fill-text" data-text="Home">
                          Home
                        </span>
                        <i></i>
                      </div>
                    </div>
                    {/* <div className="sub-menu">
                      <ul>
                        <li>
                          <a href="/light/home-main" className="sub-link">
                            Main Home 
                          </a>
                        </li>
                        <li>
                          <a
                            href="/light/home-startup-onepage"
                            className="sub-link"
                          >
                            Modern Startup
                          </a>
                        </li>
                        <li>
                          <a
                            href="/light/home-creative-agency"
                            className="sub-link"
                          >
                            Creative Agency
                          </a>
                        </li>
                        <li>
                          <a
                            href="/light/home-modern-agency"
                            className="sub-link"
                          >
                            Modern Agency
                          </a>
                        </li>
                        <li>
                          <a
                            href="/light/home-creative-portfolio"
                            className="sub-link"
                          >
                            Creative Portfolio
                          </a>
                        </li>
                        <li>
                          <a
                            href="/light/home-digital-agency"
                            className="sub-link"
                          >
                            Digital Agency
                          </a>
                        </li>
                        <li>
                          <a href="/light/home-freelancer" className="sub-link">
                            Freelancer
                          </a>
                        </li>
                        <li>
                          <a
                            href="/light/home-personal-vcard"
                            className="sub-link"
                          >
                            Personal vCard
                          </a>
                        </li>
                        <li>
                          <a
                            href="/light/home-minimal-portfolio"
                            className="sub-link"
                          >
                            Minimal Portfolio
                          </a>
                        </li>
                        <li>
                          <a
                            href="/light/home-asymmetric-portfolio"
                            className="sub-link"
                          >
                            Asymmetric Portfolio
                          </a>
                        </li>
                      </ul>
                    </div> */}
                  </li>
                  <li>
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <span className="fill-text" data-text="About US">
                          About US
                        </span>
                        <i></i>
                      </div>
                    </div>
                    {/* <div className="sub-menu no-bord">
                      <ul>
                        <li>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <span className="fill-text" data-text="About Us">
                                About Us
                              </span>
                              <i></i>
                            </div>
                          </div>
                          <div className="sub-menu2">
                            <ul>
                              <li>
                                <a
                                  href="/light/page-about"
                                  className="sub-link"
                                >
                                  About Us v1
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/light/page-about2"
                                  className="sub-link"
                                >
                                  About Us v2
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/light/page-about3"
                                  className="sub-link"
                                >
                                  About Us v3
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <span className="fill-text" data-text="Services">
                                Services
                              </span>
                              <i></i>
                            </div>
                          </div>
                          <div className="sub-menu2">
                            <ul>
                              <li>
                                <a
                                  href="/light/page-services"
                                  className="sub-link"
                                >
                                  Services v1
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/light/page-services2"
                                  className="sub-link"
                                >
                                  Services v2
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/light/page-services-details"
                                  className="sub-link"
                                >
                                  Services Details
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <span className="fill-text" data-text="Contact">
                                Contact
                              </span>
                              <i></i>
                            </div>
                          </div>
                          <div className="sub-menu2">
                            <ul>
                              <li>
                                <a
                                  href="/light/page-contact"
                                  className="sub-link"
                                >
                                  Contact v1
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/light/page-contact2"
                                  className="sub-link"
                                >
                                  Contact v2
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/light/page-contact3"
                                  className="sub-link"
                                >
                                  Contact v3
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <span className="fill-text" data-text="Team">
                                Team
                              </span>
                              <i></i>
                            </div>
                          </div>
                          <div className="sub-menu2">
                            <ul>
                              <li>
                                <a href="/light/page-team" className="sub-link">
                                  Our Team
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/light/page-team-single"
                                  className="sub-link"
                                >
                                  Team Details
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <span className="fill-text" data-text="Others">
                                Others
                              </span>
                              <i></i>
                            </div>
                          </div>
                          <div className="sub-menu2">
                            <ul>
                              <li>
                                <a href="/light/page-FAQS" className="sub-link">
                                  FAQS
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/light/page-error-404"
                                  className="sub-link"
                                >
                                  Error 404
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div> */}
                  </li>
                  <li>
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <span className="fill-text" data-text="Services">
                          Services
                        </span>
                        <i></i>
                      </div>
                    </div>
                    {/* <div className="sub-menu no-bord">
                      <ul>
                        <li>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <span
                                className="fill-text"
                                data-text="Portfolio Type"
                              >
                                Portfolio Type
                              </span>{' '}
                              <i></i>
                            </div>
                          </div>
                          <div className="sub-menu2">
                            <ul>
                              <li>
                                <a
                                  href="/light/portfolio-standard"
                                  className="sub-link"
                                >
                                  Standerd
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/light/portfolio-gallery"
                                  className="sub-link"
                                >
                                  Gallery
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/ight/portfolio-metro"
                                  className="sub-link"
                                >
                                  Metro
                                </a>
                              </li>
                              <li>
                                <a href="/light/masonry" className="sub-link">
                                  Masonry
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/light/portfolio-caption-curso"
                                  className="sub-link"
                                >
                                  Caption Cursor
                                </a>
                              </li>
                              <li>
                                <a href="/light/outline" className="sub-link">
                                  Outline
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/light/portfolio-parallax"
                                  className="sub-link"
                                >
                                  Parallax
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/light/portfolio-sticky"
                                  className="sub-link"
                                >
                                  Sticky
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <span className="fill-text" data-text="Showcases">
                                Showcases
                              </span>{' '}
                              <i></i>
                            </div>
                          </div>
                          <div className="sub-menu2">
                            <ul>
                              <li>
                                <a
                                  href="/light/showcase-fullscreen"
                                  className="sub-link"
                                >
                                  Parallax Slider
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/light/showcase-carousel"
                                  className="sub-link"
                                >
                                  Showcase Carousel
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/light/showcase-half-slider"
                                  className="sub-link"
                                >
                                  Creative Slider
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/light/showcase-interactive-full"
                                  className="sub-link"
                                >
                                  Interactive Full
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/light/showcase-interactive-center"
                                  className="sub-link"
                                >
                                  Interactive Center
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/light/showcase-interactive-vertical"
                                  className="sub-link"
                                >
                                  Interactive Vertical
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <div className="link cursor-pointer sub-dmenu">
                              <span
                                className="fill-text"
                                data-text="Portfolio Single"
                              >
                                Portfolio Single
                              </span>
                              <i></i>
                            </div>
                          </div>
                          <div className="sub-menu2">
                            <ul>
                              <li>
                                <a href="/light/project1" className="sub-link">
                                  project1
                                </a>
                              </li>
                              <li>
                                <a href="/light/project2" className="sub-link">
                                  project2
                                </a>
                              </li>
                              <li>
                                <a href="/light/project3" className="sub-link">
                                  project3
                                </a>
                              </li>
                              <li>
                                <a href="/light/project4" className="sub-link">
                                  project4
                                </a>
                              </li>
                              <li>
                                <a href="/light/project5" className="sub-link">
                                  project5
                                </a>
                              </li>
                              <li>
                                <a href="/light/project6" className="sub-link">
                                  project6
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div> */}
                  </li>
                  <li>
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <span className="fill-text" data-text="Blogs">
                          Blogs
                        </span>
                        <i></i>
                      </div>
                    </div>
                    <div className="sub-menu">
                      <ul>
                        {/* <li>
                          <a className="sub-link" href="/light/blog-classic">
                            Standard
                          </a>
                        </li>
                        <li>
                          <a className="sub-link" href="/light/blog-list">
                            Blog List
                          </a>
                        </li> */}
                        <li>
                          <a className="sub-link" href="/light/blog-list2">
                            Blog List 2
                          </a>
                        </li>
                        {/* <li>
                          <a className="sub-link" href="/light/blog-details">
                            Blog Details
                          </a>
                        </li> */}
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <a href="/light/page-contact3" className="link">
                        <span className="fill-text" data-text="Contact Us">
                          Contact Us
                        </span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="cont-info">
                <div className="item mb-50">
                  <h6 className="sub-title mb-15 opacity-7">Address</h6>
                  <h5>
                    Saraswati Vihar <br />
                    Gurgaon, Haryana Haryana
                  </h5>
                </div>
                {/* <div className="item mb-50">
                  <h6 className="sub-title mb-15 opacity-7">Social Media</h6>
                  <ul className="rest social-text">
                    <li className="mb-10">
                      <a href="#0" className="hover-this">
                        <span className="hover-anim">Facebook</span>
                      </a>
                    </li>
                    <li className="mb-10">
                      <a href="#0" className="hover-this">
                        <span className="hover-anim">Twitter</span>
                      </a>
                    </li>
                    <li className="mb-10">
                      <a href="#0" className="hover-this">
                        <span className="hover-anim">LinkedIn</span>
                      </a>
                    </li>
                    <li>
                      <a href="#0" className="hover-this">
                        <span className="hover-anim">Instagram</span>
                      </a>
                    </li>
                  </ul>
                </div> */}
                <div className="item mb-40">
                  <h6 className="sub-title mb-15 opacity-7">Contact Us</h6>
                  <h5>
                    <a href="#0">TRIPLE R CONSULTING </a>
                  </h5>

                  <h5 className="underline mt-10">
                    <a href="#0">+91 7018324802</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
