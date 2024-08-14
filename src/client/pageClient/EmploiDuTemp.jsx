import React, { useEffect, useState } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import Swal from "sweetalert2";

export default function EmploiDuTemp() {
  const [data, setData] = useState([
    {
      jour: "Lundi",
      heure: [
        "",
        "8:00 - 9:00",
        "9:00 - 10:00",
        "10:00 - 11:00",
        "11:00 - 12:00",
        "13:00 - 14:00",
        "14:00 - 15:00",
      ],
      salle: [
        "",
        "Salle A",
        "Salle B",
        "Salle C",
        "Salle D",
        "Salle E",
        "Salle F",
      ],
    },
    {
      jour: "Mardi",
      heure: [
        "",
        "8:00 - 9:00",
        "9:00 - 10:00",
        "10:00 - 11:00",
        "11:00 - 12:00",
        "13:00 - 14:00",
        "14:00 - 15:00",
      ],
      salle: [
        "",
        "Salle A",
        "Salle B",
        "Salle C",
        "Salle D",
        "Salle E",
        "Salle F",
      ],
    },
    {
      jour: "Mercredi",
      heure: [
        "",
        "8:00 - 9:00",
        "9:00 - 10:00",
        "10:00 - 11:00",
        "11:00 - 12:00",
        "13:00 - 14:00",
        "14:00 - 15:00",
      ],
      salle: [
        "",
        "Salle A",
        "Salle B",
        "Salle C",
        "Salle D",
        "Salle E",
        "Salle F",
      ],
    },
    {
      jour: "Jeudi",
      heure: [
        "",
        "8:00 - 9:00",
        "9:00 - 10:00",
        "10:00 - 11:00",
        "11:00 - 12:00",
        "13:00 - 14:00",
        "14:00 - 15:00",
      ],
      salle: [
        "",
        "Salle A",
        "Salle B",
        "Salle C",
        "Salle D",
        "Salle E",
        "Salle F",
      ],
    },
    {
      jour: "Vendredi",
      heure: [
        "",
        "8:00 - 9:00",
        "9:00 - 10:00",
        "10:00 - 11:00",
        "11:00 - 12:00",
        "13:00 - 14:00",
        "14:00 - 15:00",
      ],
      salle: [
        "",
        "Salle A",
        "Salle B",
        "Salle C",
        "Salle D",
        "Salle E",
        "Salle F",
      ],
    },
    {
      jour: "Samedi",
      heure: [
        "",
        "8:00 - 9:00",
        "9:00 - 10:00",
        "10:00 - 11:00",
        "11:00 - 12:00",
        "13:00 - 14:00",
        "14:00 - 15:00",
      ],
      salle: [
        "",
        "Salle A",
        "Salle B",
        "Salle C",
        "Salle D",
        "Salle E",
        "Salle F",
      ],
    },
  ]);

  const niveaux = ["L1", "L2", "L3", "M1", "M2"];
  const [toSave, setToSave] = useState("L1");

  const truc = (e) => {
    setToSave(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5002/get-data/" + toSave
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        Swal.fire({
          color: "red",
          title: "erreur de connexion",
          text: "vérifiez votre connexion",
        });
      }
    };
    fetchData();
  }, [toSave]);

  return (
    <div
      className="modal-content-inscription"
      style={{ marginTop: "9%", marginBottom: "10%", padding: "2%" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h4>Emploi du temps</h4>
      </div>
      <div>
        <select onChange={(e) => truc(e)}>
          {niveaux.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <MDBTable align="middle">
        <MDBTableHead>
          <tr>
            <th scope="col">Jour</th>
            <th scope="col">7h:30 - 9h:00</th>
            <th scope="col">9h:00 - 10h:30</th>
            <th scope="col">10h:30 - 12h:00</th>
            <th scope="col">13h:30 - 15h:00</th>
            <th scope="col">15h:00 - 16h:30</th>
            <th scope="col">16h:30 - 18h:00</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {data.map((e, index) => (
            <tr key={index}>
              <td>{e.jour}</td>
              <td>
                <p className="fw-normal mb-1"> {e.heure[1]}</p>
                <p className="text-muted mb-0">{e.salle[1]}</p>
              </td>
              <td>
                <p className="fw-normal mb-1"> {e.heure[2]}</p>
                <p className="text-muted mb-0">{e.salle[2]}</p>
              </td>
              <td>
                <p className="fw-normal mb-1"> {e.heure[3]}</p>
                <p className="text-muted mb-0">{e.salle[3]}</p>
              </td>
              <td>
                <p className="fw-normal mb-1"> {e.heure[4]}</p>
                <p className="text-muted mb-0">{e.salle[4]}</p>
              </td>
              <td>
                <p className="fw-normal mb-1"> {e.heure[5]}</p>
                <p className="text-muted mb-0">{e.salle[5]}</p>
              </td>
              <td>
                <p className="fw-normal mb-1"> {e.heure[6]}</p>
                <p className="text-muted mb-0">{e.salle[6]}</p>
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
}
