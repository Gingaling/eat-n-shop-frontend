import React, { useState, useEffect } from 'react';
// import GroceryList from 'GroceryList';

export default function ShoppingList() {
	const [groceryList, setGroceryList] = useState([]);
	useEffect(
		() => {
			fetch(`https://eat-n-shop-api.herokuapp.com/grocery/`)
				.then(response => {
					return response.json();
				})
				.then(data => {
					setGroceryList(data);
				})
				.catch(error => {
					console.log('error');
				});
		},
		[]
	);

	return (
		<div key="">
			<div className="groceryList-container">
				{groceryList &&
					groceryList.filter(GroceryList =>
						<div key={GroceryList.onHand - GroceryList.eaten < GroceryList.minimum}>
							<h2>
								{GroceryList.name}
							</h2>
						</div>
					)}
			</div>
		</div>
	);
}
