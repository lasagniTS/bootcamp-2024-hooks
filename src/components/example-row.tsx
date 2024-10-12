import { lazy, Suspense, useId, useState } from "react";
import "./example-row.css";

const ExampleRow = ({ name, category, description }: { category: string; name: string; description?: string }) => {
	const rowId = useId();

	const BadExample = lazy(() => import(/* @vite-ignore */ `./../${category}/${name}/example`));
	const GoodExample = lazy(() => import(/* @vite-ignore */ `./../${category}/${name}/solution`));

	const [showBad, setShowBad] = useState(false);
	const [showGood, setShowGood] = useState(false);

	return (
		<tr key={rowId}>
			<td>{description ?? name}</td>
			<td>
				<button type="button" className="toggle-btn bad" onClick={() => setShowBad(!showBad)}>
					{showBad ? "Hide" : "Show"} Bad
				</button>
				{showBad && (
					<Suspense fallback={<div>Loading...</div>}>
						<BadExample />
					</Suspense>
				)}
			</td>
			<td>
				<button type="button" className="toggle-btn good" onClick={() => setShowGood(!showGood)}>
					{showGood ? "Hide" : "Show"} Good
				</button>
				{showGood && (
					<Suspense fallback={<div>Loading...</div>}>
						<GoodExample />
					</Suspense>
				)}
			</td>
		</tr>
	);
};

export default ExampleRow;
