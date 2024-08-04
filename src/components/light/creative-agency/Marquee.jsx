import React from 'react';

function Marquee() {
  return (
    <section className="marquee bord-thin-bottom pt-30 pb-30 o-hidden">
      <div className="container-fluid">
        <div className="main-marq md-text text-u">
          <div className="slide-har st1 slideIn 0.5s ease-out forwards">
            <div className="box non-strok">
              <div className="item">
                <h4 className="d-flex align-items-center fw-600" style={{fontWeight:"900px"}}>
                Social <span className='fw-100'> -Media</span>
                  <span className="fz-50 ml-50 stroke icon">*</span>
                </h4>
              </div>
              <div className="item">
                <h4 className="d-flex align-items-center fw-600">
                Web <span className='fw-100'> -Development</span>
                  <span className="fz-50 ml-50 stroke icon">*</span>
                </h4>
              </div>
              <div className="item">
                <h4 className="d-flex align-items-center fw-600">
                Digital <span className='fw-100'> -Marketing</span>
                  <span className="fz-50 ml-50 stroke icon">*</span>
                </h4>
              </div>
              <div className="item">
                <h4 className="d-flex align-items-center fw-600">
                Content  <span className='fw-100'> -Marketing</span>
                  <span className="fz-50 ml-50 stroke icon">*</span>
                </h4>
              </div>
              <div className="item">
                <h4 className="d-flex align-items-center fw-600">
                E-mail <span className='fw-100'> -Marketing</span>
                  <span className="fz-50 ml-50 stroke icon">*</span>
                </h4>
              </div>
            </div>
            <div className="box non-strok">
              <div className="item">
                <h4 className="d-flex align-items-center fw-600">
                  <span>  </span>
                  <span className="fz-50 ml-50 stroke icon"></span>
                </h4>
              </div>
              <div className="item">
                <h4 className="d-flex align-items-center fw-600">
                Pay-Per-Click <span className='fw-100'> -Advertising </span>
                  <span className="fz-50 ml-50 stroke icon">*</span>
                </h4>
              </div>
              <div className="item">
                <h4 className="d-flex align-items-center fw-600">
                Search Engine <span className='fw-100'>  -Optimization</span>
                  <span className="fz-50 ml-50 stroke icon">*</span>
                </h4>
              </div>
              <div className="item">
                <h4 className="d-flex align-items-center fw-600">
                Influencer <span className='fw-100'> -Marketing</span>
                  <span className="fz-50 ml-50 stroke icon">*</span>
                </h4>
              </div>
              <div className="item">
                <h4 className="d-flex align-items-center fw-600">
                E-mail<span className='fw-100'> -Marketing</span>
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
