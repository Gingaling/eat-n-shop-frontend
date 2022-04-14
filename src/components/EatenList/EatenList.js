import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import Grocery from '../../../../models/Grocery';

export default function EatenList() {
	const [groceryList, setGroceryList] = useState([]);
	const { type } = useParams();
	useEffect(
		() => {
			fetch(`https://eat-n-shop5.herokuapp.com//grocery/type/${''}`)
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
		[type]
	);

	return (
		<div key="">
			<div className="groceryList-container">
				{groceryList &&
					groceryList.filter(GroceryList =>
						<div
							key={GroceryList.eaten
								GroceryList.onHand - GroceryList.eaten < GroceryList.minimum
							}>
							<h2>
								{GroceryList.name}
							</h2>
						</div>
					)}
			</div>
		</div>
	);
}
