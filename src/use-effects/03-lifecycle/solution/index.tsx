import { useEffect, useState } from "react";

const DisplayValue = ({ counter }: { counter: number }) => {
	console.log("DisplayValue rendered");
	useEffect(() => {
		console.log("DisplayValue mounted");
		return () => {
			console.log("DisplayValue unmounted");
		};
	}, []);

	return <p>Counter: {counter}</p>;
};

const Lifecycle = () => {
	const [counter, setCounter] = useState(0);

	const increment = () => {
		setCounter(counter + 1);
	};

	return (
		<>
			<DisplayValue counter={counter} />
			<button type="button" onClick={increment}>
				Increment
			</button>
		</>
	);
};

export default Lifecycle;
