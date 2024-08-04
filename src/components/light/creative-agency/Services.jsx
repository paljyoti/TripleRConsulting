import React from "react";
import Slider from "react-slick";
import data from "../../../l-data/services.json";
import './externalCSS/service.css'

function Services() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="services-boxs section-padding pb-0 pt-50">
      <div className="container">
        <div className="sec-head mb-80">
          <h6
            className="sub-title  mb-25"
            style={{ fontSize: "30px",color:"#7fff00"}}
          >
            Our Services
          </h6>
          <div className="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 className="fw-200 text-u ls1">
              What We <span className=" fw-600">Offer</span>
            </h2>
            {/* <div className="ml-auto">
                <a href="/light/page-services" className="go-more">
                  <span className="text">View all services</span>
                  <span className="icon ti-arrow-top-right"></span>
                </a>
              </div> */}
          </div>
        </div>
        <div className="row" style={{ textAlign: "justify"}}>
          <Slider {...settings}>
            {data.map((item, i) => (
              <div
                key={i}
                className="item-box"
                style={{ backgroundColor: "#f3f6f4", padding: "20px" }}
              >
                <div className="icon mb-40 opacity-5">
                  <img src={item.img} alt="" />
                </div>
                <h4 className="mb-15 text-u" >
                  {item.title.split(" ")[0]} <br /> {item.title.split(" ")[1]}
                </h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Services;
