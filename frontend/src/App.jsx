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
        <Route path="/" element={<HomePage />} />
      </Routes>
    </AnimatePresence>
  );
}
function App() {
  return (
    <HashRouter>
        <SidebarContextProvider>
          <Navbar />
          <RoutesWithAnimation />
        </SidebarContextProvider>
    </HashRouter>
  );
}

export default App;
