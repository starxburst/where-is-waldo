import React from 'react';
import '../style/StopWatch.css'


function Stopwatch(props) {
  const {
    seconds,
    minutes,
  } = props;


  return (
    <div className='stop-watch-container' style={{textAlign: 'center'}}>
      <span>{minutes}</span>:<span>{seconds}</span>
    </div>
  );
}

export default Stopwatch;