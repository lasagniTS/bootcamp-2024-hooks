import ExampleRow from "./example-row";
import "./example-table.css";

const ExampleTable = () => {
	return (
		<div className="table-container">
			<table className="exercise-table">
				<thead>
					<tr>
						<th>Example</th>
						<th className="bad">Wrong way</th>
						<th className="good">Good way</th>
					</tr>
				</thead>
				<tbody>
					<ExampleRow description="Automatic Counter" name="00-counter" category="use-effects" />
					<ExampleRow description="Make a query" name="02-http" category="use-effects" />
					<ExampleRow description="Filter a list" name="01-filter" category="use-effects" />
				</tbody>
			</table>
		</div>
	);
};

export default ExampleTable;
