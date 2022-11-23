
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbar from './components/Navbar';
import { HotelOwners } from './components/HotelOwners';
import RegisterHotelOwner from './components/RegisterHotelOwner';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditHotelOwner from './components/EditHotelOwner';
import ReadHotelOwners from './components/ReadHotelOwners';

function App() {
  return (
   <>
   <Navbar />
    
  <Routes>
  {/* Routes for Hotel Owners CRUD */}
    <Route path='/'  element={<HotelOwners/>} />
    <Route path='/registerhotelowners'  element={<RegisterHotelOwner/>} />
    <Route path='/edithotelowners/:id'  element={<EditHotelOwner/>} />
    <Route path='/readhotelowners/:id'  element={<ReadHotelOwners/>} />
  </Routes>
  
   </>
  );
}

export default App;
