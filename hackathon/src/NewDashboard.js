// import { useEffect, useState } from 'react';
// import { VictoryLine, VictoryChart, VictoryAxis } from 'victory';

// const failureLabels = [" ", "Tool Wear Failure", "Heat Dissipation Failure", "Power Failure", "Over Strain Failure", "Random Failures"];

// const NewDashboard = () => {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await fetch('/newdata');
//             const newData = await response.json();
//             setData(currentData => [...currentData.slice(-50), newData]); // Last 50 data points
//           console.log("donkey",data)
//           };
//         fetchData();
//         const intervalId = setInterval(fetchData, 1000); // Fetch data every 1 second
//         return () => clearInterval(intervalId); // Clean up on component unmount
//     }, []);

//     return (    
//       <div style={{ width: '800px', height: '300px' }}>
//         <VictoryChart>
//         <VictoryLine
//           data={data}
//           x={(datum) => datum.time}
//           y={(datum) => datum.response}
//           style={{
//             data: { stroke: 'blue', strokeWidth: 2, strokeLinecap: 'round' },
//           }}
//         />
//         <VictoryAxis
//           label="Time"
//           style={{
//             tickLabels: { fontSize: 12 },
//           }}
//         />
//         <VictoryAxis
//           dependentAxis // Mark this axis as dependent (y-axis)
//           tickValues={[0, 1, 2, 3, 4, 5]} // Set tick positions corresponding to labels
//           tickFormat={(tickValue) => failureLabels[tickValue]} // Customize tick labels
//           style={{
//             tickLabels: { fontSize: 12 },
//           }}
//         />
//         </VictoryChart>
//       </div>
//     );
// };

// export default NewDashboard;
import { useEffect, useState } from 'react';
import { VictoryLine, VictoryChart, VictoryAxis } from 'victory';
import Navbar from './Navbar';

const failureLabels = [" ", "Tool Wear Failure", "Heat Dissipation Failure", "Power Failure", "Over Strain Failure", "Random Failures"];

const NewDashboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/newdata');
            const newData = await response.json();
            setData(currentData => [...currentData.slice(-50), newData]); // Last 50 data points
          console.log("donkey",data)
          };
        fetchData();
        const intervalId = setInterval(fetchData, 1000); // Fetch data every 1 second
        return () => clearInterval(intervalId); // Clean up on component unmount
    }, []);

    return (    
      <div>
        <Navbar/>
  
      <div className="flex justify-center items-center h-screen overflow-auto bg-white">

<div className="w-3/4 h-3/4 overflow-visible border border-gray-300 rounded-lg shadow-lg bg-white">

  <div className="w-full h-full ml-7 flex justify-center items-center">
    
    <VictoryChart className="w-full h-full">
      <VictoryLine
        data={data}
        x={(datum) => datum.time}
        y={(datum) => datum.response}
        style={{
          data: { stroke: 'blue-500', strokeWidth: 2, strokeLinecap: 'round', marker: { type: 'circle', size: 4, fill: 'blue-500' }, }
        }}
      />
      <VictoryAxis
        label="Time"
        style={{ tickLabels: { fontSize: 9, color: 'gray-500' } }}
      />
      <VictoryAxis
        dependentAxis
        tickValues={[0, 1, 2, 3, 4, 5]}
        tickFormat={(tickValue) => failureLabels[tickValue]}
        style={{ tickLabels: { fontSize: 9, color: 'gray-500' } }}
      />
    </VictoryChart>
  </div>
</div>
</div>

      </div>
    );
};


export default NewDashboard;

