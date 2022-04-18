import React, { useState, useEffect }from 'react';
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
    <section className="shopping-container">
		<div key="">
        <div className="addGrocery">
			<div className="shoppingContainer">
            <div id="shopping-text"> Shopping List</div>
				{shoppingList && shoppingList.filter(shoppingList =>
					shoppingList.howMuch > 0).map(shoppingList => 
                    <div key={shoppingList.name}>
                    <h3 className="animate__animated animate__bounceInDown">
                    <div id="nav4">
                  ==>  {shoppingList.name} {shoppingList.howMuch} - {shoppingList.eaten} -    {shoppingList.minimum}</div>  </h3>
						</div>
					)
				}
			</div>
            </div>
		</div>
        </section>
	</>
	)
}