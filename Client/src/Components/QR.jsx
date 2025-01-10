import React, { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';

const QR = () => {
    const boeing = "One notable artifact at the Nehru Science Centre in Mumbai is Air Indias first-ever Boeing 747-200 Flight Simulator. Acquired in 1980, it was once the most advanced tool for pilot training. The simulator replicated every aspect of the Boeing 747-200’s controls and operations, offering pilots a highly realistic flight experience. It was equipped with a six-degree motion system, using hydraulic jacks to simulate the aircrafts movements, such as rolling, pitching, and yawing.";
    const show = "Another fascinating artifact at the Nehru Science Centre is the Light and Sound Show on the Indus Valley Civilization. This exhibit combines visual and audio elements to recreate scenes from one of the world's oldest civilizations. It showcases important aspects of the Indus Valley, such as urban planning, trade, and daily life, through interactive displays.";
    return (
        <div className="qr-container" style={{marginTop: "20px", marginBottom: "20px", backgroundColor: "#f5f5f5", paddingLeft: "20px", paddingRight: "20px", paddingTop: "10px", paddingBottom: "10px", borderRadius: "8px" , alignItems: "center"}}>
            <QRCode value={boeing} size={256} />
            <QRCode value={show} size={256} style={{marginTop: "20px"}} />
            
        </div>
    );
};

    export default QR;