import React from "react";

export default function Contact() {
  return (
    <div className="contact-us section" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-6  align-self-center">
            <div className="section-heading">
              <h6>Contactez nous</h6>
              <h2>Vous pouvez nous contacter à tout le moment</h2>
              <p>
                Merci d&apos;avoir visit&eacute; notre site web. Nous vous
                fournissons la meilleure formation. Vous pouvez nous soutenir en
                partageant notre site web.
              </p>
              <div className="special-offer">
                <span className="offer">
                  <em>ENI</em>
                </span>
                <h6>
                  Concours: <em>24 Decembre 2024</em>
                </h6>
                <h4>
                  Special Offer <em>50%</em> OFF!
                </h4>
                <a href="#">
                  <i className="fa fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-us-content">
              <form id="contact-form" action="" method="post">
                <div className="row">
                  <div className="col-lg-12">
                    <fieldset>
                      <input
                        type="name"
                        name="name"
                        id="name"
                        placeholder="Votre nom..."
                        autoComplete="on"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        pattern="[^ @]*@[^ @]*"
                        placeholder="Votre adresse email..."
                        required=""
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                      ></textarea>
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <button
                        type="submit"
                        id="form-submit"
                        className="orange-button"
                      >
                        Envoyer
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
