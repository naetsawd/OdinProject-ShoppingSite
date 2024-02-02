import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import siteLogo from "../assets/siteLogo.png";

function Navbar() {
	return (
		<nav className="navbar">
			<Link to="/" className="site-logo">
				<img src={siteLogo}></img>
				<h1>JewelQuest</h1>
			</Link>

			<ul className="nav-links">
				<li>
					<Link to="shop">Products</Link>
				</li>
				<li>
					<Link to="#">About</Link>
				</li>
				<li>
					<Link to="#">Contact</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
