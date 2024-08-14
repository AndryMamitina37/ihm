import React from "react";
import { Route, Routes } from "react-router-dom";
import HeaderClient from "./header/HeaderClient";
import Accueil from "./pageClient/Accueil";
import Formation from "./pageClient/Formation";
import EmploiDuTemps from "./pageClient/EmploiDuTemp";
import Inscription from "./pageClient/Inscription";
import Contact from "./pageClient/Contact";
import Footer from "./footer/Footer";
import "./assets/css/index.css";
export default function Index() {
  return (
    <>
      {/* 
      {showPopupInscrip && <PopupInscription onClick={togglePopupInscrip} />} */}
      <HeaderClient />

      <Routes>
        <Route path="/ihm" element={<Accueil />} />
        <Route path="/formation" element={<Formation />} />
        <Route path="/emploiDuTemp" element={<EmploiDuTemps />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
