import React from 'react'
import '../../App.css';
import '../../simple.css';

import SCPData from '../../SCP.json';
function SCP() {
    return (
        <div>
        <div className='hero-container'>
      <video alt="Background" src='../../videos/SCP Foundation Logo Animation -trailers logo version-.mp4' autoPlay loop muted />
      <h1>Information on SCP</h1>
      <p>SCP Foundation Archives</p>
    </div>
        <div>
           <div className="content">
           {scps}
           </div>
        </div>
        
        </div> 
    )
}
const scps = SCPData.map(
    (SCPData) => {
    return(
    <div key={SCPData.name}>
    <h1>{SCPData.name}</h1>
    <p><img alt="SCP Images"src={SCPData.image}/></p>
    <h2>{SCPData.objectclass}</h2>
    <h2>{SCPData.con}</h2>
    <p>{SCPData.contain}</p>
    <h2>{SCPData.dis}</h2>
    <p>{SCPData.description}</p>
    <h2>{SCPData.refr}</h2>
    <p>{SCPData.ref}</p>
    <h2>{SCPData.history}</h2>
    <p>{SCPData.his}</p>
    <h2>{SCPData.no}</h2>
    <p>{SCPData.notes}</p>
    <h2>{SCPData.add}</h2>
    <p>{SCPData.adden}</p>
    
    </div>
    );
    }
   );
   

export default SCP