import React from 'react';
import Navbar from './Navbar';
function KaggleNotebook() {
  return (
<div>
  <Navbar/>
  <div className="dashboard  bg-gradient-to-r from-purple-500 to-pink-500 text-white flex justify-center items-center h-screen overflow-hidden">
  <iframe
    src="https://www.kaggle.com/embed/carlkirstein/predictive-maintenance-milling-multiclass-99-4?kernelSessionId=110968881"
    title="Predictive Maintenance for milling machine"
    className="border mt-20 rounded-lg shadow-md overflow-auto w-full h-full max-w-3xl max-h-3xl"
    allowFullScreen
  ></iframe>
</div>

</div>
  );
}

export default KaggleNotebook;
