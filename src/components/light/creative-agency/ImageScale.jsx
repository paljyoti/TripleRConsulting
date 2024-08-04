'use client';

import React from 'react';

function ImageScale() {
  return (
    <section className="img-scale">
      <div className="image" data-overlay-dark="4">
        <div className="img">
          <img
            id="grow"
            src="/light/assets/imgs/background/2.jpg"
            data-speed="0.2"
            data-lag="0"
            alt=""
          />
        </div>
        <div className="text-u text-center ontop">
          <h2 className="fz-70 fw-600">
          Ready to take your <span className="">Business</span> to the next level?  <br />
            <span className="fw-300">  </span>
          </h2>
        </div>
      </div>
    </section>
  );
}

export default ImageScale;
