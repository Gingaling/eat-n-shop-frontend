import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Form.css';

function Form() {
	const navigate = useNavigate();
	const [grocery, setGrocery] = useState({
		name: '',
		howMuch: 0,
		eaten: 0,
		remaining: 0,
		minimum: 0,
		img: '',
		unitMeasure: '',
		purchased: false,
		type: 'grocery',
		Date: ''
	});

	const handleChange = event => {
		setGrocery({ ...grocery, [event.target.id]: event.target.value });
	};

	const handleSubmit = event => {
		event.preventDefault();
		console.log(grocery);
		axios
			.post(`https://eat-n-shop-api.herokuapp.com/grocery/`, grocery)
			.then(res => {
				console.log(res);
				if (res.status === 200) {
					navigate('/');
				} else {
					alert(
						"We're sorry. We were not able to process your request. Please try again."
					);
				}
			})
			.catch(err => console.log(err));
	};

	return (
		<>
		<div className="master-container">
			<div className="form-container">
				<div className="form-child">
					<div className="card-title">
						Add A Grocery Item to Your Inventory or Track What You Have Eaten
					</div>
					<form onSubmit={handleSubmit} className="addForm">
						<div className="addDetails-container">
							<div className="name-container">
								<div className="name-label">
									<label htmlFor="name">name</label>
								</div>
								<div className="name-input">
									<input
										onChange={handleChange}
										type="text"
										id="name"
										value={grocery.name}
										placeholder="name of grocery or food"
										required
									/>
								</div>
							</div>
							<div className="howMuch-container">
								<label htmlFor="howMuch">amount on hand</label>
								<div className="howMuch-input">
									<input
										onChange={handleChange}
										id="howMuch"
										value={grocery.howMuch}
										placeholder="amount"
									/>
								</div>
							</div>
							<div className="eaten-container">
								<label htmlFor="eaten">amount consumed</label>
								<div className="eaten-input">
									<input
										onChange={handleChange}
										id="eaten"
										value={grocery.eaten}
										placeholder="amount"
									/>
								</div>
							</div>
							<div className="minimum-container">
								<label htmlFor="minimum">my minimum</label>
								<div className="minimum-input">
									<input
										onChange={handleChange}
										id="minimum"
										value={grocery.minimum}
										placeholder="amount"
									/>
								</div>
							</div>
							<div className="unitMeasure-container">
								<label htmlFor="unitMeasure">unit of measurement</label>
								<div className="unitMeasure-input">
									<input
										onChange={handleChange}
										id="unitMeasure"
										value={grocery.unitMeasure}
										placeholder="unit"
									/>
								</div>
							</div>{' '}
							<div className="purchased-container">
								<div className="purchased-label">
									<label htmlFor="purchased">purchased?</label>
								</div>
								<div className="purchased-input">
									<input
										onChange={handleChange}
										id="purchased"
										value={grocery.purchased}
										placeholder="false"
									/>
								</div>
							</div>{' '}
							<div className="Date-container">
								<div className="Date-label">
									<label htmlFor="Date">date of activity</label>
								</div>
								<div className="Date-input">
									<input
										onChange={handleChange}
										id="Date"
										value={grocery.Date}
										placeholder="yyyy-mm-dd"
									/>
								</div>
							</div>
							<div className="type-container">
								<div className="type-label">
									<label htmlFor="type">type of grocery</label>
								</div>
								<div className="type-input">
									<input
										onChange={handleChange}
										id="type"
										value={grocery.type}
										placeholder="type"
									/>
								</div>
							</div>
						<div className="addGroceryButton-container">
							<button type="submit" className="addGroceryButton">
								Submit to Update{' '}
							</button>
						</div>
						</div>
					</form>
				</div>
				</div>
		</div>
	</>
	);
}

export default Form;
