import React, { useState } from 'react';

export default function About() {
    document.getElementById('root').className = 'about';
    const [infoIndex, setInfoIndex] = useState(0);
    const aboutInfo = [
        ['img1', 'Title1', 'text1'],
        ['img2', 'Title2', 'text2'],
        ['img3', 'Title3', 'text3']
    ];
    return (
        <>
            <div className="imgCarou">
                <img src={aboutInfo[infoIndex][0]} alt={aboutInfo[infoIndex][1]} />
                <div className="leftArrow" onPointerDown={() => {
                    setInfoIndex((infoIndex === 0) ? aboutInfo.length - 1 : infoIndex - 1);
                }} />
                <div className="rightArrow" onPointerDown={() => {
                    setInfoIndex((infoIndex === aboutInfo.length - 1) ? 0 : infoIndex + 1);
                }} />
            </div>
            <h1>{aboutInfo[infoIndex][1]}</h1>
            <p>{aboutInfo[infoIndex][2]}</p>
        </>
    )
}
