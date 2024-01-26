// import React, { useState } from "react";
// import profile from "../../assets/img3.jpg";
// import { Link } from "react-router-dom";
// import { FaArrowRight } from "react-icons/fa";
// // import Iframe from 'react-iframe'
// import {
//   FaEnvelopeOpen,
//   FaPhoneSquareAlt,
//   FaFacebookF,
//   FaTwitter,
//   FaGithub,
//   FaLinkedinIn,
//   FaYoutube
// } from "react-icons/fa";
// import { FiSend } from "react-icons/fi";
// import "./home.css";
// import Nav from "../../components/Nav";
// function Home() {
//   const [showFullDescription, setShowFullDescription] = useState(false);
//   const description = `an expert in gis/rs for more than 14 years of working in gis, remote sensing industry.
//   excellent reputation for resolving problems, managing projects, and improving customer satisfaction.`;

//   function toggleDescription() {
//     setShowFullDescription(!showFullDescription);
//   }

//   const truncatedDescription = showFullDescription
//     ? description
//     : `${description.slice(0, 88)}...`;
//   return (
//     <>
//       {/* home in home.css section and grid in app.css style*/}
//       <section className="home section homesection grid">
//         {/* part2 */}
//         <div className="home__content">
//           <div className="home__data">
//             <h1 className="home__title">
//               <span>I'm Mostafa Essam . </span>
//               <div className="home__title2">
//                 <p>- Geospatial Solution Architect </p>
//                 <p>- GIS Project Manager </p>
//                 <p>- Database Administrator</p>
//                 <p>- GIS/RS Training consultant </p>
//               </div>
//             </h1>

//             <p className="home__description">{truncatedDescription}</p>

//             {description.length > 1 && (
//               <button onClick={toggleDescription} className="show-more-button">
//                 {showFullDescription ? "Show Less" : "Show More"}
//               </button>
//             )}

//             {/* part2 */}
//             <div className="social-media" style={{ paddingTop: "15px" }}>
//               <div className="bg-icon">
//                 <a href="https://www.linkedin.com/in/mostafa-essam-9ab16a125">
//                   <FaLinkedinIn />
//                 </a>
//                 <span></span>
//               </div>
//               <div className="bg-icon">
//                 <a href="https://mostafageo2009.github">
//                   <FaGithub />
//                 </a>
//                 <span></span>
//               </div>
//               <div className="bg-icon">
//                 <a href="https://www.youtube.com/user/sasapopsasa/videos">
//                   {/* <FaTwitter /> */}
//                   <FaYoutube />
//                 </a>
//                 <span></span>
//               </div>
//               <div className="bg-icon">
//                 <a href="https://www.facebook.com/mostafa.geoman">
//                   <FaFacebookF />
//                 </a>
//                 <span></span>
//               </div>
//             </div>

//             <Link to="/about" className="button">
//               More Aboute Me{" "}
//               <span className="button__icon">
//                 <FaArrowRight />
//               </span>
//             </Link>
//           </div>
//         </div>

              

//         {/*part1*/}
//         <img src={profile} alt="" className="home__img" />
//         {/* <Iframe url="https://www.sdrive.app/embed/1ptBQD"
//         width="640px"
//         height="320px"
//         id=""
//         className=""
//         display="block"
//         position="relative"/> */}
//         {/* part3 */}
//         {/* <div className="color__block"></div> */}
//       </section>


//       <section className="nav1">
//       <Nav/>
//       </section>
//     </>
//   );
// }

// export default Home;





import React, { useState } from "react";
import profile from "../../assets/img3.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
// import Iframe from 'react-iframe'
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
  FaYoutube
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "./home.css";
import Nav from "../../components/Nav";
import SimpleSlider from "./SimpleSlider/SimpleSlider";


function Home() {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const description = `an expert in gis/rs for more than 14 years of working in gis, remote sensing industry.
  excellent reputation for resolving problems, managing projects, and improving customer satisfaction.`;

  function toggleDescription() {
    setShowFullDescription(!showFullDescription);
  }

  const truncatedDescription = showFullDescription
    ? description
    : `${description.slice(0, 88)}...`;
  return (
    <>
    <SimpleSlider/>
      {/* home in home.css section and grid in app.css style */}
       <section className="home section homesection grid">
        <div className="home__content">
          <div className="home__data">
            <h1 className="home__title">
              <span>I'm Mostafa Essam . </span>
              <div className="home__title2">
                <p>- Geospatial Solution Architect </p>
                <p>- GIS Project Manager </p>
                <p>- Database Administrator</p>
                <p>- GIS/RS Training consultant </p>
              </div>
            </h1>

            <p className="home__description">{truncatedDescription}</p>

            {description.length > 1 && (
              <button onClick={toggleDescription} className="show-more-button">
                {showFullDescription ? "Show Less" : "Show More"}
              </button>
            )}

            <div className="social-media" style={{ paddingTop: "15px" }}>
              <div className="bg-icon">
                <a href="https://www.linkedin.com/in/mostafa-essam-9ab16a125">
                  <FaLinkedinIn />
                </a>
                <span></span>
              </div>
              <div className="bg-icon">
                <a href="https://mostafageo2009.github">
                  <FaGithub />
                </a>
                <span></span>
              </div>
              <div className="bg-icon">
                <a href="https://www.youtube.com/user/sasapopsasa/videos">
                  <FaYoutube />
                </a>
                <span></span>
              </div>
              <div className="bg-icon">
                <a href="https://www.facebook.com/mostafa.geoman">
                  <FaFacebookF />
                </a>
                <span></span>
              </div>
            </div>

            <Link to="/about" className="button">
              More Aboute Me{" "}
              <span className="button__icon">
                <FaArrowRight />
              </span>
            </Link>
          </div>
        </div>

              

        <img src={profile} alt="" className="home__img" />
     
      </section>


      <section className="nav1">
      <Nav/>
      </section> 
      <iframe width="100%" height="526" src="https://www.youtube.com/embed/CRx6KCYFBc4" title="AUC Session_ جزء من محاضرة الاستشعار عن بعد الجامعة الامريكية" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              
    </>
  );
}

export default Home;
