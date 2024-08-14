import { Box, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import * as React from "react";
import * as Yup from "yup";
import dayjs from "dayjs";
import "../../popup/Inscription/popupInscription.css";
import "../../popup/Inscription/popupInscription2.css";
import "dayjs/locale/fr";
import Swal from "sweetalert2";
import io from "socket.io-client";

const socket = io("http://localhost:5001");
dayjs.locale("fr");
export default function Inscription() {
  const [visibleP1, setVisibleP1] = useState(true);
  const [visibleP2, setVisibleP2] = useState(false);
  const formik = useFormik({
    initialValues: {
      nom: "",
      prenom: "",
      dateNaissance: "2004-01-01",
      adresse: "",
      telephone: "",
      mail: "",
      photo: null,
      lieu_naissance: "",
      numeroCIN: "",
      anneDuBacc: "",
      numeroBacc: "",
      optionBacc: "",
      moyenneBacc: "",
      centreBacc: "",
    },
    validationSchema: visibleP1
      ? Yup.object({
          nom: Yup.string().required("Ce champ est requis"),
          prenom: Yup.string().required("Ce champ est requis"),
          // dateNaiss: Yup.string().required("Ce champ est requis"),
          adresse: Yup.string().required("Ce champ est requis"),
          telephone: Yup.string().required("Ce champ est requis"),
          mail: Yup.string().required("Ce champ est requis"),
          lieu_naissance: Yup.string().required("Ce champ est requis"),
          numeroCIN: Yup.string().required("Ce champ est requis"),
          // nationalite: Yup.string().required("Ce champ est requis"),
        })
      : Yup.object({
          anneDuBacc: Yup.string().required("Ce champ est requis"),
          numeroBacc: Yup.string().required("Ce champ est requis"),
          optionBacc: Yup.string().required("Ce champ est requis"),
          moyenneBacc: Yup.string().required("Ce champ est requis"),
          centreBacc: Yup.string().required("Ce champ est requis"),
        }),
    validateOnChange: true,
    onSubmit: () => {
      handleCIN();
    },
  });

  const handleCIN = () => {
    const valuePhoto = formik.values.photo;
    const valueCIN = formik.values.numeroCIN;
    const valueEmail = formik.values.mail;
    const checkEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (visibleP1) {
      if (
        valueCIN.length === 12 &&
        checkEmail.test(valueEmail) &&
        valuePhoto !== null
      ) {
        setVisibleP1(false);
        setVisibleP2(true);
      } else {
        if (valueCIN.length !== 12) {
          Swal.fire({
            icon: "error",
            color: "red",
            title: "Champ invalide",
            text: "vérifier votre CIN",
          });
        }
        if (!checkEmail.test(valueEmail)) {
          Swal.fire({
            icon: "error",
            color: "red",
            title: "Champ invalide",
            text: "vérifier votre email",
          });
        }
        if (valuePhoto === null) {
          Swal.fire({
            icon: "error",
            color: "red",
            title: "Champ invalide",
            text: "veuillez insérer une photo",
          });
        }
      }
    } else {
      const {
        nom,
        prenom,
        dateNaissance,
        adresse,
        telephone,
        mail,
        lieu_naissance,
        numeroCIN,
        anneDuBacc,
        numeroBacc,
        optionBacc,
        moyenneBacc,
        centreBacc,
      } = formik.values;
      socket.emit("insertNotification", {
        nom: nom,
        prenom: prenom,
        dateNaissance: dateNaissance,
        adresse: adresse,
        telephone: telephone,
        photo: photo0,
        mail: mail,
        lieu_naissance: lieu_naissance,
        numeroCIN: numeroCIN,
        centreBacc: centreBacc,
        anneDuBacc: anneDuBacc,
        numeroBacc: numeroBacc,
        optionBacc: optionBacc,
        moyenneBacc: moyenneBacc,
      });
      Swal.fire({
        icon: "success",
        title: "Inscription",
        text: "Inscription réussit",
      });
    }
  };

  const [image, setImage] = useState("");
  const [photo0, setPhoto0] = useState("");

  return (
    <div style={{ paddingTop: "10%" }}>
      {visibleP1 && (
        <div className="modal-content-inscription">
          <div className="modal-header-inscription">
            <h2>Inscription L1</h2>
          </div>
          <div className="modal-body-inscription">
            <Box
              component="form"
              onSubmit={formik.handleSubmit}
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div className="formulaire-inscrire">
                <Box className="form-inscrire">
                  <label htmlFor="">PHOTO D&apos;IDENTITE</label>
                  <Box className="inscript-case-image">
                    <input
                      type="file"
                      name="photo"
                      onChange={(event) => {
                        formik.setFieldValue("photo", event.target.files[0]);
                        setImage(URL.createObjectURL(event.target.files[0]));
                        setPhoto0(event.target.files[0]);
                      }}
                    />
                    {image && (
                      <div
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <img src={image} style={{ width: "20%" }} alt="" />
                      </div>
                    )}

                    {formik.values.photo && (
                      <img src={formik.values.photo} alt="" width="10%" />
                    )}
                    <input type="image" alt="" className="type-image" />
                  </Box>
                  <Box className="box-cases">
                    <div className="box-case-block">
                      <label htmlFor="" className="x x-label">
                        NOM
                      </label>
                      <TextField
                        id="outlined-multiline-flexible"
                        label="Votre nom"
                        name="nom"
                        className="x text-field"
                        value={formik.values.nom}
                        onChange={formik.handleChange}
                        error={formik.touched.nom && Boolean(formik.errors.nom)}
                        helperText={formik.touched.nom && formik.errors.nom}
                        style={{
                          width: "100%",
                          fontSize: "24px",
                        }}
                      />
                    </div>

                    <div className="box-case-block">
                      <label htmlFor="" className="x x-label">
                        PRENOM
                      </label>
                      <TextField
                        id="outlined-multiline-flexible"
                        label="Votre prénom"
                        name="prenom"
                        className="x"
                        value={formik.values.prenom}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.prenom && Boolean(formik.errors.prenom)
                        }
                        helperText={
                          formik.touched.prenom && formik.errors.prenom
                        }
                        style={{
                          width: "100%",
                          fontSize: "24px",
                        }}
                      />
                    </div>
                    <div
                      className="box-case-block"
                      style={{
                        paddingRight: "2%",
                        width: "240px",
                      }}
                    >
                      <label htmlFor="" className="x x-label">
                        DATE DE NAISSANCE
                      </label>
                      <TextField
                        id="outlined-multiline-flexible"
                        type="date"
                        // label="Votre lieu de Naissance"
                        name="dateNaissance"
                        value={formik.values.dateNaissance}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.dateNaissance &&
                          Boolean(formik.errors.dateNaissance)
                        }
                        helperText={
                          formik.touched.dateNaissance &&
                          formik.errors.dateNaissance
                        }
                        style={{
                          width: "100%",
                          fontSize: "24px",
                        }}
                      />
                    </div>
                    <div className="box-case-block">
                      <label htmlFor="" className="x x-label">
                        LIEU DE NAISSANCE
                      </label>
                      <TextField
                        id="outlined-multiline-flexible"
                        label="Votre lieu de Naissance"
                        name="lieu_naissance"
                        className="x text-field"
                        value={formik.values.lieu_naissance}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.lieu_naissance &&
                          Boolean(formik.errors.lieu_naissance)
                        }
                        helperText={
                          formik.touched.lieu_naissance &&
                          formik.errors.lieu_naissance
                        }
                        style={{
                          width: "100%",
                          fontSize: "24px",
                        }}
                      />
                    </div>
                  </Box>
                  <Box className="box-cases">
                    <div className="box-case-block">
                      <label htmlFor="" className="x x-label">
                        NUMERO CIN
                      </label>
                      <TextField
                        id="outlined-multiline-flexible"
                        label="Votre numéro de CIN"
                        name="numeroCIN"
                        className="x"
                        value={formik.values.numeroCIN}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.numeroCIN &&
                          Boolean(formik.errors.numeroCIN)
                        }
                        helperText={
                          formik.touched.numeroCIN && formik.errors.numeroCIN
                        }
                        style={{
                          width: "100%",
                          fontSize: "24px",
                        }}
                      />
                    </div>
                    <div className="box-case-block">
                      <label htmlFor="" className="x x-label">
                        ADRESSE
                      </label>
                      <TextField
                        id="outlined-multiline-flexible"
                        label="Votre adresse actuelle"
                        name="adresse"
                        className="x text-field"
                        value={formik.values.adresse}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.adresse &&
                          Boolean(formik.errors.adresse)
                        }
                        helperText={
                          formik.touched.adresse && formik.errors.adresse
                        }
                        style={{
                          width: "100%",
                          fontSize: "24px",
                        }}
                      />
                    </div>

                    <div className="box-case-block">
                      <label htmlFor="" className="x x-label">
                        TELEPHONE
                      </label>
                      <TextField
                        id="outlined-multiline-flexible"
                        label="Votre numéro de téléphone"
                        name="telephone"
                        className="x"
                        value={formik.values.telephone}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.telephone &&
                          Boolean(formik.errors.telephone)
                        }
                        helperText={
                          formik.touched.telephone && formik.errors.telephone
                        }
                        style={{
                          width: "100%",
                          fontSize: "24px",
                        }}
                      />
                    </div>
                    <div className="box-case-block">
                      <label htmlFor="" className="x x-label">
                        EMAIL
                      </label>
                      <TextField
                        id="outlined-multiline-flexible"
                        label="Votre email"
                        name="mail"
                        className="x"
                        value={formik.values.mail}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.mail && Boolean(formik.errors.mail)
                        }
                        helperText={formik.touched.mail && formik.errors.mail}
                        style={{
                          width: "100%",
                          fontSize: "24px",
                        }}
                      />
                    </div>
                  </Box>
                  <Box className="box-cases"></Box>
                </Box>
              </div>

              <div className="footer-login">
                <Button
                  type="submit"
                  variant="contained"
                  className="btn"
                  style={{
                    width: "25%",
                    fontSize: "100%",
                    margin: "0 0 0 2%",
                    backgroundColor: formik.isValid ? "green" : "gray",
                    color: formik.isValid ? "white" : "black",
                  }}
                  disableElevation
                  disabled={!formik.isValid}
                >
                  Suivant
                </Button>
              </div>
            </Box>
          </div>
        </div>
      )}

      {/* ===========================commencement du popup 2 et fin de popup 1=============================== */}
      {visibleP2 && (
        <div className="modal-content-inscription2">
          <div className="modal-header-inscription">
            <h2>Renseignements du Bacc</h2>
          </div>
          <div className="modal-body-inscription">
            <Box
              component="form"
              onSubmit={formik.handleSubmit}
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div className="formulaire-inscrire">
                <Box className="form-inscrire">
                  <Box className="box-cases">
                    <div className="box-case-block">
                      <label htmlFor="anneeBacc" className="x x-label">
                        ANNÉE DU BACC
                      </label>
                      <TextField
                        id="anneDuBacc"
                        label="Entrez l'année du Bacc"
                        name="anneDuBacc"
                        className="x text-field"
                        value={formik.values.anneDuBacc}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.anneDuBacc &&
                          Boolean(formik.errors.anneDuBacc)
                        }
                        helperText={
                          formik.touched.anneDuBacc && formik.errors.anneDuBacc
                        }
                        style={{
                          width: "100%",
                          fontSize: "24px",
                        }}
                      />
                    </div>

                    <div className="box-case-block">
                      <label htmlFor="numBacc" className="x x-label">
                        NUMERO
                      </label>
                      <TextField
                        id="numeromBacc"
                        label="Entrez votre numéro"
                        name="numeroBacc"
                        className="x"
                        value={formik.values.numeroBacc}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.numeroBacc &&
                          Boolean(formik.errors.numeroBacc)
                        }
                        helperText={
                          formik.touched.numeroBacc && formik.errors.numeroBacc
                        }
                        style={{
                          width: "100%",
                          fontSize: "24px",
                        }}
                      />
                    </div>
                    <div className="box-case-block">
                      <label htmlFor="optionBacc" className="x x-label">
                        OPTION
                      </label>
                      <TextField
                        id="optionBacc"
                        label="Entrez votre option"
                        name="optionBacc"
                        className="x"
                        value={formik.values.optionBacc}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.optionBacc &&
                          Boolean(formik.errors.optionBacc)
                        }
                        helperText={
                          formik.touched.optionBacc && formik.errors.optionBacc
                        }
                        style={{
                          width: "100%",
                          fontSize: "24px",
                        }}
                      />
                    </div>
                    <div className="box-case-block">
                      <label htmlFor="centreBacc" className="x x-label">
                        CENTRE
                      </label>
                      <TextField
                        id="centreBacc"
                        label="Entrez le centre du bacc"
                        name="centreBacc"
                        className="x"
                        value={formik.values.centreBacc}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.centreBacc &&
                          Boolean(formik.errors.centreBacc)
                        }
                        helperText={
                          formik.touched.centreBacc && formik.errors.centreBacc
                        }
                        style={{
                          width: "100%",
                          fontSize: "24px",
                        }}
                      />
                    </div>
                  </Box>
                  <Box className="box-cases">
                    <div className="box-case-block">
                      <label htmlFor="moyenneBacc" className="x x-label">
                        MOYENNE
                      </label>
                      <TextField
                        id="moyenneBacc"
                        label="Entrez la moyenne du bacc"
                        name="moyenneBacc"
                        type="number"
                        minRows={10}
                        className="x"
                        value={formik.values.moyenneBacc}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.moyenneBacc &&
                          Boolean(formik.errors.moyenneBacc)
                        }
                        helperText={
                          formik.touched.moyenneBacc &&
                          formik.errors.moyenneBacc
                        }
                        style={{
                          width: "100%",
                          fontSize: "24px",
                        }}
                      />
                    </div>
                  </Box>
                </Box>
              </div>
              <div className="footer-login">
                <Button
                  onClick={() => {
                    setVisibleP1(true);
                    setVisibleP2(false);
                  }}
                  variant="outlined"
                  style={{
                    width: "48%",
                    fontSize: "100%",
                  }}
                >
                  Précédent
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  className="btn"
                  style={{
                    width: "50%",
                    fontSize: "100%",
                    margin: "0 0 0 2%",
                    backgroundColor: formik.isValid ? "green" : "gray",
                    color: formik.isValid ? "white" : "black",
                  }}
                  disableElevation
                  disabled={!formik.isValid}
                >
                  T&eacute;rminer
                </Button>
              </div>
            </Box>
          </div>
        </div>
      )}
      {/* fin popup 2 */}
    </div>
  );
}
