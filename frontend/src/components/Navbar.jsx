import classes from "./Navbar.module.css";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { useContext } from "react";
// import { useState } from 'react';
const Navbar = (params) => {
  // const sidebarCtx = useContext(SidebarContext);
  const navigate = useNavigate();
  const location = useLocation();
  const locationPath = location.pathname;

  const isLoggedIn = localStorage.getItem("isLoggedIn") || false;
  // console.log(isLoggedIn);
  const LoginPageHandler = () => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      navigate("/");
    }
  };
  const HomePageHandler = () => {
    navigate("/");
  }

  const LogoutHandler = () => {
    localStorage.clear();
    navigate("/");
  }
  const medicineHandler = () => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      navigate("/medicines");
    }
  }

  const contactUSHandler = () => {
    if (!isLoggedIn) {
      navigate("/login");
    }
    else {
      navigate("/contactUs");
    }
  }

  return (
    <div className={classes.navbar}>
      {/* <GiHamburgerMenu onClick={sidebarHandler} /> */}
      {/* <motion.div> */}
      {!isLoggedIn && (
        <motion.button
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.5 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`nav-link`}
          onClick={LoginPageHandler}
        >
          Login / Signup
        </motion.button>
      )}
      {locationPath !== "/" && (
        <motion.button
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.5 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="nav-link"
          onClick={HomePageHandler}
        >
          Home Page
        </motion.button>
      )}

      {/* </motion.div> */}
      <span onClick={medicineHandler}>Medicines</span>
      <span>Symptom Checker</span>
      {/* <span>
        <div class="container mt-3" style={{ width: '300px' }}>
          <form class="form-inline">
            <div className="form-group">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ width: '240px' }}
            />
            </div>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>

      </span> */}
      <span onClick={contactUSHandler}>Contact Us</span>

      {isLoggedIn && (
        <motion.button
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.5 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`nav-link`}
          onClick={LogoutHandler}
        >
          Logout
        </motion.button>
      )}
    </div >
  );
};
export default Navbar;
