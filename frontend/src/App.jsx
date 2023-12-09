import "./App.css";
// import { createHashRouter } from "react-router-dom";
// import { RouterProvider } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import { Route, Routes, useLocation, HashRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import SidebarContextProvider from "./store/sidebarContextProvider";
import Medicines from "./pages/Medicines";
import MedicationData from "./components/MedicationData";
import MedicineInputForm from "./components/MedicineInputForm";
import MedicationDataID from "./components/MedicationDataID";
// const HashRouter = createHashRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//     children: [
//       { index: true, element: <Checkboot /> },
//       {
//         path: "/login",
//         element: <LoginPage />,
//       },
//       {
//         path: "/signup",
//         element: <SignupPage />,
//       },
//     ],
//   },
// ]);
// function App() {
//   return (
//     <AnimatePresence>
//       <RouterProvider router={HashRouter} />;
//     </AnimatePresence>
//   );
// }

function RoutesWithAnimation() {
  const location = useLocation();
  console.log(location);
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.key}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/medicines" element={<Medicines />} />
        <Route path='addMedication' element={<MedicineInputForm />} />
        <Route path="/medicationData" element={<MedicationData />} />
        <Route path="/medicationData/:id" element={<MedicationDataID />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </AnimatePresence>
  );
}
function App() {
  return (
    <HashRouter>
      <SidebarContextProvider>
        <div className="container text-center h2">
          𝓜𝓮𝓭𝓲𝓬𝓪𝓽𝓲𝓸𝓷 𝓣𝓻𝓪𝓬𝓴𝓮𝓻 & 𝓡𝓮𝓶𝓲𝓷𝓭𝓮𝓻 𝓐𝓹𝓹
        </div>
        <br />
        <Navbar />
        <br />
        <br />
        <RoutesWithAnimation />
      </SidebarContextProvider>
    </HashRouter>
  );
}

export default App;
