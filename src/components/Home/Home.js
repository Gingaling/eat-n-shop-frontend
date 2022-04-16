import 'animate.css';
import './Home.css';
import 'animate.css';
import { Link } from 'react-router-dom';

export default function Home() {
	// const [searchGenre, setSearchGenre] = useState('');
	// function handleSelect(e) {
	// 	setSearchGenre(e.target.value);
	// 	console.log(searchGenre);
	// }

	return (
		<main id="main-content">
		{/* <img alt="" src="https://imgur.com/FnJvazH" /> */}
			<div id="grocery-container">
				<div>
					<div className="home-CTA">
						<div>
							Keeping Track of Your Cupboard and Cooking for{' '}
							<span>Smarter Shopping</span>
						</div>
					</div>
					<div id="top-nav-bar-">
						<nav className="navs" id="nav-genres">
							<div className="animate_animated animate_flip">
								<ul className="nav-ul">
									<Link to="/list">
										<div id="zz">
											<li className="navs">
												<div id="icon-border">
													<img
														id="icon-cupboard"
														alt=""
														src="https://i.imgur.com/VmOS67Kh.png"
													/>My Cupboard
												</div>
											</li>
										</div>
									</Link>
									<Link to="/eaten">
										<div id="zz">
											<li className="navs">What I Have Eaten</li>
										</div>
									</Link>
									<Link to="/shop">
										<div id="zz">
											<li className="navs">Shopping List</li>
										</div>
									</Link>
									<Link to="/add-grocery">
										<div id="zz">
											<li className="navs">
												Add a grocery or record your eating
											</li>
										</div>
									</Link>
								</ul>
							</div>
						</nav>
					</div>
					<img
						id="splash-image"
						alt=""
						src="https://cdn.pixabay.com/photo/2012/04/03/22/49/fruits-25266_960_720.jpg"
					/>
				</div>
			</div>
		</main>
	);
}
