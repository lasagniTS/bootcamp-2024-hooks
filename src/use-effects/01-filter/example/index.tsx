//@ts-ignore

import { useEffect, useState } from "react";

const UserList = ({ users, filterUsers }) => {
	const [filteredUsers, setFilteredUsers] = useState(users);

	useEffect(() => {
		console.log("Filtering users...");
		setFilteredUsers(filterUsers(users));
	}, [filterUsers, users]);

	return (
		<div>
			<h2>User List</h2>
			<ul>
				{filteredUsers.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</div>
	);
};

const UserManagement = () => {
	const [users] = useState([
		{ id: 1, name: "John Doe" },
		{ id: 2, name: "Jane Smith" },
		{ id: 3, name: "Alice Johnson" },
		{ id: 4, name: "Bob Brown" },
	]);

	const [filter, setFilter] = useState("");

	const handleFilterChange = (e) => {
		setFilter(e.target.value);
	};

	// Funzione di filtraggio passata al componente figlio
	const filterUsers = (users) => {
		return users.filter((user) => user.name.toLowerCase().includes(filter.toLowerCase()));
	};

	return (
		<div>
			<h1>User Management</h1>
			<input type="text" placeholder="Filter users by name" value={filter} onChange={handleFilterChange} />
			<UserList users={users} filterUsers={filterUsers} />
		</div>
	);
};

export default UserManagement;
