import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useWindowSize from "./WindowsSize";
import {
  faBook,
  faContactBook,
  faContactCard,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import MenuIcon from "@mui/icons-material/Menu";
import Lien from "../../Lien";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  Typography,
} from "@mui/material";
const drawerWidth = 240;
export default function HeaderClient(props) {
  const { width } = useWindowSize();

  // Définir un seuil pour les différentes tailles d'écran
  const isMobile = width >= 1000; // Par exemple, une taille d'écran mobile

  const eni = `${Lien}${"/enico.png"}`;
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  /*===============================================*/
  const location = useLocation();
  const [activeTab, setActiveTab] = React.useState("");

  React.useEffect(() => {
    const currentPath = location.pathname;

    setActiveTab(currentPath);
  }, [location]);

  const container =
    window !== undefined ? () => window().document.body : undefined;

  /*====================farany===========================*/

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Box>
          <i>
            <img
              src={eni}
              alt=""
              className="logo"
              style={{ width: "80px", borderRadius: "100%" }}
            />
          </i>
        </Box>
        ENI Fianarantsoa
      </Typography>
      <Divider />
      <List>
        <ul style={{ display: "block" }} className="">
          <li className="scroll-to-section">
            <Link
              to="/ihm"
              className={`lien ${activeTab === "/" ? "active" : ""}`}
            >
              <FontAwesomeIcon icon={faHome} className="icon" />
              <span>Accueil</span>
            </Link>
          </li>
          <li className="scroll-to-section">
            <Link
              to="/formation"
              className={`lien ${activeTab === "/formation" ? "active" : ""}`}
            >
              <FontAwesomeIcon icon={faContactCard} className="icon" />
              <span>Information</span>
            </Link>
          </li>
          <li className="scroll-to-section">
            <Link
              to="/emploiDuTemp"
              className={`lien ${
                activeTab === "/emploiDuTemp" ? "active" : ""
              }`}
            >
              <FontAwesomeIcon icon={faContactCard} className="icon" />

              <span>Emploi du temps</span>
            </Link>
          </li>
          <li className="scroll-to-section">
            <Link
              to="/inscription"
              className={`lien ${activeTab === "/inscription" ? "active" : ""}`}
            >
              <FontAwesomeIcon icon={faBook} className="icon" />
              <span>S'inscrire</span>
            </Link>
          </li>

          <li className="scroll-to-section">
            <Link
              to="/contact"
              className={`lien ${activeTab === "/contact" ? "active" : ""}`}
            >
              <FontAwesomeIcon icon={faContactBook} className="icon" />
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </List>
    </Box>
  );

  // const [menu, setMenu] = useState(true);
  // const toggleMenu = () => {
  //   setMenu(!menu);
  // };
  // /**=== */

  // useEffect(() => {
  //   const currentPath = location.pathname;

  //   setActiveTab(currentPath);
  // }, [location]);

  return (
    <header
      className="header-area header-sticky"
      style={
        isMobile ? { backgroundColor: "white" } : { backgroundColor: "#0c7c69" }
      }
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <div
                className="logo"
                style={{
                  display: "flex",
                }}
              >
                {!isMobile && (
                  <Box>
                    <IconButton
                      color="inherit"
                      aria-label="open drawer"
                      edge="start"
                      onClick={handleDrawerToggle}
                    >
                      <MenuIcon />
                    </IconButton>
                  </Box>
                )}

                {isMobile && (
                  <Box>
                    <i>
                      <img
                        src={eni}
                        alt=""
                        className="logo"
                        style={{ width: "80px", borderRadius: "100%" }}
                      />
                    </i>
                  </Box>
                )}

                <Box
                  sx={
                    isMobile
                      ? { padding: "30px 0 0 20px" }
                      : { padding: "0 0 20px 20px" }
                  }
                >
                  <h1>
                    <strong
                      style={
                        isMobile ? { color: "#017e6d" } : { color: "white" }
                      }
                    >
                      ENI
                    </strong>{" "}
                    <span
                      style={isMobile ? { color: "black" } : { color: "white" }}
                    >
                      Fianarantsoa
                    </span>
                  </h1>
                </Box>
              </div>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <ul className="nav">
                  <li className="scroll-to-section">
                    <Link
                      to="/ihm"
                      className={`lien ${activeTab === "/" ? "active" : ""}`}
                    >
                      <FontAwesomeIcon icon={faHome} className="icon" />
                      <span>Accueil</span>
                    </Link>
                  </li>
                  <li className="scroll-to-section">
                    <Link
                      to="/formation"
                      className={`lien ${
                        activeTab === "/formation" ? "active" : ""
                      }`}
                    >
                      <FontAwesomeIcon icon={faContactCard} className="icon" />
                      <span>Information</span>
                    </Link>
                  </li>
                  <li className="scroll-to-section">
                    <Link
                      to="/emploiDuTemp"
                      className={`lien ${
                        activeTab === "/emploiDuTemp" ? "active" : ""
                      }`}
                    >
                      <FontAwesomeIcon icon={faContactCard} className="icon" />

                      <span>Emploi du temps</span>
                    </Link>
                  </li>
                  <li className="scroll-to-section">
                    <Link
                      to="/inscription"
                      className={`lien ${
                        activeTab === "/inscription" ? "active" : ""
                      }`}
                    >
                      <FontAwesomeIcon icon={faBook} className="icon" />
                      <span>S'inscrire</span>
                    </Link>
                  </li>

                  <li className="scroll-to-section">
                    <Link
                      to="/contact"
                      className={`lien ${
                        activeTab === "/contact" ? "active" : ""
                      }`}
                    >
                      <FontAwesomeIcon icon={faContactBook} className="icon" />
                      <span>Contact</span>
                    </Link>
                  </li>
                </ul>
              </Box>
            </nav>
            <nav>
              <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                  display: { xs: "block", sm: "none" },
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: drawerWidth,
                  },
                }}
              >
                {drawer}
              </Drawer>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
