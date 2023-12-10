import { Outlet } from "react-router";
// import { motion } from "framer-motion";
import classes from './HomePage.module.css';
import { useNavigate } from 'react-router';

export default function HomePage() {
  const navigate = useNavigate();
  let isLoggedIn = localStorage.getItem("isLoggedIn") || false;

  const MediformChangeHandler = () => {
    isLoggedIn = localStorage.getItem("isLoggedIn") || false;
    if (!isLoggedIn) {
      navigate('/login');
    }
    else {
      navigate('./addMedication');
    }
  };
  const MedidataChangeHandler = () => {
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      navigate('./medicationData');
    }
  }

  return (
    <div className="container d-flex align-items-center " style={{ width: '100vw', flexDirection: 'column' }}>
      <Outlet />
      <br />
      <div className="h3" onClick={MediformChangeHandler}>Add Medication</div>
      <div className="h3" onClick={MedidataChangeHandler} >Medication Data</div>
    </div>
  );
}
