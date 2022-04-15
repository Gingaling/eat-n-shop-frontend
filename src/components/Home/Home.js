import './Home.css';
import { useState } from 'react';
import 'animate.css';
import { Link } from 'react-router-dom';

export default function Home({ genre }) {
	const [searchGenre, setSearchGenre] = useState('');
	function handleSelect(e) {
		setSearchGenre(e.target.value);
		console.log(searchGenre);
	}

	return <main id="main-content">
			<div id="grocery-container">
				<div>
					<div className="home-CTA">
						{' '}Keeping Track of Your Cupboard & Cooking for <span>Smarter Shopping</span>{' '}
					</div>
				</div>
				<div id="top-nav-bar-">
					<nav className="navs" id="nav-genres">
						<div className="animate__flip">
							<ul className="nav-ul">
								<Link to="/list">
									<li className="navs">Current Inventory</li>
								</Link>
								<Link to="/eaten">
									<li className="navs">What I Have Eaten</li>
								</Link>
								<Link to="/ShoppingList">
									<li className="navs">Shopping List</li>
								</Link>
								<Link to="/add-grocery">
									<li className="navs">
										{' '}Add a grocery or record your eating
									</li>
								</Link>
							</ul>
						</div>
					</nav>
				</div>
				<img id="splash-image" src="https://cdn.pixabay.com/photo/2012/04/03/22/49/fruits-25266_960_720.jpg" alt="" id="grocery-img" />
			</div>
		</main>;
}
