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
        <div
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.5 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={classes.nav1}
          onClick={LoginPageHandler}
        >
          Login / Signup
        </div>
      )}
      {locationPath !== "/" && (
        <div
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.5 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={classes.nav1}
          onClick={HomePageHandler}
        >
          Home Page
        </div>
      )}

      {/* </motion.div> */}
      <span onClick={medicineHandler} className={classes.nav1}>Medicines</span>
      <span className={classes.nav1}>Symptom Checker</span>
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
      <span onClick={contactUSHandler} className={classes.nav1}>Contact Us</span>

      {isLoggedIn && (
        <div
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.5 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={classes.nav1}
          onClick={LogoutHandler}
        >
          Logout
        </div>
      )}
    </div >
  );
};
export default Navbar;
