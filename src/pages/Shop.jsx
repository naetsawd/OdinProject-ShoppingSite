import { useEffect, useState } from "react";
import "../styles/shop.css";
import bannerImg from "../assets/shopBanner.jpg";

function Shop() {
	const [jewelry, setJewelry] = useState([]);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products/category/jewelery")
			.then((res) => res.json())
			.then((json) => setJewelry(json))
			.catch((error) => console.error("Error fetching jewelry:", error));
	}, []);

	return (
		<>
			<div className="shop-banner">
				<h2>Shop</h2>
				<img src={bannerImg}></img>
			</div>

			<div className="products-container">
				{jewelry.map((item) => (
					<div key={item.id} className="product-card">
						<img className="product-img" src={item.image}></img>
						<h3 className="product-name">{item.title}</h3>
						<h3 className="product-price">{item.price}</h3>
					</div>
				))}
			</div>
		</>
	);
}

export default Shop;
