import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        ENI
      </Typography>
      <Divider />
      <List>
        <ul style={{ display: "block" }} className="">
          <li className="scroll-to-section">
            <Link
              to="/"
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
              <span>Avis d'inscription</span>
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
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <div
                className="logo"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: "none" } }}
                >
                  <MenuIcon />
                </IconButton>
                <i>
                  <img
                    src={eni}
                    alt=""
                    style={{ width: "30%", borderRadius: "100%" }}
                    className="img-eni"
                  />
                </i>
                <h1>
                  <strong style={{ color: "#017e6d" }}>ENI</strong> Fianarantsoa
                </h1>
              </div>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <ul className="nav">
                  <li className="scroll-to-section">
                    <Link
                      to="/"
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
                      <span>Avis d'inscription</span>
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
