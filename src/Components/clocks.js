import React, { useState } from 'react';
import ClockSetter from './clockSetter';
import ClockGetter from './clockGetter';

export default function Clocks() {
	const [ data, setData ] = useState([]);

	const submit = (name, timeZone, time) => {
		setData([name, timeZone, time]);
		console.log(data);
	}

	return(
		<div>
			<ClockSetter submit={submit} />
			<ClockGetter data={data} />
		</div>
		)

}