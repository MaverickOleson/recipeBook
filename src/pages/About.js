import React, { useState } from 'react';

export default function About() {
    document.getElementById('root').className = 'about';
    const [infoIndex, setInfoIndex] = useState(0);
    const aboutInfo = [
        ['https://images.unsplash.com/photo-1506459225024-1428097a7e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hlZiUyMGRlc3NlcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', 'That Fateful Day', "In my hometown, there was a restaurant that had the best rootbeer. That restaurant does not exist anywhere but that town, and their rootbeer recipe is homemade. I tried finding a store-bought rootbeer that could suite my craving, but to no avail. I decided, if I wanted to ever taste that sweet rootbeer heaven again, I'd have to either go back to that town or make my own homemade rootbeer recipe. Fortunately, I found a glorious recipe online, and decided to save it."],
        ['https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ2dpbmclNUN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', 'Then...', "After that fateful day, I decided I wanted to create a list of all the best homemade dessert recipes I could find. Since then, I've been trying out all sorts of recipes and listing them here, in my DESSERT BLOG."],
        ['https://images.unsplash.com/photo-1565004584532-70f6f4d081e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGVhdGluZyUyMGRlc3NlcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', 'Now...', "To this day, I have been enjoying a delightful set of stored homemade dessert recipes that I love. This blog was one of the funnest things I've ever done, and I'm happy and proud to have made it."]
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
