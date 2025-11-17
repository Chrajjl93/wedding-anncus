import React, { useEffect, useState } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({});

  // Function to calculate time difference
  const calculateTimeLeft = () => {
    const now = new Date();
    const target = new Date(targetDate);
    const difference = target - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
  };

  useEffect(() => {
    // Update the countdown every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  return (

    <div className="countdown-timer-container">

      <div>
        <h3>{timeLeft.days}</h3>
        <p>Dagar</p>
      </div>

      <div>
        <h3>{timeLeft.hours}</h3>
        <p>Timmar</p>
      </div>

      <div>
        <h3>{timeLeft.minutes}</h3>
        <p>Minuter</p>
      </div>

      <div>
        <h3>{timeLeft.seconds}</h3>
        <p>Sekunder</p>
      </div>
    </div>

  );
};

export default CountdownTimer;