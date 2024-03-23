// import React from 'react'
// import LookerDashboard from './LookerDashboard'
// import { useState,useEffect } from 'react'
// import './index.css';
// import Form from './Form'
// function App() {
//   const [data,setData]= useState([{}])
//   useEffect(()=>{
//     fetch("/predict").then(
//       res=>res.json()
//     ).then(
//       data=>{
//         setData(data)
//         console.log(data)
//       }
//     )
//   },[]
// )
//   return (
//     <div>
//       {/* <LookerDashboard/> */}
//       <h1 className="text-3xl font-bold underline">
//       Hello world!
//     </h1>
//     <Form/>
//     </div>
//   )
// }

// export default App
// import React, { useState, useEffect } from 'react';
// import './index.css';

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await fetch("/predict");
//       const json = await res.json();
//       setData(oldData => [json.response, ...oldData]);
//     };

//     const intervalId = setInterval(fetchData, 1000); // Fetch data every 1 second

//     return () => clearInterval(intervalId); // Clean up on unmount
//   }, []);

//   return (
//     <div className="p-4">
//       <h1 className="text-3xl font-bold underline mb-4">Predictive Maintenance</h1>
//       {data.map((item, index) => (
//         <div key={index} className="bg-white rounded shadow p-4 mb-4">
//           <p className="text-black text-lg">{item}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;
// import React, { useState, useEffect } from 'react';
// import './index.css';
// import LookerDashboard from './LookerDashboard'
// function App() {
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
//             <LookerDashboard/>
//       <h1 className="text-3xl font-bold underline mb-4">AI Suggestions</h1>
//       {data.map((item, index) => (
//         <div key={index} className="bg-white rounded shadow p-4 mb-4">
//           <p className="text-black text-lg">{item}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;


import React from 'react'
import PredictiveMaintenance from './PredictiveMaintenance'
import Datadrift from './Datadrift';
import './index.css';
import {Route, Routes} from 'react-router-dom' 
import Home from './Home';
import LookerDashboard from './LookerDashboard';
import NewDashboard from './NewDashboard';
function App() {
  return (
    <div>
      <Routes>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/predictionss' element={<PredictiveMaintenance/>}/>
      <Route path='/dashboard' element={<LookerDashboard/>}/>
      <Route path='/datadrift' element={<Datadrift/>}/>
      <Route path='/realtimepredictions' element={<NewDashboard/>}/>
      </Routes>
    </div>
  )
}

export default App
