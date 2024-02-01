import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
	return (
		<>
			<Link to="/">Home</Link>
			<Link to="shop">Shop</Link>
		</>
	);
}

export default Navbar;
