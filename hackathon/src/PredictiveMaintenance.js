
import React, { useState, useEffect } from 'react';
import './index.css';
import Navbar from "./Navbar";
function PredictiveMaintenance() {
const [data, setData] = useState([]);

useEffect(() => {
    const fetchData = async () => {
        const res = await fetch("/get_data");
        const json = await res.json();
        if (json.data && json.data.length > 0) {
            setData(json.data); 
        }
    };

    const intervalId = setInterval(fetchData, 1000); 

    return () => clearInterval(intervalId);
}, []);

return (
    <div>
        <Navbar />
        <br></br><br></br><br></br><br></br>
        <h1 className="text-3xl font-bold underline mb-4 text-center">AI Suggestions</h1>
<div className="p-4 bg-black flex flex-wrap gap-11"> 
  {data.map((item, index) => (
    <div
      key={index}
      className={`bg-white rounded-lg shadow-md p-4 transition-transform hover:scale-105`}
      style={{ width: 'calc(25% - 2.4rem)' }}  >
      <p className="text-black text-lg">{item}</p>
    </div>
  ))}
</div>
    </div>
);
      }

export default PredictiveMaintenance;