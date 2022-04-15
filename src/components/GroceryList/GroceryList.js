import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

export default function GroceryList() {
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
					groceryList.map(GroceryList =>
						<div key={GroceryList.name}>
							<h2>
								{GroceryList.name} - {GroceryList.howMuch}
							</h2>
						</div>
					)}
			</div>
		</div>
	);
}
