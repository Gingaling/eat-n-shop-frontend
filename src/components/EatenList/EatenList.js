import React, { useState, useEffect } from 'react';

export default function EatenList() {
	const [eatenList, setEatenList] = useState([]);
	useEffect(() => {
		fetch(`https://eat-n-shop-api.herokuapp.com/grocery/`)
			.then(response => {
				return response.json();
			})
			.then(data => {
				setEatenList(data);
			})
			.catch(error => {
				console.log('error');
			});
	}, []);

	return (
		<div key="">
			<div className="groceryList-container">
				{eatenList &&
					eatenList.map(EatenList =>
						<div key={EatenList.name}>
							<h2>
								{EatenList.date}: {EatenList.name} - {EatenList.eaten}
							</h2>
						</div>
					)}
			</div>
		</div>
	);
}
