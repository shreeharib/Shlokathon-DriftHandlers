import React from 'react';
import{ useEffect, useState } from 'react';
// import axios from 'axios';
import Navbar from './Navbar';
import data_drift from './datadrift.jpg'
const Datadrift = () => {
//     const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios('/reports');
//       setData(result.data);
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <iframe src="http://localhost:8000/reportsy" width="100%" height="100%"></iframe>
//     </div>
//   );

return (
  <div>
    <Navbar/>
    <br></br><br></br><br></br>
<img src={data_drift} alt="Your image" className="w-full h-auto mx-auto block" />

  </div>
);
}
  

export default Datadrift;
