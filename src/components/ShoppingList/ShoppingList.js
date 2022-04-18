// import React, { useState, useEffect }from 'react';

// export default function ShoppingList() {
// 	const [shoppingList, setShoppingList] = useState([]);
// 	useEffect(
// 		() => {
// 			fetch(`https://eat-n-shop-api.herokuapp.com/grocery/`)
// 				.then(response => {
// 					return response.json();
// 				})
// 				.then(data => {
// 					setShoppingList(data);
// 				})
// 				.catch(error => {
// 					console.log('error');
// 				});
// 		},
// 		[]
// 	);

// 	return (
// 	<>
// 		<div key="">
// 			<div>
// 				{shoppingList && shoppingList.map(shoppingList =>
// 					{shoppingList.howMuch - shoppingList.eaten < shoppingList.minimum} === true).map(shoppingList =>
// 						<div key={shoppingList.name}>
// 							<h3> className="animate__animated animate__bounceInDown">
// 							{shoppingList.name} ({shoppingList.howMuch - shoppingList.eaten} {shoppingList.unitMeasure} left)
// 							</h3>
// 						</div>
// 					)
// 				}
// 			</div>
// 		</div>
// 	</>
// 	)
// }