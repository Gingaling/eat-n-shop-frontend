import React, { useState, useEffect }from 'react';
// import GroceryList from 'GroceryList';

export default function ShoppingList() {
	const [shoppingList, setShoppingList] = useState([]);
	useEffect(
		() => {
			fetch(`https://eat-n-shop-api.herokuapp.com/grocery/`)
				.then(response => {
					return response.json();
				})
				.then(data => {
					setShoppingList(data);
				})
				.catch(error => {
					console.log('error');
				});
		},
		[]
	);

	return <main>
			shoppingList.grocery.map(grocery) => (
			{shoppingList.howMuch - shoppingList.eaten < shoppingList.minimum ? <h2>
						shoppingList[name]</h2> : console.log('condition unmet')}
		</main>;
		// key="">
		// 	<div className="groceryList-container">
		// 		{shoppingList &&
		// 			shoppingList.filter(key={ShoppingList,name}), ShoppingList =>
		// 			{shoppingList.howMuch} - {shoppingList.eaten} < {shoppingList.minimum} ?
		// 				<h2>{ShoppingList.name}</h2> : {console.log('condition unmet')}
		// 			</div>
		// 		)}
		// 		<h2>shoppingList.name</h2>
		// 	</div>
		// </div>
}
