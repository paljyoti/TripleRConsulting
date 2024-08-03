import React from 'react';

function Marquee() {
  return (
    <section className="marquee bord-thin-bottom pt-30 pb-30 o-hidden">
      <div className="container-fluid">
        <div className="main-marq md-text text-u">
          <div className="slide-har st1 slideIn 0.5s ease-out forwards">
            <div className="box non-strok">
              <div className="item">
                <h4 className="d-flex align-items-center">
                  <span>Social Media</span>
                  <span className="fz-50 ml-50 stroke icon">*</span>
                </h4>
              </div>
              <div className="item">
                <h4 className="d-flex align-items-center">
                  <span>Web Development</span>
                  <span className="fz-50 ml-50 stroke icon">*</span>
                </h4>
              </div>
              <div className="item">
                <h4 className="d-flex align-items-center">
                  <span>Digital Marketing</span>
                  <span className="fz-50 ml-50 stroke icon">*</span>
                </h4>
              </div>
              <div className="item">
                <h4 className="d-flex align-items-center">
                  <span>Content Marketing</span>
                  <span className="fz-50 ml-50 stroke icon">*</span>
                </h4>
              </div>
              <div className="item">
                <h4 className="d-flex align-items-center">
                  <span>E-mail Marketing</span>
                  <span className="fz-50 ml-50 stroke icon">*</span>
                </h4>
              </div>
            </div>
            <div className="box non-strok">
              <div className="item">
                <h4 className="d-flex align-items-center">
                  <span>  </span>
                  <span className="fz-50 ml-50 stroke icon"></span>
                </h4>
              </div>
              <div className="item">
                <h4 className="d-flex align-items-center">
                  <span>Pay-Per-Click Advertising </span>
                  <span className="fz-50 ml-50 stroke icon">*</span>
                </h4>
              </div>
              <div className="item">
                <h4 className="d-flex align-items-center">
                  <span> Search Engine Optimization</span>
                  <span className="fz-50 ml-50 stroke icon">*</span>
                </h4>
              </div>
              <div className="item">
                <h4 className="d-flex align-items-center">
                  <span>Influencer Marketing</span>
                  <span className="fz-50 ml-50 stroke icon">*</span>
                </h4>
              </div>
              <div className="item">
                <h4 className="d-flex align-items-center">
                  <span>E-mail Marketing</span>
                  <span className="fz-50 ml-50 stroke icon">*</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Marquee;
