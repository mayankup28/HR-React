import { useState } from 'react';
import './App.css';
import Alert from './component.js/Alert';
import About from './component.js/About';
import Nav from './component.js/Nav';
import TextForm from './component.js/TextForm';
import { Routes,Route } from 'react-router-dom';

function App() {
  const[mode,setmode]=useState("light")
  const[word,setword]=useState("Light Mode On")
  const[alt,setalt]=useState(null)
  const Galert=(msg,type)=>{
    setalt({
      message:msg,
      type:type
    })
    setTimeout(() => {
      setalt(null)
    }, 2000);
  }
  const togglemode=()=>{
    if(mode==="light"){
      setmode("dark")
      setword("Dark Mode On")
      document.body.style.backgroundColor="#042743"
      Galert("Dark mode is on","success")
    }
    else{
      setmode("light")
      setword("Light Mode On")
      document.body.style.backgroundColor="white"
      Galert("Light mode is on","success")
    }
  }


  // const DarkGreen=()=>{
  //   if(mode==="light"){
  //     setmode("Green")
  //     // setword("Green Mode On")
  //     document.body.style.backgroundColor="#0c3221"
  //     Galert("Green mode is on","success")
  //   }
  //   else if(mode==="dark"){
  //     setmode("Green")
  //     // setword("Green Mode On")
  //     document.body.style.backgroundColor="#0c3221"
  //     Galert("Green mode is on","success")
  //   }
  // }
  return (
    <>
<Nav titel="MyNav" aboutUS="AboutUs" mode={mode} toggleMode={togglemode}  words={word}/>
<Alert alert={alt}/>
<div className="container my-3">
        <Routes>
        <Route path="/" element = {<TextForm heading="Enter Your text" Showalert={Galert} mode={mode}/>} ></Route>
        <Route path="/about" element = {<About/>} ></Route>
        <Route path="/home" element={<TextForm heading="Enter Your text" Showalert={Galert} mode={mode}/>}></Route>
      </Routes>
{/* <About/> */}
</div>
    </>
  );
}

export default App;
