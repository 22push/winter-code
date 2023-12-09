import classes from "./Navbar.module.css";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
// import SidebarContext from "../store/sidebar-context";
// import { useContext } from "react";
// import { useState } from 'react';
const Navbar = (params) => {
  // const sidebarCtx = useContext(SidebarContext);
  const navigate = useNavigate();
  const location = useLocation();
  const locationPath = location.pathname;

  // const sidebarHandler = () => {
  //   sidebarCtx.toggleSidebar();
  // };
  // console.log(sidebarCtx);
  const LoginPageHandler = () => {
    if (locationPath === "/") {
      navigate("/login");
    } else {
      navigate("/");
    }
  };
  return (
    <div className={classes.navbar}>
      {/* <GiHamburgerMenu onClick={sidebarHandler} /> */}
      {/* <motion.div> */}
      {locationPath === "/" && (
        <motion.button
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.5 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`nav-link`}
          onClick={LoginPageHandler}
        >
          Login Page
        </motion.button>
      )}
      {locationPath !== "/" && (
        <motion.button
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.5 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="nav-link"
          onClick={LoginPageHandler}
        >
          Home Page
        </motion.button>
      )}

      {/* </motion.div> */}
      <span onClick={() => { navigate('/medicines') }}>Medicines</span>
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
      <div>Contact Us</div>
    </div >
    // <nav className="navbar navbar-expand-lg bg-body-tertiary">
    //   <div className="container-fluid">
    //     <a className="navbar-brand" href="#">
    //       Navbar
    //     </a>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarTogglerDemo02"
    //       aria-controls="navbarTogglerDemo02"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" href="#">
    //             Home
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           {locationPath === "/" && (
    //             <motion.button
    //               initial={{ opacity: 0.5 }}
    //               animate={{ opacity: 1 }}
    //               exit={{ opacity: 0.5 }}
    //               transition={{ duration: 0.5, ease: "easeInOut" }}
    //               className="nav-link"
    //               onClick={LoginPageHandler}
    //             >
    //               Login Page
    //             </motion.button>
    //           )}
    //         </li>
    //         <li className="nav-item">
    //           {locationPath !== "/" && (
    //             <motion.button
    //               initial={{ opacity: 0.5 }}
    //               animate={{ opacity: 1 }}
    //               exit={{ opacity: 0.5 }}
    //               transition={{ duration: 0.5, ease: "easeInOut" }}
    //               className="nav-link"
    //               onClick={LoginPageHandler}
    //             >
    //               Home Page
    //             </motion.button>
    //           )}
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
};
export default Navbar;
