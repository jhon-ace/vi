import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import './assets/css/style.css';
import one from './assets/img/a.jpg';
import two from './assets/img/b.jpeg';
import three from './assets/img/c.jpg';
import four from './assets/img/d.jpeg';
import five from './assets/img/e.jpg';


export default function App() {
  const [timeLeft, setTimeLeft] = useState(5);
  const [showMessage, setShowMessage] = useState(false);
  const [showMemories, setShowMemories] = useState(false);
  const [showSplide, setShowSplide] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);

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
      }, 5000); // Adjust the delay time as needed
      return () => clearTimeout(delay);
    }
  }, [showMessage]);

  useEffect(() => {
    if (showMemories) {
      const delay = setTimeout(() => {
        setShowSplide(true);
      }, 2000); // Adjust the delay time as needed
      return () => clearTimeout(delay);
    }
  }, [showMemories]);

  useEffect(() => {
    if (showMemories) {
      const delay = setTimeout(() => {
        setShowGreeting(true);
      }, 2000); // Adjust the delay time as needed
      return () => clearTimeout(delay);
    }
  }, [showMemories]);

  return (
    <>
      {!showMessage && <b><div className="timer">{timeLeft}</div></b>}
      {showMessage && (
        <div className="container">
          <div className="animation">
            Hey love 😘, just wanted to say hi and remind you how special you are to me. Hope you're having a wonderful day!
          </div>
          {showMemories && (
            <div>
              <div className="memories"><br />
                Sharing you some memories we've shared together..<br />
                ↓ Scroll down  ↓<br /><br /><br />
              </div>

             
            </div>
          )}
           
        </div>
        
      )}
 
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          {showSplide && (
            
              <SplideTrack style={{ textAlign: "center" }}>
                <Splide aria-label="My Favorite Images">
                  <SplideSlide className='hiw'>
                      <img src={one} alt="Image 1" width="600px" height="600px"/>                  
                  </SplideSlide>
                  <SplideSlide>
                    <img src="image2.jpg" alt="Image 2" />
                  </SplideSlide>
                </Splide>
              </SplideTrack>

          )}
    
         </div> 
         {showGreeting && (
            
            <h2>Happy Valentine's Day! ❤️</h2> 

        )}
           
    </>
  );
}
