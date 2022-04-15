import React from 'react';
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

	return (
		key="">
			<div className="groceryList-container">
				{shoppingList &&
					shoppingList.filter(ShoppingList =>
					<div key={ShoppingList.name}, ({ShoppingList.onHand} - {ShoppingList.eaten} < {ShoppingList.minimum}) ?
						<h2>{ShoppingList.name}</h2> : {console.log('condition unmet')}
					</div>
				)}
				<h2>shoppingList.name</h2>
			</div>
		</div>
	);
}
