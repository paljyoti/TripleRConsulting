"use client";
import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import "./externalCSS/Navbar.css";
import { useNavigate } from "react-router-dom";
function Header() {

  const navigate = useNavigate();
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(".header", { y: 200 }, { y: 0 }, "+=2.5");
    tl.fromTo(
      ".header .container",
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      "-=0"
    );

    // Cleanup function
    return () => tl.kill();
  }, []);
  return (
    <div className="backg  " style={{ backgroundImage: "url('')" }}>
      <div className="header crev-agency-header  ">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 left-clumn">
              <div className="img">
                <img
                  src="/light/assets/imgs/intro/coworkers-sitting-with-blueprint.jpg "
                  alt=""
                />
              </div>
              <div>
                {/* <img src="/light/assets/imgs/intro/quotcuttingedge-office-sleek-modern-workspacequot_1168612-280323.jpg" alt="" /> */}
                {/* <h2 className="fz-80">
                6K<span className="fz-40">+</span>
              </h2>
              <h6 className="sub-title">Satisfied Clients</h6> */}
              </div>
            </div>
            <div className="col-lg-6 valign center-clumn">
              <div>
                <div className="caption main-bg">
                  <h4 className="text-center">Welcome To</h4>
                  <h4 className="text-center" style={{ fontWeight: "900" }}>
                    TRIPLE <span className="project-title"> R </span> CONSULTING
                  </h4>
                  <h4 className=" text-center">We Create, Manage & Grow </h4>
                  <h4 className="text-center">Your Online Presence</h4>
                  {/* <h1 className="text-xl">CONSULTING </h1> */}
                </div>
                <div className="row justify-content-center mt-30">
                  <div className="col-md-11">
                    <p className="" style={{ textAlign: "justify"}}>
                      We Transform your business with our all-in-one digital
                      marketing, web development and social media services. Our
                      team of experts is here to help you harness the power of
                      online marketing to grow your business. From SEO to
                      influencer marketing, we provide tailored strategies that
                      deliver results.
                    </p>
                  </div>
                  <button
                    className="h-16 w-16"
                    
                    style={{
                      height: "50px",
                      width: "200px",
                      borderRadius: "40px",
                      marginTop: "30px",
  
                    }}
                    onClick={()=>{navigate("/light/page-about")}}
                    >
                    Read More
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-3 right-clumn">
              <div className="">
                <div className="w-full relative ">
                  {/* <img src="/light/assets/imgs/intro/person-front-computer-working-html.jpg" alt="" />   */}
                  {/* <img src="/light/assets/imgs/intro/Untitled_design__1_-removebg-preview.png" className="absolute bottom-0 right-0" alt="" /> */}
                  {/* <a href="https://youtu.be/AzwC6umvd1s" className="vid">
                      <div className="rotate-circle fz-30 text-u">
                        <svg className="textcircle" viewBox="0 0 500 500">
                          <defs>
                            <path
                              id="textcircle"
                              d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                            ></path>
                          </defs>
                          <text>
                            <textPath xlinkHref="#textcircle" textLength="900">
                              Explore More - Explore More -
                            </textPath>
                          </text>
                        </svg>
                      </div>
                  <div className="icon">
                    <i className="fas fa-play"></i>
                  </div>
                </a> */}
                </div>
              </div>
              <div className="img">
                {/* <img src="/light/assets/imgs/intro/Untitled_design__1_-removebg-preview.png" className="" alt="" /> */}
              </div>
              <div className="img">
                {/* <img src="/light/assets/imgs/intro/03.jpg" alt="" /> */}
                <img
                  src="/light/assets/imgs/intro/close-up-young-colleagues-having-meeting.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
