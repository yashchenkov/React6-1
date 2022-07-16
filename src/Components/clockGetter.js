import React, { useEffect, useState } from 'react';

export default function ClockGetter(props) {
 	const [ clocks, setClocks ] = useState([]);
 	const { data } = props;
    if(data.length === 2) {
    	setClocks([...clocks, {
    		name: data[0],
    		timeZone: data[1],
    	}]);
    }
    if(clocks.length > 0) {
    	return(
    	<div>
    		{clocks}
    	</div>
       )
    }
}