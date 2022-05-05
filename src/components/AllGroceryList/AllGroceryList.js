import React, { useState, useEffect } from 'react';
import './AllGroceryList.css';


export default function AllGroceryList() {
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
		<>
		<div id="cupboard-container">
		<img id="cupboard-image" className="animate__animated animate__zoomInDown" alt="" src='https://i.imgur.com/f53Oo7vm.jpg' />
		<h2 id="cupboard-title" className="animate__animated animate__zoomInDown">In my cupboard:</h2>
		<div key="">
			<div className="groceryList-container">
				{groceryList &&
					groceryList.map(GroceryList =>
						<div key={GroceryList.name}>
							<div id="return-container">

								<h3 className="animate__animated animate__zoomInDown">{GroceryList.name} ({GroceryList.howMuch} {GroceryList.unitMeasure} left)</h3>
							
							</div>
						</div>
					)
				}
			</div>
		</div>
		</div>
		</>
		);
}
