// import React, { useState, useEffect } from 'react';
// import './index.css';
// function PredictiveMaintenance() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await fetch("/predict");
//       const json = await res.json();
//       if (json.response) {
//         setData(oldData => [json.response, ...oldData]);
//       }
//     };

//     const intervalId = setInterval(fetchData, 1000); // Fetch data every 1 second

//     return () => clearInterval(intervalId); // Clean up on unmount
//   }, []);

//   return (
//     <div className="p-4">
//       <h1 className="text-3xl font-bold underline mb-4">AI Suggestions</h1>
//       {data.map((item, index) => (
//         <div key={index} className="bg-white rounded shadow p-4 mb-4">
//           <p className="text-black text-lg">{item}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default PredictiveMaintenance;
import React, { useState, useEffect } from 'react';
import './index.css';
import Navbar from "./Navbar";
function PredictiveMaintenance() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/predict");
      const json = await res.json();
      if (json.response) {
        setData(oldData => [...oldData, json.response]); // Add new response at the end
      }
    };

    const intervalId = setInterval(fetchData, 1000); // Fetch data every 1 second

    return () => clearInterval(intervalId); // Clean up on unmount
  }, []);

  return (

    <div> 
       <Navbar/>
        <div className="p-4">
    <h1 className="text-3xl font-bold underline mb-4">AI Suggestions</h1>
    {data.map((item, index) => (
      <div key={index} className="bg-white rounded shadow p-4 mb-4">
        <p className="text-black text-lg">{item}</p>
      </div>
    ))}
  </div></div>
  );
}

export default PredictiveMaintenance;
