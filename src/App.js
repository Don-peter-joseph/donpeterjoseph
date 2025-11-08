import './App.css';

import { Route,Routes,Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import { motion, } from 'framer-motion';
// import don from './images/don1.png';
import don from './images/don_latest.jpeg';
import resume from './images/resume.jpg';
import pdfFile from './images/resume.pdf';
import React from 'react';
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";
import { saveAs } from 'file-saver'; 
import Aboutme from './components/Aboutme';
import Project from './components/Projects';
import { Gallary,Creators,Tools } from './components/Projects';
import Contactme from './components/Contactme';
import { Certifications } from './components/Aboutme';

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
       
      <div className='profile page-animation'>

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
      <Aboutme/>
    </>
  )
}

const Projects=()=>{
  return(
    <>
      <Navbar/>
      <Project/>
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
      <div className='page-animation'>
        <img src={resume} alt='resume' id='resume' style={{width:'107%'}}/>
        <div style={{justifyContent:'center',display:'flex'}}>
          <button className='download' onClick={handleDownload}>Download</button>
        </div>
      </div>
    </>
  )
}
const Contact=()=>{
  return(
    <>
      <Navbar/>
      <Contactme/>
    </>
  )
}

function App() {
  return (
    <>
      <MouseTrail strokeColor={"aqua"} lineDuration={3} lineWidthStart={13} lag={.3}/>
      <Routes>
        <Route path='/donpeterjoseph' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/projects' element={<Projects/>}/>
        <Route exact path='/resume' element={<Resume/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/projects/creators' element={<Creators/>}/>
        <Route exact path='/projects/gallary' element={<Gallary/>}/>
        <Route exact path='/projects/tools' element={<Tools/>}/>
        <Route exact path='certifications' element={<Certifications/>}/>
      </Routes>
    </>
  );
}

export default App;
