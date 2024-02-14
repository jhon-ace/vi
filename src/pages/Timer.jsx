import React, { useState, useEffect } from 'react';
import { Outlet, Link, NavLink } from "react-router-dom";

export default function Timer(){
    const [timeLeft, setTimeLeft] = useState(5);
    const [showMessage, setShowMessage] = useState(false); 
    const [showMemories, setShowMemories] = useState(false);
   


  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(prevTime => prevTime - 1); 
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      setShowMessage(true); 
    }
  }, [timeLeft]);

  useEffect(() => {
    if (showMessage) {
      const delay = setTimeout(() => {
        setShowMemories(true);
      }, 3000); // Adjust the delay time as needed
      return () => clearTimeout(delay);
    }
  }, [showMessage]);


    return(
        <>
            {!showMessage && (
          <b><div className="timer">{timeLeft}</div></b>
        )}
        {showMessage && (
          <div className="container">
            <div className="animation">
              Hey love 😘, just wanted to say hi and remind you how special you are to me. Hope you're having a wonderful day!
            </div>
            {showMemories && (
              <div>
                <div className="memories">
                  Sharing you some memories we've shared together..


                </div>
              </div>
            )}
          </div>
        )}
        
        <Outlet />
        </>
  
    );
}