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
      <div className="flex justify-center items-center h-screen overflow-auto">
        <div className="w-3/4 h-3/4 overflow-visible">
          <VictoryChart>
            <VictoryLine
              data={data}
              x={(datum) => datum.time}
              y={(datum) => datum.response}
              style={{
                data: { stroke: 'blue', strokeWidth: 2, strokeLinecap: 'round' },
              }}
            />
            <VictoryAxis
              label="Time"
              style={{
                tickLabels: { fontSize: 12 },
              }}
            />
            <VictoryAxis
              dependentAxis // Mark this axis as dependent (y-axis)
              tickValues={[0, 1, 2, 3, 4, 5]} // Set tick positions corresponding to labels
              tickFormat={(tickValue) => failureLabels[tickValue]} // Customize tick labels
              style={{
                tickLabels: { fontSize: 12 },
              }}
            />
          </VictoryChart>
        </div>
      </div>
    );
};

export default NewDashboard;
