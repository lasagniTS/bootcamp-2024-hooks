import { useCallback, useState } from "react";
import type { Todo } from "../types";


export const useTodos = () => {
    const [data, setData] = useState<Todo[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchTodos = useCallback(() => {
        setLoading(true);
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => setError(error))
            .finally(() => {
                setLoading(false);
            })
    }, []);

    return { data, loading, error, fetch: fetchTodos };
};