import React from 'react';
import Navbar from './Navbar';
function KaggleNotebook() {
  return (
<div>
  <Navbar/>
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <iframe 
        src="https://www.kaggle.com/embed/carlkirstein/predictive-maintenance-milling-multiclass-99-4?kernelSessionId=110968881" 
        title="Predictive Maintenance, Milling - Multiclass 99.4%" 
        width="950" 
        height="800" 
        frameborder="0" 
        scrolling="auto" 
        style={{ maxWidth: '100%' }}
      />
    </div>
</div>
  );
}

export default KaggleNotebook;
