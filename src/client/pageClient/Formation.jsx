import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import React from "react";
import { Link } from "react-router-dom";
import Lien from "../../Lien";
export default function Formation() {
  const sary_eni = `${Lien}${"/eni-info.jpg"}`;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const handleRedirect = () => {
    window.location.href = "https://enieni.uf@gmail.com";
  };
  return (
    <div
      className="section events"
      id="events"
      style={{ backgroundColor: "#ececec" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <Box>
              <h2> Avis d&apos;inscription &agrave; l&apos;ENI</h2>
              {/* <h6>en L1 &agrave; l&apos;ENI de l&apos;universit&eacute; de Fianarantsoa </h6> */}
            </Box>
            <Box m="20px">
              <Box
                display="grid"
                gridTemplateColumns="repeat(13, 1fr)"
                gridAutoRows="115px"
                gap="20px"
              >
                <Box
                  gridColumn="span 8"
                  gridRow="span 2"
                  backgroundColor={colors.primary[400]}
                  sx={{ padding: "30px 70px 10px 70px" }}
                >
                  <strong>Les dossiers &agrave; fournir:</strong>
                  <br />
                  <div>
                    <ul>
                      <li>
                        <p>
                          Soit photocopie bordereau de versement bancaire(y
                          mentionn&eacute; le nom et le num&eacute;ro au
                          concours d&apos;entr&eacute;e en L1), &agrave;
                          d&eacute;poser/envoyer au service de la
                          scolarit&eacute; de l&apos;ENI.
                        </p>
                      </li>
                      <li>
                        <p>
                          Soit bordereau de versement bancaire scann&eacute;(y
                          mentionn&eacute; le nom et le num&eacute;ro au
                          concours d&apos;entr&eacute;e en L1), &agrave; envoyer
                          &agrave; l&apos;adresse e-mail :
                          <Link
                            style={{
                              padding: "5px",
                              color: "#238aeb",
                              textDecorationLine: "underline",
                            }}
                            onClick={handleRedirect}
                          >
                            <span>enieni.uf@gmail.com</span>
                          </Link>
                          ou par Message priv&eacute; sur : ENI OFISIALY
                        </p>
                      </li>
                    </ul>
                  </div>
                </Box>
                <Box
                  gridColumn="span 5"
                  gridRow="span 4"
                  backgroundColor={colors.primary[400]}
                >
                  <img
                    src={sary_eni}
                    alt=""
                    srcset=""
                    style={{ height: "78vh" }}
                  />
                </Box>
                <Box
                  gridColumn="span 8"
                  gridRow="span 2"
                  sx={{ padding: "30px 70px 10px 70px" }}
                  backgroundColor={colors.primary[400]}
                >
                  <strong>
                    Pi&egrave;ce &agrave; d&eacute;poser ou &agrave; remplir
                    ult&eacute;rieurement( &agrave; la rentr&eacute;e):
                  </strong>
                  <br />
                  <div>
                    <ul>
                      <li>
                        <p>
                          - Convocation et Bordereau de versement bancaire
                          original
                        </p>
                      </li>
                      <li>
                        <p>
                          - 01 fiche d&apos;inscription remplie en bonne et du
                          forme retir&eacute;e &agrave; la scolarit&eacute;.
                        </p>
                      </li>
                      <li>
                        <p>
                          - 02 photos d&apos;identit&eacute; r&eacute;cente et
                          identique et 02 enveloppes timbr&eacute; de 1000 ar
                          avec votre adresse exacte.
                        </p>
                      </li>
                      <li>
                        <p>
                          Droit d&apos;inscription : <strong>450 000Ar</strong>{" "}
                          (IG,GB,ASR) &agrave; verser au compte bancaire
                          <br />
                          <strong>
                            BFV No 21 000 135 638 01 code : 00340{" "}
                          </strong>
                        </p>
                      </li>
                      <Link
                        to="/inscription"
                        style={{
                          color: "#148dd3",
                          textDecorationLine: "underline",
                        }}
                      >
                        S&apos;inscrire maintenant
                      </Link>
                    </ul>
                  </div>
                </Box>
              </Box>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
