import { Helmet } from "react-helmet";
import Lines from "../../components/light/common/Lines";
import ProgressScroll from "../../components/light/common/ProgressScroll";
import Cursor from "../../components/light/common/cusor";
import LoadingScreen from "../../components/light/common/loader";
import Brands from "../../components/light/creative-agency/Brands";
import Footer from "../../components/light/creative-agency/Footer";
import Header from "../../components/light/creative-agency/Header";
import ImageScale from "../../components/light/creative-agency/ImageScale";
import Marquee from "../../components/light/creative-agency/Marquee";
import Navbar from "../../components/light/creative-agency/Navbar";
import Services from "../../components/light/creative-agency/Services";
import Skills from "../../components/light/creative-agency/Skills";
import Testimonials from "../../components/light/creative-agency/Testimonials";
// import Blog from '../../components/light/creative-agency/Blog';
// import Portfolio from '../../components/light/creative-agency/Portfolio';
// import Numbers from '../../components/light/creative-agency/Numbers';
import BooknowPopup from "../../components/light/creative-agency/BooknowPopup";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useState } from "react";

export default function LHomeCreativeAgency() {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <>
      <Helmet>
        <title>Digital marketing</title>
        <link rel="icon" href="/light/imgs/favicon.ico" />
        <link rel="shortcut icon" href="/light/imgs/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          href="/light/assets/css/plugins.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/light/assets/css/style.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/light/assets/css/satoshi.css"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght..200;300;400;500;600;700&display=swap"
        />
        <script src="/light/assets/js/scripts.js"></script>
        <script src="/light/assets/js/smoother-script.js"></script>
      </Helmet>
      <body>
        <LoadingScreen />
        <Cursor />
        <ProgressScroll />
        <Lines />

        <div id="smooth-wrapper">
          <Navbar onBookCallClick={openPopup} />
          <div id="smooth-content">
            <main className="main-bg pt-80 o-hidden">
              <Header />
              <Popup open={isOpen} closeOnDocumentClick onClose={closePopup}>
                <BooknowPopup closePopup={closePopup} />
              </Popup>
              <Marquee />
              <Services />
              <Skills />
              {/* <Numbers /> */}
              {/* <Portfolio /> */}
              <Testimonials />
              <Brands />
              <ImageScale />
              {/* <Blog /> */}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
}
