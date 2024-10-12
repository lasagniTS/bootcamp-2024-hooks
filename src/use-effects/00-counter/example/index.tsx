import { useEffect, useState } from "react";

const VeryBadAutocounter = () => {
	// Counter value
	const [count, setCount] = useState(0);

	// Counter status (active or paused)
	const [isActive, setIsActive] = useState(true);

	let intervalId: number | undefined;
	if (isActive) {
		// Activate the counter only if it's active
		intervalId = setInterval(() => {
			setCount((prevCount) => prevCount + 1);
		}, 1000);
	}

	useEffect(() => {
		return () => {
			clearInterval(intervalId);
		};
	});

	// Function to toggle the counter status
	const toggleCounter = () => {
		setIsActive(!isActive);
	};

	return (
		<div>
			<h3>Automatic counter: {count}</h3>
			<button type="button" onClick={toggleCounter}>
				{isActive ? "Pause" : "Restart"}
			</button>
		</div>
	);
};

export default VeryBadAutocounter;
