import './App.css';

import { Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { motion, } from 'framer-motion';
import don from './images/don1.png';
import resume from './images/resume.jpg';
import pdfFile from './images/resume.pdf';
import React from 'react';
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";
import { saveAs } from 'file-saver'; 

const Home=()=>{

  const name="I'm Don Peter Joseph".split('');

  const animation=()=>{
    return{
      transform:[
        "scale3d(1,1,1)",
        "scale3d(1.4,.55,1)",
        "scale3d(.75,1.25,1)",
        "scale3d(1.25,.85,1)",
        "scale3d(.9,1.75,1)",
        "scale3d(1,1,1)"
      ]
    }
  }

  
  return(
    <>
      <Navbar/>
       
      <div className='profile'>

        <div className='profiletext' >
          <span>Hi,</span>
          <div style={{display:'flex'}}>
            {name.map((letter,index)=>{
              return(  
                  <motion.span key={index} 
                               style={{ color: ['D', 'P', 'J'].includes(letter) ? 'red' : 'inherit' }} 
                               whileHover={[()=>animation(),{color:'#0f0'}]}>
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>            
              )
            })}
          </div>
        </div>

        <div className='profileimage'>
          <img src={don} alt='profile' id='profileimage'/>
        </div>
      </div>
    </>
  )
}

const About=()=>{
  return(
    <>
      <Navbar/>
      <h2>this is about page</h2>
    </>
  )
}

const Projects=()=>{
  return(
    <>
      <Navbar/>
    </>
  )
}
const Resume=()=>{

  const handleDownload = async () => {
    try {
      const pdfData = await fetch(pdfFile).then((res) => res.blob());
      saveAs(pdfData, 'resume.pdf');
    } catch (error) {
      console.error('Error while downloading the PDF:', error);
    }
  };

  return( 
    <>
      <Navbar/>
      <img src={resume} alt='resume' id='resume' style={{width:'107%'}}/>
      <div style={{justifyContent:'center',display:'flex'}}>
        <button className='download' onClick={handleDownload}>Download</button>
      </div>
    </>
  )
}
const Contact=()=>{
  return(
    <>
      <Navbar/>
      <h2>this is Contact page</h2>
    </>
  )
}

function App() {
  return (
    <>
      <MouseTrail strokeColor={"aqua"} lineDuration={3} lineWidthStart={13} lag={.3}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/projects' element={<Projects/>}/>
        <Route exact path='/resume' element={<Resume/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
