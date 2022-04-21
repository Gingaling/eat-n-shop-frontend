import React, { useState, useEffect } from 'react';

export default function EatenList() {
	const [eatenList, setEatenList] = useState([]);
	useEffect(() => {
		fetch(`https://kitchen-count.herokuapp.com/grocery/`)
			.then(response => {
				return response.json();
			})
			.then(data => {
				setEatenList(data);
			})
			.catch(error => {
				console.log('error');
			});
	}, []
);

	return (
		<>
		<body id="eaten">
		<div id="eaten-container">
		<img className="animate__animated animate__backInLeft" id="eaten-image" alt="" src='https://i.imgur.com/HtP5uigt.png' />
		<h1 id="eaten-title" className="animate__animated animate__zoomInDown">I have eaten:</h1>
		<div key="">
			<div>
				{eatenList && eatenList.filter(eatenList =>
					eatenList.eaten > 0).map(eatenList =>
						<div key={eatenList.name}>
							<h3 className="animate__animated animate__bounceInDown">
								{eatenList.Date}: {eatenList.name} ({eatenList.eaten} {eatenList.unitMeasure})
							</h3>
						</div>
					)			
				}
			</div>
		</div>
		</div>
		</body>
		</>
	)
}
