// import React, { useEffect } from "react";
// import iFrameResizer from "iframe-resizer/js/iframeResizer";

// function LookerDashboard() {
//   const dashboardUrl = "https://lookerstudio.google.com/embed/reporting/c9cabae9-5998-4b1f-8367-03cdb1ccb32c/page/QJ3rD";

//   useEffect(() => {
//     const iframe = document.getElementById("myIframe");
//     iFrameResizer({ log: true, checkOrigin: false }, iframe);
//   }, []);

//   return (
//     <div className="dashboard">
//       <iframe
//         id="myIframe"
//         title="My Dashboard"
//         src={dashboardUrl}
//         frameBorder="0"
//         style={{ border: "none", overflow: "hidden" }}
//         allowFullScreen
//         sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
//       ></iframe>
//     </div>
//   );
// }

// export default LookerDashboard;
import React, { useEffect } from "react";
import iFrameResizer from "iframe-resizer/js/iframeResizer";
import './index.css';
import Navbar from "./Navbar";

function LookerDashboard() {
  const dashboardUrl = "https://lookerstudio.google.com/embed/reporting/c9cabae9-5998-4b1f-8367-03cdb1ccb32c/page/QJ3rD";

  useEffect(() => {
    const iframe = document.getElementById("myIframe");
    iFrameResizer({ log: true, checkOrigin: false }, iframe);
  }, []);

  return (
    <div>
      <Navbar/>
    <div className="dashboard  flex justify-center items-center h-screen">
      <iframe
        id="myIframe"
        title="My Dashboard"
        src={dashboardUrl}
        frameBorder="0"
        className="border-none overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-105 w-3/4 h-3/4"
        allowFullScreen
        sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      ></iframe>
    </div>
    <div className="h-screen bg-black flex items-center justify-center">
    <div className="container mx-auto p-8">
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">Synthetic Dataset Overview</h2>
                <p className="text-base text-gray-700 leading-relaxed">
                    This synthetic dataset is modeled after an existing milling machine and consists of 10,000 data points from a stored as rows with 14 features in columns:
                    <ul className="list-disc pl-4 mt-2">
                        <li>UID: unique identifier ranging from 1 to 10,000</li>
                        <li>Product ID: consisting of L, M, or H for low (50% of all products), medium (30%), and high (20%) as product quality variants</li>
                        <li>Type: product type L, M, or H from Product ID</li>
                        <li>Air Temperature [K]: generated using a random walk process later normalized to a standard deviation of 2 K around 300 K</li>
                        <li>Process Temperature [K]: generated using a random walk process normalized to a standard deviation of 1 K, added to the Air Temperature plus 10 K</li>
                        <li>Rotational Speed [rpm]: calculated from a power of 2860 W, overlaid with normally distributed noise</li>
                        <li>Torque [Nm]: normally distributed around 40 Nm with an SD of 10 Nm</li>
                        <li>Tool Wear [min]: Quality variants H/M/L add 5/3/2 minutes of tool wear to the used tool in the process</li>
                        <li>a 'machine failure' label that indicates, whether the machine has failed in this particular datapoint for any of the following failure modes are true.</li>
                        <br></br>
                        <h2 className="text-xl font-bold mb-4">The machine failure consists of five independent failure modes</h2>
                        <ul className="list-disc pl-4 mt-2">
                            <li>Tool Wear Failure (TWF): tool will be replaced or fail at a randomly selected tool wear time between 200-240 mins</li>
                            <li>Heat Dissipation Failure (HDF): process fails if air- and process temperature difference is below 8.6 K and rotational speed is below 1380 rpm</li>
                            <li>Power Failure (PWF): process fails if power is below 3500 W or above 9000 W</li>
                            <li>Overstrain Failure (OSF): process fails if the product of tool wear and torque exceeds 11,000 minNm for L product variant</li>
                            <li>Random Failures (RNF): each process has a 0.1% chance to fail regardless of its process parameters</li>
                        </ul>
                    </ul>
                </p>
            </div>
        </div>
      </div>
    </div>

  );
}

export default LookerDashboard;
