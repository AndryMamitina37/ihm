import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, TextField } from "@mui/material";
import "./popupInscription.css";
import "./popupInscription2.css";
import Swal from "sweetalert2";

export default function PopupInscription2(props) {
  const formik = useFormik({
    initialValues: {
      anneeBacc: "",
      numBacc: "",
      optionBacc: "",
      centreBacc: "",
      moyenneBacc: 10,
    },
    validationSchema: Yup.object({
      anneeBacc: Yup.string().required("Ce champ est requis"),
      numBacc: Yup.string().required("Ce champ est requis"),
      optionBacc: Yup.string().required("Ce champ est requis"),
      centreBacc: Yup.string().required("Ce champ est requis"),
      moyenneBacc: Yup.string().required("Ce champ est requis"),
    }),
    validateOnChange: true, // Activate validation on each change of values
    onSubmit: () => {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "Inscription envoyé",
      });
    },
  });

  return (
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
                    ANNEE DU BACC
                  </label>
                  <TextField
                    id="anneeBacc"
                    label="Entrez l'année du Bacc"
                    name="anneeBacc"
                    className="x text-field"
                    value={formik.values.anneeBacc}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.anneeBacc &&
                      Boolean(formik.errors.anneeBacc)
                    }
                    helperText={
                      formik.touched.anneeBacc && formik.errors.anneeBacc
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
                    id="numBacc"
                    label="Entrez votre numéro"
                    name="numBacc"
                    className="x"
                    value={formik.values.numBacc}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.numBacc && Boolean(formik.errors.numBacc)
                    }
                    helperText={formik.touched.numBacc && formik.errors.numBacc}
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
                      formik.touched.moyenneBacc && formik.errors.moyenneBacc
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
              onClick={props.onClick}
              variant="outlined"
              style={{
                width: "48%",
                fontSize: "100%",
              }}
            >
              Pr&eacute;c&eacute;dent
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
  );
}
