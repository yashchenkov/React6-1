import React, { useState, useEffect } from 'react';
import moment from 'moment';

export default function Clock(props) {
  const [ hours, setHours ] = useState();
  const [ minutes, setMinutes ] = useState();
  const [ seconds, setSeconds ] = useState();
  const { name, timeZone, time, id, remove } = props;
  

  useEffect(() => {
    const intervalId = setInterval(() => {
      const time = moment();

      setHours(time.hours() - (time.utcOffset() / 60) + parseInt(timeZone));
      setMinutes(time.minutes());
      setSeconds(time.seconds());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return(
    <div className="clock">
  	<label>
  	  <span className="name">{name}</span>
  	  <div>
  	    <span>{hours}:</span>
  	    <span>{minutes}:</span>
  	    <span>{seconds}</span>	
  	  </div>
  	  <button type="submit" 
  	     onClick={() => {
		   remove(id);
		 }}>bip</button>
  	</label>
    </div>
  	)

}