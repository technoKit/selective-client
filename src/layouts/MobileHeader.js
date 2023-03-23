import Link from "next/dist/client/link";
import { useState } from "react";
import { Home, News, Pages, Project } from "./menus";
import { useAuth } from "../contexts/auth";
import SignupModal from "../components/SignupModal";
import DropdownButton from "react-bootstrap/DropdownButton";
import { MDBContainer } from "mdb-react-ui-kit";
import Dropdown from "react-bootstrap/Dropdown";

const MobileHeader = ({
  transparentTop,
  transparentHeader,
  topSecondaryBg,
}) => {
  const [toggle, setToggle] = useState(false);
  const [activeToggle, setActiveToggle] = useState("");
  const setActive = (value) =>
      setActiveToggle(value === activeToggle ? "" : value),
    activeLi = (value) =>
      value === activeToggle ? { display: "block" } : { display: "none" },
    activeArrow = (value) => (value === activeToggle ? "submenu-opened" : "");

  const [showSignupModal, setShowSignupModal] = useState(false);
  const { signUp, signupError, signupLoading, isAuthenticated, logout, user } =
    useAuth();

  return (
    <>
      <SignupModal
        show={showSignupModal}
        setShow={setShowSignupModal}
        signUp={signUp}
        signupLoading={signupLoading}
        signupError={signupError}
      />
      <header
        className={`site-header sticky-header  d-lg-none ${
          transparentTop ? "topbar-transparent" : ""
        } ${transparentHeader ? "transparent-header" : ""}`}
        id="header-sticky"
      >
        <div
          className={`header-topbar d-none d-sm-block ${
            topSecondaryBg ? "topbar-secondary-bg" : ""
          }`}
        >
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-auto">
                <ul className="contact-info">
                  <li>
                    <a href="#">
                      <i className="far fa-envelope" /> support@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="far fa-map-marker-alt" /> 250 Main Street,
                      2nd Floor, USA
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-auto d-none d-md-block">
                <ul className="social-icons">
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-behance" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-google-plus-g" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-wrapper breakpoint-on">
          <div className="container">
            <div className="navbar-inner">
              <div className="site-logo">
                <Link href="/">
                  <a>
                    <img src="/assets/img/logo.png" alt="logo" />
                  </a>
                </Link>
              </div>
              <div className="navbar-extra d-flex align-items-center">
                <a
                  href="#"
                  className={`nav-toggler ${toggle ? "panel-opened" : ""}`}
                  onClick={() => setToggle(!toggle)}
                >
                  <span />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={`mobile-menu-panel ${toggle ? "panel-opened" : ""}`}>
          <div
            className="panel-logo"
            style={{ width: "100px", borderRadius: "7px", overflow: "hidden" }}
          >
            <Link href="/">
              <a>
                <img src="/assets/img/logo-mobile.png" alt="logo" />
              </a>
            </Link>
          </div>
          <ul className="panel-menu" id="menu">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
          </ul>
          {!isAuthenticated && (
            <div
              className="navbar-extra d-flex align-items-start ml-5 "
              style={{ flexDirection: "column", gap: "10px" }}
            >
              <Link href="/login">
                <a
                  className="main-btn nav-btn  d-sm-inline-block mr-2"
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    border: "1px solid black",
                    paddingRight: "19px",
                    paddingLeft: "19px",
                  }}
                >
                  Log in <i className="far fa-user" />
                </a>
              </Link>
              <button
                className="main-btn nav-btn  d-sm-inline-block "
                onClick={setShowSignupModal}
              >
                Sign up <i className="far fa-arrow-right" />
              </button>
            </div>
          )}
          {isAuthenticated && (
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <DropdownButton
                variant="link"
                id="dropdown-item-button"
                title={
                  <MDBContainer
                    className=" d-flex justify-content-center"
                    style={{ width: "70px" }}
                  >
                    <img
                      src="/assets/img/avatar.svg"
                      className="rounded-circle"
                      alt="Avatar"
                    />
                  </MDBContainer>
                }
              >
                <Dropdown.ItemText className="mt-2">
                  {user?.username}
                </Dropdown.ItemText>
                <Dropdown.Divider />

                <Dropdown.Item as="button" onClick={logout}>
                  Logout
                </Dropdown.Item>
              </DropdownButton>
            </div>
          )}

          <a href="#" className="panel-close" onClick={() => setToggle(false)}>
            <i className="fal fa-times" />
          </a>
        </div>
      </header>
    </>
  );
};

export default MobileHeader;
