import { useEffect, useState } from "react"
import './clock.css'

const Clock = () => {

const [time, setTime] = useState(new Date());

useEffect(() => {

    const interval = setInterval(() => {
        setTime(new Date());
    }, 1000)

    return () => clearInterval(interval)
}, []);

const formatTime = (date) => {
    return date.toLocaleTimeString();
};

const formatDate = (data) => {
    return data.toLocaleDateString();

};

  return (
    <div className="container">
        <div className="clock">
            <h1>Digital Clock</h1>

            <h2>{formatTime(time)}</h2>
            <p>{formatDate(time)}</p>
        </div>
        <div className="animate-slide-in"></div>
    </div>
    
  )
}

export default Clock;
