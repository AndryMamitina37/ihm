import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Box, Button, TextField } from "@mui/material";
import PopupInscription2 from "./PopupInscription2";
import { DatePicker } from "@mui/x-date-pickers";
import { useFormik } from "formik";
import { useState } from "react";
import * as React from "react";
import * as Yup from "yup";
import dayjs from "dayjs";

import "./popupInscription.css";
import "dayjs/locale/fr";
import Swal from "sweetalert2";
dayjs.locale("fr");
export default function PopupInscription(props) {
  // const [value, setValue] = React.useState(dayjs(""));

  const [selectedDate, setSelectedDate] = React.useState(dayjs("2004-01-01"));
  /*======popup inscription=======*/

  const [showPopupInscrip2, setShowPopupInscrip2] = useState(false);

  const togglePopupInscrip2 = () => {
    setShowPopupInscrip2(!showPopupInscrip2);
  };
  const formik = useFormik({
    initialValues: {
      prenom: "",
      nom: "",
      // dateNaiss: "",
      lieuNaiss: "",
      // nationalite: "",
      numCIN: "",
      adresse: "",
      telephone: "",
      email: "",
      photo: null,
    },
    validationSchema: Yup.object({
      prenom: Yup.string().required("Ce champ est requis"),
      nom: Yup.string().required("Ce champ est requis"),
      // dateNaiss: Yup.string().required("Ce champ est requis"),
      lieuNaiss: Yup.string().required("Ce champ est requis"),
      // nationalite: Yup.string().required("Ce champ est requis"),
      numCIN: Yup.string().required("Ce champ est requis"),
      adresse: Yup.string().required("Ce champ est requis"),
      telephone: Yup.string().required("Ce champ est requis"),
      email: Yup.string().required("Ce champ est requis"),
    }),
    validateOnChange: true,
    onSubmit: () => {
      handleCIN();
    },
  });

  const handleCIN = () => {
    const valuePhoto = formik.values.photo;
    const valueCIN = formik.values.numCIN;
    const valueEmail = formik.values.email;
    const checkEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (
      valueCIN.length === 13 &&
      checkEmail.test(valueEmail) &&
      valuePhoto !== null
    ) {
      // alert("metymety");
      props.onClick();
    } else {
      if (valueCIN.length !== 11) {
        Swal.fire({
          icon: "error",
          color: "red",
          title: "Champ invalide",
          text: "v&eacute;rifier votre CIN",
        });
      }
      if (!checkEmail.test(valueEmail)) {
        Swal.fire({
          icon: "error",
          color: "red",
          title: "Champ invalide",
          text: "v&eacute;rifier votre email",
        });
      }
      if (valuePhoto === null) {
        Swal.fire({
          icon: "error",
          color: "red",
          title: "Champ invalide",
          text: "veuillez ins&eacute;rer une photo",
        });
      }
    }
  };

  const [image, setImage] = useState("");

  return (
    <div className="modal-content-inscription">
      <div className="modal-header-inscription">
        <h2>Premi&egrave;re ann&eacute;e de licence professionnelle</h2>
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
              <Box className="inscript-case-image">
                <input
                  type="file"
                  name="photo"
                  onChange={(event) => {
                    formik.setFieldValue("photo", event.target.files[0]);
                    setImage(URL.createObjectURL(event.target.files[0]));
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
                    label="Votre pr&eacute;nom"
                    name="prenom"
                    className="x"
                    value={formik.values.prenom}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.prenom && Boolean(formik.errors.prenom)
                    }
                    helperText={formik.touched.prenom && formik.errors.prenom}
                    style={{
                      width: "100%",
                      fontSize: "24px",
                    }}
                  />
                </div>
                <div className="box-case-block">
                  <label htmlFor="" className="x x-label">
                    DATE DE NAISSANCE
                  </label>
                  <LocalizationProvider dateAdapter={AdapterDayjs} locale="fr">
                    {" "}
                    <DatePicker
                      label="Date de Naissance"
                      value={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="standard"
                          placeholder="dd/mm/yyyy"
                        />
                      )}
                      inputFormat="dd/MM/yyyy"
                    />
                  </LocalizationProvider>
                </div>
                <div className="box-case-block">
                  <label htmlFor="" className="x x-label">
                    LIEU DE NAISSANCE
                  </label>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Votre lieu de Naissance"
                    name="lieuNaiss"
                    className="x text-field"
                    value={formik.values.lieuNaiss}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.lieuNaiss &&
                      Boolean(formik.errors.lieuNaiss)
                    }
                    helperText={
                      formik.touched.lieuNaiss && formik.errors.lieuNaiss
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
                    label="Votre num&eacute;ro de CIN"
                    name="numCIN"
                    className="x"
                    value={formik.values.numCIN}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.numCIN && Boolean(formik.errors.numCIN)
                    }
                    helperText={formik.touched.numCIN && formik.errors.numCIN}
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
                      formik.touched.adresse && Boolean(formik.errors.adresse)
                    }
                    helperText={formik.touched.adresse && formik.errors.adresse}
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
                    label="Votre num&eacute;ro de t&eacute;l&eacute;phone"
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
                    name="email"
                    className="x"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
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
              // onClick={formik.isValid ? props.onClick : ""}
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
      {showPopupInscrip2 && <PopupInscription2 onClick={togglePopupInscrip2} />}
    </div>
  );
}
