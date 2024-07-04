
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter
}from "react-router-dom";

function App() {
  const[mode,setMode]= useState('light'); //whether dark modeis enabled or not
  const[alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
   const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been enabled","success")
      document.title='TextUtils- Dark Mode'
      
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success")
      document.title='TextUtils- Light Mode'
    }
  }
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
    {/* <Navbar/> */}
    <BrowserRouter>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
      <Routes>
      <Route path='/' exact element={<TextForm showAlert={showAlert} heading="Enter the text to analyze"mode={mode} toggleMode={toggleMode}/>}/>
      <Route path='/about' exact element={<About mode={mode}/>}/>
      </Routes>
    </div>
    </BrowserRouter>
    </>
    
  );
}

export default App;
