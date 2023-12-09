import classes from "./Signin.module.css";
import { useNavigate } from "react-router";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { useState } from "react";
import { motion } from "framer-motion";

const Signin = (props) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const loginpageHandler = () => {
    if (props.pagename === "Signup") {
      navigate("/login");
    } else {
      navigate("/signup");
    }
  };
  const animateVariants = {
    show: {
      scale: [15, 0],
      transition: {
        times: [0, 1],
        ease: "easeInOut",
        duration: 0.5,
      },
    },
    hide: {
      scale: 0,
    },
    exit: {
      scale: [0, 15],
      transition: {
        times: [0, 1],
        ease: "easeInOut",
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className={`row d-flex align-items-center ${classes.container}`}>
        <motion.form
          // initial={{ scaleY: props.pagename === "Signup" ? 1 : 1 }}
          // animate={{ scaleY: props.pagename === "Signup" ? 1 : 1 }}
          // exit={{ scaleY: props.pagename === "Signup" ? 1 : 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          key={props.pagename}
          className={`border-bottom-0 ${classes.form}`}
        >
          <motion.div
            variants={animateVariants}
            animate="show"
            exit="exit"
            className={classes.box}
          ></motion.div>

          {props.pagename === "Signup" && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-100"
            >
              <div className="input-group mb-3">
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  placeholder="Name"
                  autoComplete="on"
                />
              </div>
              <div className="input-group mb-3">
                <input
                  className="form-control"
                  type="number"
                  id="phone"
                  autoComplete="on"
                  placeholder="Phone Number"
                />
              </div>
            </motion.div>
          )}
          <div className="input-group mb-3">
            <input
              className="form-control"
              type="email"
              id="email"
              autoComplete="on"
              placeholder="email-id"
            />
          </div>
          <div className="input-group mb-3">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="form-control"
              placeholder={!showPassword ? " · · · · · · · · " : "password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <span className="input-group-text" onClick={handleTogglePassword}>
              {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
            </span>
          </div>

          <div className={classes.buttons}>
            <button className="btn btn-primary w-100" type="submit">
              {props.pagename}
            </button>
          </div>
          <div className={classes.pagechange}>
            <b>
              <p
                onClick={loginpageHandler}
                className="small font-monospace text-center row text-dark "
              >
                {" "}
                {props.pagename === "Signup" ? "Already" : "Don't"} have an
                account? {props.pagename === "Signup" ? "Login " : "Signup"}
              </p>
            </b>
          </div>
        </motion.form>
      </div>
    </>
  );
};
export default Signin;
