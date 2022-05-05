import React, {
	useState,
	useEffect
} from 'react';
import './ShoppingList.css'


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
		<>
	
		<div id="print-content" className="addGrocery">
		<div className="shoppingContainer">
		<div id="shopping-text"><h1>Shopping List </h1></div>
		<div key="">
		<div>
			{shoppingList && shoppingList.filter(shoppingList =>
				shoppingList.remaining < shoppingList.minimum).map(shoppingList =>
				<div key={shoppingList.name}>
				<h3 className="animate__animated animate__bounceInDown">
				 {shoppingList.name}: {shoppingList.remaining} {shoppingList.unitMeasure} left  [min: {shoppingList.minimum}]
				 </h3>
				</div>
			)
		} </div> 
		</div>
		</div> 
		</div>
	</>
	)
}