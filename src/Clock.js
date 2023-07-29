
import React, { useEffect } from 'react';

function Clock() {
  useEffect(() => {
    const updateClock = () => {
      const d = new Date();
      const hTime = d.getHours();
      const mTime = d.getMinutes();
      const sTIme = d.getSeconds();
      const hRotation = 30 * hTime + mTime / 2;
      const mRotation = 6 * mTime;
      const sRotation = 6 * sTIme;
      
      const hour = document.getElementById('hour');
      const minute = document.getElementById('minute');
      const second = document.getElementById('second');
      
      if (hour && minute && second) {
        hour.style.transform = `rotate(${hRotation}deg)`;
        minute.style.transform = `rotate(${mRotation}deg)`;
        second.style.transform = `rotate(${sRotation}deg)`;
      }
    };

    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="clockContainer">
      <div id="hour"></div>
      <div id="minute"></div>
      <div id="second"></div>
    </div>
  );
}

export default Clock;
