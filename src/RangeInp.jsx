import { useState } from 'react'

const RangeInp = () => {
	const [ count, setCount ] = useState('0')
	return (
		<>
			<input id='range' type='range' min={0} max={100} step={20}/>
			<label htmlFor='range'>{count}</label>
			<h1>{setCount}</h1>
		</>
	)
}

export default RangeInp
