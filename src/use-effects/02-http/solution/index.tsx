import { useEffect } from "react";
import type { Todo } from "../types";
import { useTodos } from "./useTodos";

const TodoElement = ({ todo }: { todo: Todo }) => {
	return (
		<div className={todo.completed ? "stroked" : ""}>
			{todo.title}
			<input type="checkbox" checked={todo.completed} readOnly={true} />
		</div>
	);
};

const TodoList = () => {
	const { data, loading, error, fetch } = useTodos();

	useEffect(() => {
		fetch();
	}, [fetch]);

	return (
		<div>
			{/* <button type="button" onClick={fetch}>
				Fetch
			</button> */}
			{loading && <p>Loading...</p>}
			{error && <p>Error: {error.message}</p>}
			{data.map((todo) => (
				<TodoElement key={todo.id} todo={todo} />
			))}
		</div>
	);
};

export default TodoList;
