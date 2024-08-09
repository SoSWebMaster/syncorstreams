import {BrowserRouter,Routes, Route} from 'react-router-dom'
import LoginPage from "./pages/login";
import SignUpPage from "./pages/signup";
import PricingPage from "./pages/pricing";
import DashboardPage from "./pages/dashboad";
import { useAppSelector } from "./store/index";
import { Navigate } from "react-router-dom";
import Home from "./pages/home";
function App() {
   const isAuthenticated = useAppSelector((state) => state.auth.success); 
   return (
      <>
         <BrowserRouter >
            <Routes>
               <Route path="/" element={isAuthenticated ? <Navigate to='/dashboard'/>:<Home/>} />
               <Route path="/login" element={ isAuthenticated ? <Navigate to='/dashboard'/>: <LoginPage/>} />
               <Route path="/signup" element={isAuthenticated ? <Navigate to='/dashboard'/>:<SignUpPage/>} />
               <Route path="/pricing" element={<PricingPage/>} /> 
               <Route path='/dashboard' element={isAuthenticated ? <DashboardPage /> : <Navigate to="/login" />} />
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
