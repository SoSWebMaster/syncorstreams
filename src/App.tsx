import {BrowserRouter,Routes, Route} from 'react-router-dom'
import LoginPage from "./pages/login";
import ProfilePage from "./pages/profilePage";
import SignUpPage from "./pages/signup";
import PricingPage from "./pages/pricing";
import DashboardPage from "./pages/dashboad";
import { useAppSelector } from "./store/index";
import { Navigate } from "react-router-dom";
import Home from "./pages/home";
import { Stripe } from './components/dashboad/checkout/stripe';
function App() {
   const {redirect,link} = useAppSelector((state) => state.auth); 
   return (
      <>
         <BrowserRouter >
            <Routes>
               <Route path="/" element={redirect ? <Navigate to='/dashboard'/>:<Home/>} />
               <Route path="/login" element={ redirect ? <Navigate to='/dashboard'/>: <LoginPage/>} />
               <Route path="/signup" element={redirect ? <Navigate to='/dashboard'/>:<SignUpPage/>} />
               <Route path="/pricing" element={!redirect ? <PricingPage/>: <Navigate to='/dashboard'/>} /> 
               <Route path='/dashboard' element={redirect ? <DashboardPage /> : <Navigate to="/login" />} />
               {/* <Route path="/profile" element={<ProfilePage />} /> */}
               <Route path="/checkout" element={!redirect && link==="/checkout" ? <Stripe />: <Navigate to='/login'/>}/>
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
