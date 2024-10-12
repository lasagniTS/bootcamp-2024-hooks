import { useState, useEffect } from "react";

const GoodAutoCounter = () => {
	// Counter value
	const [count, setCount] = useState(0);

	// Counter status (active or paused)
	const [isActive, setIsActive] = useState(true);

	// Effect to update the counter every second
	useEffect(() => {
		let intervalId: number | undefined;

		if (isActive) {
			// Activate the counter only if it's active
			intervalId = setInterval(() => {
				setCount((prevCount) => prevCount + 1);
			}, 1000);
		}

		// Cleanup: clear the interval when the component is unmounted or when isActive changes
		return () => {
			clearInterval(intervalId);
		};
	}, [isActive]); // Effect depends on isActive, so it starts/stops based on its value

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

export default GoodAutoCounter;
