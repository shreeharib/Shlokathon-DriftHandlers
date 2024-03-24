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
        <div className="flex justify-center items-center h-screen overflow-auto bg-gradient-to-r from-purple-500 to-pink-500">
  <div className="w-3/4 h-3/4 overflow-visible border border-black rounded-lg shadow-lg bg-white">
    <div className="w-full h-full ml-7 flex justify-center items-center">
      <VictoryChart className="w-full h-full">
        <VictoryLine
          data={data}
          x={(datum) => datum.time}
          y={(datum) => datum.response}
          style={{
            data: { stroke: 'red', strokeWidth: 2, strokeLinecap: 'round', marker: { type: 'circle', size: 4, fill: 'blue' } }
          }}
        />
        <VictoryAxis label="Time" style={{ tickLabels: { fontSize: 9 } }} />
        <VictoryAxis
          dependentAxis
          tickValues={[0, 1, 2, 3, 4, 5]}
          tickFormat={(tickValue) => failureLabels[tickValue]}
          style={{ tickLabels: { fontSize: 9 } }}
        />
      </VictoryChart>
    </div>
  </div>
</div>
    
      </div>
    );
};


export default NewDashboard;

