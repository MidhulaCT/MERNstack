import {Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Addbook from './components/Addbook';
import Register from './components/Register';
import Updatebook from './components/Updatebook';
// import Register from './components/Register';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Viewusers from './components/Viewusers';


function App() {
  return (
    <div className="App">
      {/* <Home/> */}
     {/* <Register/> */}
      {/* <Registration/> */}

    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Addbook" element={<Addbook />} /> 
        <Route path="/Register" element={<Register />} /> 
        <Route path="/Viewusers" element={<Viewusers />} /> 
        <Route path="/Updatebook/:id" element={<Updatebook/>} /> 
      </Routes>
    
    </div>
  );
}

export default App;
