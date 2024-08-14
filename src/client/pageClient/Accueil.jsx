import React from "react";
// import img2 from "../../icons/eni/en3.jpg";
// import img3 from "../../icons/eni/en8.jpg";
// import img4 from "../../icons/eni/en2.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Lien from "../../Lien";
export default function Accueil() {
  const eni = `${Lien}${"/eni3.jpg"}`;
  return (
    <div className="main-banner" style={{ backgroundImage: `url(${eni})` }}>
      <div
        className="col-lg-12"
        style={{ backgroundColor: "#3d41408a", paddingTop: "10%" }}
      >
        <div className="owl-carousel owl-banner" style={{ paddingLeft: "6%" }}>
          <div className="item item-1">
            <span className="category">Universit&eacute; de Fianarantsoa</span>
            <h2>Ecole Nationale d&apos;Informatique</h2>
            <p>
              L&apos;Ecole Nationale d&apos;Informatique, en
              abr&eacute;g&eacute; ENI, est un &eacute;tablissement
              d&apos;enseignement sup&eacute;rieur rattach&eacute;
              acad&eacute;miquement et administrativement &agrave;
              l&apos;Universit&eacute; de Fianarantsoa. Le si&egrave;ge de
              l&apos;Ecole se trouve &agrave; Tanambao-Antaninarenina &agrave;
              Fianarantsoa.
            </p>
            {/* <div className="buttons">
                      <div className="main-button">
                        <a href="#">Request Demo</a>
                      </div>
                    </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

/* <div className="section courses" id="courses">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section-heading">
                <h6>Latest Courses</h6>
                <h2>Latest Courses</h2>
              </div>
            </div>
          </div>

          <div className="row event_box">
            <div className="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 design">
              <div className="events_item">
                <div className="thumb">
                  <a href="#">
                    <img src={img4} alt="" />
                  </a>
                  <span className="category">Batiment principal</span>
                  <span className="price">
                    <h6>
                      <em>$</em>160
                    </h6>
                  </span>
                </div>
                <div className="down-content">
                  <span className="author">Stella Blair</span>
                  <h4>Learn Web Design</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6  development">
              <div className="events_item">
                <div className="thumb">
                  <a href="#">
                    <img src={img3} alt="" />
                  </a>
                  <span className="category">Development</span>
                  <span className="price">
                    <h6>
                      <em>$</em>340
                    </h6>
                  </span>
                </div>
                <div className="down-content">
                  <span className="author">Cindy Walker</span>
                  <h4>Web Development Tips</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 design wordpress">
              <div className="events_item">
                <div className="thumb">
                  <a href="#">
                    <img src={img2} alt="" />
                  </a>
                  <span className="category">Wordpress</span>
                  <span className="price">
                    <h6>
                      <em>$</em>640
                    </h6>
                  </span>
                </div>
                <div className="down-content">
                  <span className="author">David Hutson</span>
                  <h4>Latest Web Trends</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */
