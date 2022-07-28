import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Clock from './clock';


export default function ClockGetter(props) {
 	const [ clocks, setClocks ] = useState([]);
   const { data } = props;

   const del = (id) => {
        
   }

   useEffect(() => {
     console.log(clocks)
      if(data.length === 3) {
    	  setClocks([...clocks, {
    		  name: data[0],
    		  timeZone: data[1],
           time: data[2],
           id: nanoid(),
    	  }]);
      }
      }, [props.data]);
    if(clocks.length > 0) {
    	return(
    	<div className="clockGetter">
    		{clocks.map(clock => {
            return <Clock {...clock} remove={(id) => {
               setClocks(clocks.filter(o => o.id !== id))
            }
            }/>
         })}
    	</div>
       )
    }
}