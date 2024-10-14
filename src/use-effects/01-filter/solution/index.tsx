import { useState, useCallback } from "react";

// Example product data
const productList = [
	{ id: 1, name: "Apple", price: 1.5 },
	{ id: 2, name: "Banana", price: 0.9 },
	{ id: 3, name: "Orange", price: 1.2 },
	{ id: 4, name: "Mango", price: 2.0 },
];

function FilterableProductList() {
	// State for the search input
	const [searchTerm, setSearchTerm] = useState("");

	// Memoized function to filter the products based on the search term
	const filterProducts = useCallback(() => {
		console.log("I'm searching for: ", searchTerm);
		return productList.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
	}, [searchTerm]); // Memoized based on the search term

	// Handle search input changes
	const handleSearchChange = (e) => {
		setSearchTerm(e.target.value);
	};

	return (
		<div>
			<h1>Product List</h1>
			<input type="text" placeholder="Search products..." value={searchTerm} onChange={handleSearchChange} />
			<ul>
				{/* Render the filtered list */}
				{filterProducts().map((product) => (
					<li key={product.id}>
						{product.name} - ${product.price.toFixed(2)}
					</li>
				))}
			</ul>
		</div>
	);
}

export default FilterableProductList;
