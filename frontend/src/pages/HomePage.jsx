import { Outlet } from "react-router";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router';

export default function HomePage() {
  const navigate = useNavigate();

  const MediformChangeHandler = () => {
    navigate('./addMedication');
  };
  const MedidataChangeHandler = () => {
    navigate('./medicationData');
  }

  return (
    <div className="container d-flex align-items-center " style={{ width: '100vh', flexDirection: 'column' }}>
      <Outlet />
      <br />
      <div className="h3" onClick={MediformChangeHandler}>Add Medication</div>
      <div className="h3" onClick={MedidataChangeHandler} >Medication Data</div>

    </div>
  );
}
