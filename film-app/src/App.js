
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from './pages/Main';
import 'bootstrap/dist/css/bootstrap.css'; // react icine bootstrap i daveet etme sekli. yada index.html icine linki kopyalayacagiz. 
import Navbar from './components/Navbar';
import './App.css'
import Login from './pages/Login';
import Register from './pages/Register';


export default function App() {
  return (
  
      <React.Fragment>
        
        <Router>
          <Navbar/> 
          {/* navbar route icinde degildi biz icine aldik böylece route icine alindi, digerlerinin icinde degil ama navbar bu sekilde her yerde calisir.  */}
          <Routes>
            <Route path= '/' element= {<Main/>}/>
            <Route path= '/login' element= {<Login/>}/>
            <Route path= '/register' element= {<Register/>}/>
          </Routes>
        </Router>
        < Main />
      </React.Fragment>
    
    );
}


