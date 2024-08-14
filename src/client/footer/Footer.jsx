import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Footer() {
  return (
    <div className="content">
      <div className="left box">
        <div className="upper">
          <div className="topic">A propos</div>
          <p>
            L&apos;Ecole Nationale d&apos;Informatique, en abr&eacute;g&eacute;
            ENI, est un &eacute;tablissement d&apos;enseignement
            sup&eacute;rieur rattach&eacute; acad&eacute;miquement et
            administrativement &agrave; l&apos;Universit&eacute; de
            Fianarantsoa.
          </p>
        </div>
        <div className="lower">
          <div className="topic">Contact</div>
          <div className="phone">
            <a href="#">
              <FontAwesomeIcon icon={faPhone} /> +261 34 05 733 36
            </a>
          </div>
          <div className="email">
            <a href="#">
              <FontAwesomeIcon icon={faEnvelope} /> eni@eni.mg
            </a>
          </div>
        </div>
      </div>
      <div className="middle box">
        <div className="topic">Notre Service</div>
        <div>
          <a href="#">Web Design, Development</a>
        </div>
        <div>
          <a href="#">Web UX Design, Reasearch</a>
        </div>
        <div>
          <a href="#">Web User Interface Design</a>
        </div>
        <div>
          <a href="#">Theme Development, Design</a>
        </div>
        <div>
          <a href="#">Mobile Application Design</a>
        </div>
        <div>
          <a href="#">Wire raming & Prototyping</a>
        </div>
      </div>
      <div>
        <div className="topic">Contactez nous</div>
        <form action="#">
          <input
            type="text"
            style={{ padding: "10px" }}
            placeholder="Enter email address"
          />
          <input
            type="submit"
            name=""
            value="Send"
            style={{ padding: "10px" }}
          />
        </form>
      </div>
      <div className="bottom">
        <p>Copyright &#169; 2024</p>
      </div>
    </div>
  );
}
