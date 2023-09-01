// eslint-disable-next-line no-unused-vars
import React from 'react';

const Experience = () => {
  return (
    <div className="Experience" style={{ width: 1220, height: 768, position: 'relative' }}>
      <div className="Img2" style={{ width: 610, height: 292.82, left: 94.05, top: 213.19, position: 'absolute', background: 'rgba(0, 0, 0, 0.20)' }}   >
        
        <img className="Mask" style={{  height: 292.82, left: 0, top: 0, position: 'absolute' }} src="./download.jpg" alt="" />
        <div className="experience" style={{ height: 467.05, left: 0, top: -79.53, position: 'absolute', background: 'rgba(255, 255, 255, 0.48)' }} />
      </div>
      <div className="Img1" style={{  height: 465.84, left: 626.39, top: 175.42, position: 'absolute', background: '#C4C4C4', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
        <img className="Img" style={{  height: 465.84 }} src="./aerobotics.png" alt="" />
      </div>
    </div>
  );
};

export default Experience;
