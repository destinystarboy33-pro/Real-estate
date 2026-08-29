import Home from "./Pages/Home";
import AddProperties from "./Pages/AddProperties";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import ProtectedRoute from "./Components/ProtectedRoute";
import AllProperties from "./Pages/AllProperties";
import EditProperty from "./Pages/EditProperty";
import ForgotPassword from "./Pages/ForgotPassword";
import VerifyResetCode from "./Pages/VerifyResetCode";
import ResetPassword from "./Pages/ResetPassword";
// import './App.css'
// import Sidebar from './Components/Sidebar'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
 
        <Route path="/login" element={ <Login /> }></Route>
        <Route path="/forgot-password"element={<ForgotPassword />}/>
        <Route path="/verify-reset-code" element={<VerifyResetCode />}/>
        <Route path="/reset-password" element={<ResetPassword />}/>
        
        <Route path="/Dashboard" element = {<ProtectedRoute> <Home /> </ProtectedRoute>}></Route>
        <Route path="/AddProperties" element={<ProtectedRoute><AddProperties /> </ProtectedRoute>}></Route>
        <Route path="/AllProperties" element={<ProtectedRoute><AllProperties /></ProtectedRoute>}></Route>
        <Route path="/properties/edit/:id" element={<ProtectedRoute><EditProperty /></ProtectedRoute>}></Route>

      </Routes>

    </BrowserRouter>
     
      {/* <Sidebar /> */}
    </>
  );
}

export default App;
