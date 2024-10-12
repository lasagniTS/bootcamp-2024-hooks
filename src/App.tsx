import "./App.css";
import logoTs from "./assets/logo-ts.png";
import ExerciseTable from "./components/exercise-table";

function App() {
	return (
		<>
			<div>
				<a href="https://www.teamsystem.com" target="_blank" rel="noreferrer">
					<img src={logoTs} className="logo" alt="React logo" />
				</a>
			</div>
			<h1>Bootcamp 2024: Hooks</h1>

			<ExerciseTable />
		</>
	);
}

export default App;
