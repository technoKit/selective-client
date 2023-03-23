import Link from "next/dist/client/link";
import { useEffect, useState } from "react";
import { stickyNav } from "../utils";
import { News, Pages, Project } from "./menus";
import { useAuth } from "../contexts/auth";
import SignupModal from "../components/SignupModal";
import { MDBContainer } from "mdb-react-ui-kit";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Header = ({ transparentTop, transparentHeader, topSecondaryBg }) => {
  useEffect(() => {
    window.addEventListener("scroll", stickyNav);
  });

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
        className={`site-header sticky-header d-none d-lg-block ${
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
        <div className="navbar-wrapper">
          <div className="container">
            <div className="navbar-inner">
              <div className="site-logo">
                <Link href="/">
                  <a>
                    <img src="/assets/img/logo.png" alt="Selective" />
                  </a>
                </Link>
              </div>
              <div className="nav-menu" id="menu">
                <ul>
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects">
                      <a>Projects</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>contact us</a>
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/events">
                      <a>Events</a>
                    </Link>
                  </li>
                  <li>
                    <a href="#">
                      News
                      <span className="dd-trigger">
                        <i className="far fa-angle-down" />
                      </span>
                    </a>
                    <ul className="submenu">{News}</ul>
                  </li>
                  <li>
                    <a href="#">
                      Pages
                      <span className="dd-trigger">
                        <i className="far fa-angle-down" />
                      </span>
                    </a>
                    <ul className="submenu">{Pages}</ul>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li> */}
                </ul>
              </div>
              {!isAuthenticated && (
                <div className="navbar-extra d-flex align-items-center">
                  <Link href="/login">
                    <a
                      className="main-btn nav-btn d-none d-sm-inline-block mr-2"
                      style={{
                        backgroundColor: "transparent",
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
                    className="main-btn nav-btn d-none d-sm-inline-block "
                    onClick={setShowSignupModal}
                  >
                    Sign up <i className="far fa-arrow-right" />
                  </button>

                  <a href="#" className="nav-toggler">
                    <span />
                  </a>
                </div>
              )}
              {isAuthenticated && (
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
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
