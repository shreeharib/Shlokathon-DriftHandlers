import React from 'react'
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import disruption from './disruption.png'
import Navbar from './Navbar';
import datadrifts from './datadrift.jpg'
import dbhack from './dashboardsre.jpeg'
import chatresponse from './OIG2.jpeg'
import gradientgraph from './gradientgraph.jpg'
import backgroundImage from './bg-hero.jpg';
import backgroundVideo from './bg-video.mp4';
function Home() {
const [scrollPosition, setScrollPosition] = useState(0);
    const navigate = useNavigate();
    function handleClick(){
        navigate("/dashboard")
    }
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  // const backgroundImage = '/Users/shreehari/Documents/mlhackathon/hackathon/src/bg-hero.jpg'; 

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
        <Navbar/>

      {/* <div className="h-screen flex items-center justify-center bg-gradient-to-t from-gray-950 to-yellow-100 transition-all duration-500 ease-in-out">
  <div className="flex flex-col items-center">
    <img src={disruption} alt="Your image" className="h-32 w-32 mb-4 transition duration-5000" />
    <h1 className="text-5xl  font-bold" style={{ fontSize: `${Math.max(60 - scrollPosition / 20, 0)}px` }}>Silence the Sirens</h1><br></br>
    <h1 className="text-4xl  font-bold mb-4 animate-bounce" style={{ fontSize: `${Math.max(50 - scrollPosition / 20, 0)}px` }}>A Chatbot-Powered Predictive Maintenance System.</h1>
  </div>
</div> */}
{/* <div className="h-screen flex items-center justify-center bg-cover bg-center" 
     style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
  <div className="flex flex-col items-center">
    <img src={disruption} alt="Your image" className="h-32 w-32 mb-4 ml-9 transition duration-5000" />
    <h1 className="text-5xl ml-9 font-bold">Silence the Sirens</h1>
    <br></br>
    <h1 className="text-4xl ml-9 font-bold mb-4">A Chatbot-Powered Predictive Maintenance System</h1>
  </div>
</div> */}
<div className="h-screen flex items-center justify-center bg-cover bg-center">
  <video autoPlay loop muted style={{ position: 'absolute', width: '100%', left: '50%', top: '50%', height: '100%', objectFit: 'cover', transform: 'translate(-50%, -50%)', zIndex: '-1'}}>
    <source src={backgroundVideo} type="video/mp4" />
  </video>
  <div className="flex flex-col items-center z-10 ">
  {/* <img src={disruption} alt="Your image" className="h-32 w-32 mb-4 transition duration-5000" /> */}
  <h1 className="text-5xl text-white font-bold " style={{ fontSize: `${Math.max(60 - scrollPosition / 20, 0)}px` }}>Silence the Sirens</h1>
  <br></br>
  <h1 className="text-4xl text-white font-bold mb-4 animate-pulse " style={{ fontSize: `${Math.max(50 - scrollPosition / 20, 0)}px` }}>"A Chatbot-Powered Predictive Maintenance System"</h1>
</div>
</div>
<div className="h-screen bg-black flex flex-col items-center justify-start">
    <h1 className="text-5xl text-white font-bold mt-20" style={{ fontSize: `${Math.max(60 - scrollPosition / 30, 0)}px` }}>Features</h1>
    <br /><br /><br /><br />
    <div className="flex flex-row items-center justify-center w-full">
    <div className="flex flex-col items-center m-5 transform hover:scale-110 animate-fade-in-up">
        <img src={dbhack} alt="Your image" className="h-80 w-80 mb-2 rounded-3xl transition duration-5000" />
        <p className="text-white text-center">Real Time Interactive Dashboards</p>
    </div>
    <div className="flex flex-col items-center m-5 transform hover:scale-110 animate-fade-in-up">
        <img src={chatresponse} alt="Your image" className="h-80 w-80 mb-2 rounded-3xl transition duration-5000" />
        <p className="text-white text-center">AI powered Suggestions</p>
    </div>
    <div className="flex flex-col items-center m-5 transform hover:scale-110 animate-fade-in-up">
        <img src={datadrifts} alt="Your image" className="h-80 w-80 mb-2 rounded-3xl transition duration-5000" />
        <p className="text-white text-center">Data Drift Monitoring</p>
    </div>
    <div className="flex flex-col items-center m-5 transform hover:scale-110 animate-fade-in-up">
        <img src={gradientgraph} alt="Your image" className="h-80 w-80 mb-2 rounded-3xl transition duration-5000" />
        <p className="text-white text-center">Real Time Predictions</p>
    </div>
    </div>
</div>

<div className="h-screen bg-white flex items-center justify-center">
    <div className="flex justify-center items-center space-x-10 w-full max-w-7xl mx-auto">
        <div className="w-1/2 p-4">
            <h1 className="text-4xl font-bold mb-4">Milling Machine and Its Maintenance</h1>
            <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Maintenance of the milling machine is critical to its performance and longevity.</li>
                <li>It includes routine tasks such as cleaning, lubrication, inspection of parts, alignment checks, and coolant system maintenance.</li>
                <li>Regular inspection of milling machine parts is vital to identify any signs of wear or damage.</li>
                <li>It's also important to establish a regular maintenance schedule.</li>
                <li>Some of the daily tasks include checking tool holders, pull studs, and tool tapers for damage.</li>
                <li>Clear off any chips on the tool taper and remove tools with rust or galling.</li>
                <li>Weekly tasks include checking the coolant float gauge and verifying that it is operating properly and the displayed reading matches the actual level in your tank.</li>
            </ul>
        </div>
        <div className="w-1/2 p-4">
            <img src="https://bing.com/th?id=OIP.wep3LPro_FQ9UhUq10iO3QHaHa" alt="Milling Machine" className="rounded-lg shadow-lg" />
        </div>
    </div>
</div>

    </div>
  );
}

export default Home
