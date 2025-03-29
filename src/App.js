
import './App.css';
import ImcGoal from './Components/ImcGoal'
import OurMission from './Components/OurMission'
import OurServices from './Components/OurServices'
import ContactUs from './Components/ContactUs'
import AboutUs from './Components/AboutUs'
import RootLayout from './Components/RootLayout'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import NotFoundPage from './Components/NotFoundPage';
const App = () => {
  const baseName = "/fcs";  // Change this to your actual base path

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
         <Route index element={<OurMission />} /> {/* Default Route */}
    {/* <Route path="/fcs" element={<OurMission />} /> */}
    <Route path="" element={<OurMission />} />
    <Route path="imcgoal" element={<ImcGoal />} />
    <Route path="ourmission" element={<OurMission />} />
    <Route path="aboutus" element={<AboutUs />} />
    <Route path="ourservices" element={<OurServices />} />
    <Route path="contactus" element={<ContactUs />} />
    <Route path="*" element={<NotFoundPage />} /> {/* Catch-all for 404 */}
      </Route>
    )
  );
  
  return (
    <RouterProvider router={router} baseName ={baseName} />
  )};

export default App;
