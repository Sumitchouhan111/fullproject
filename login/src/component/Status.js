import React from 'react';
import gpg from '../gpg.webp';

function Status() {
  return (
    <div className="bg-black d-flex justify-content-center row overflow-auto" style={{ height: "100%" }}>
      {Array.from({ length: 36 }).map((_, index) => (
        <div className="cardd form-container m-3" style={{ width: "400px", padding: "10px", backgroundColor: "#333", borderRadius: "8px" }} key={index}>
          <div className="d-flex align-items-center">
            {/* Image on the left */}
            <div  className='form-container' style={{ width: "100px", height: "100px", overflow: "hidden", borderRadius: "50%" }}>
              <img src={gpg} alt="profile" style={{ width: "100%", height: "100%", objectFit: "cover" }}  />
            </div>
            {/* Text on the right */}
            <div className="ms-3" style={{ color: "white" }}>
              <p style={{ color: "red", marginBottom: "0" }}>Your paragraph text here</p>
              <p style={{ fontSize: "0.9em" }}>Additional details or text can go here.</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Status;
