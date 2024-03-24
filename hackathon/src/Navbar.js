import React from 'react'
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import disruption from './disruption.png'
function Navbar() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const navigate = useNavigate();
    function handleClick(){
        navigate("/dashboard")
    }
    function handlehomepage(){
        navigate("/")
    }
    function handleaipredictions(){
        navigate("/predictionss")
    }
    function handledrifts(){
        navigate("/datadrift")
    }
    function handlerealtime(){
        navigate("/realtimepredictions")
    }
    function handlenotebook(){
        navigate("/notebook")
    }
    const [isHovered, setIsHovered] = useState(false);
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
    <nav className={`bg-white text-black py-4 fixed top-0 left-0 w-full z-10 transition-all duration-500 ease-in-out ${scrollPosition > 50 ? 'bg-white' : ''}`}>
        <div className="container mx-auto flex justify-between items-center px-4">
            <div className="flex items-center">
            <img 
    onClick={handlehomepage} 
    src={disruption} 
    alt="Your image" 
    className={`h-7 w-7 mb-1 mr-2 transition-transform duration-1000 ease-in-out ${!isHovered ? 'animate-spin' : ''}`} 
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  />
    <h1 className="text-2xl font-bold flex">
        {'Drift Handlers'.split('').map((letter, index) => (
            <span key={index} className="transition-all duration-200 ease-in-out transform hover:scale-110">
                {letter}
            </span>
        ))}
    </h1>
            </div>
            <div className="flex">
                <button onClick={handleClick} className="ml-4 hover:bg-gray-100 transition-all duration-200 ease-in-out rounded-md px-3 py-1">Dashboard</button>
                <button onClick={handleaipredictions}className="ml-4 hover:bg-gray-100 transition-all duration-200 ease-in-out rounded-md px-3 py-1">AI-Suggestions</button>
                <button onClick={handledrifts}className="ml-4 hover:bg-gray-100 transition-all duration-200 ease-in-out rounded-md px-3 py-1">Drift Report</button>
                <button onClick={handlerealtime}className="ml-4 hover:bg-gray-100 transition-all duration-200 ease-in-out rounded-md px-3 py-1">Realtime Predictions</button>
                <button onClick={handlenotebook}className="ml-4 hover:bg-gray-100 transition-all duration-200 ease-in-out rounded-md px-3 py-1">Python Notebook</button>
            </div>
        </div>
    </nav>
</div>
  )
}

export default Navbar
