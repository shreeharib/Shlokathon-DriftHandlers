import React from 'react'
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import disruption from './disruption.png'
import Navbar from './Navbar';
import datadrifts from './datadrift.jpg'
import dbhack from './dashboardsre.jpeg'
import chatresponse from './OIG2.jpeg'
function Home() {
//     const navigate = useNavigate();
//     function handleClick(){
//         navigate("/predictionss")
//     }
//   return (
//     <div>
//       <p>Hello home page</p>
//       <button onClick={(e)=>handleClick()}>click me to redirect</button>
//     </div>
//   )
const [scrollPosition, setScrollPosition] = useState(0);
    const navigate = useNavigate();
    function handleClick(){
        navigate("/dashboard")
    }
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
        <Navbar/>

      <div className="h-screen flex items-center justify-center bg-white transition-all duration-500 ease-in-out">
  <div className="flex flex-col items-center">
    <img src={disruption} alt="Your image" className="h-32 w-32 mb-4 transition duration-5000" />
    <h1 className="text-5xl font-bold" style={{ fontSize: `${Math.max(60 - scrollPosition / 20, 0)}px` }}>Silence the Sirens</h1><br></br>
    <h1 className="text-4xl font-bold mb-4" style={{ fontSize: `${Math.max(50 - scrollPosition / 20, 0)}px` }}>A Chatbot-Powered Predictive Maintenance System.</h1>
  </div>
</div>
      
<div className="h-screen bg-black flex flex-col items-center justify-start">
    <h1 className="text-5xl text-white font-bold mt-20" style={{ fontSize: `${Math.max(60 - scrollPosition / 30, 0)}px` }}>Features</h1>
    <br /><br /><br /><br />
    <div className="flex flex-row items-center justify-center w-full">
        <div className="flex flex-col items-center m-10 transition duration-500 ease-in-out transform hover:scale-110 animate-fade-in-up">
            <img src={dbhack} alt="Your image" className="h-96 w-96 mb-2 rounded-3xl transition duration-5000" />
            <p className="text-white text-center">Real Time Interactive Dashboards</p>
        </div>
        <div className="flex flex-col items-center m-10 transition duration-500 ease-in-out transform hover:scale-110 animate-fade-in-up">
            <img src={chatresponse} alt="Your image" className="h-96 w-96 mb-2 rounded-3xl transition duration-5000" />
            <p className="text-white text-center">AI powered Suggestions</p>
        </div>
        <div className="flex flex-col items-center m-10 transition duration-500 ease-in-out transform hover:scale-110 animate-fade-in-up">
            <img src={datadrifts} alt="Your image" className="h-96 w-96 mb-2 rounded-3xl transition duration-5000" />
            <p className="text-white text-center">Data Drift Monitoring</p>
        </div>
        {/* <div className="flex flex-col items-center m-10 transition duration-500 ease-in-out transform hover:scale-110 animate-fade-in-up">
            <img src={datadrifts} alt="Your image" className="h-96 w-96 mb-2 rounded-3xl transition duration-5000" />
            <p className="text-white text-center">Data Drift Monitoring</p>
        </div> */}
    </div>
</div>
      <div className="h-screen bg-green-300 flex items-center justify-center">
        <h1 className="text-4xl font-bold">Even More Content</h1>
      </div>
    </div>
  );
}

export default Home
