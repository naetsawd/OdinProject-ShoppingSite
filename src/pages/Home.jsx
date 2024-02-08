import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import img1 from "../assets/carousel1.jpg";
import img2 from "../assets/carousel2.jpg";
import img3 from "../assets/carousel3.jpg";
import img4 from "../assets/carousel4.jpg";
import img5 from "../assets/carousel5.jpg";

function Home() {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const images = [img1, img2, img3, img4, img5];
	const delay = 4500;
	const carouselRef = useRef(null);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentImageIndex(
				(prevIndex) => (prevIndex + 1) % (images.length + 1)
			);
		}, delay);

		return () => clearInterval(intervalId);
	}, [images.length, delay]);

	useEffect(() => {
		if (currentImageIndex === images.length) {
			setTimeout(() => {
				setCurrentImageIndex(0);
				carouselRef.current.style.transition = "none";
				setTimeout(() => {
					carouselRef.current.style.transition = "transform 0.5s ease";
				}, 50);
			}, 500);
		}
	}, [currentImageIndex, images.length]);

	return (
		<>
			<div className="hero">
				<div className="hero-welcome">
					<h2>Welcome to JewelQuest!</h2>
					<Link to="shop">Shop Now</Link>
				</div>

				<div
					className="hero-carousel"
					ref={carouselRef}
					style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
				>
					{images.map((image, index) => (
						<img key={index} src={image} alt={`carousel-${index}`} />
					))}
					<img src={images[0]} alt={"carousel-1"} />
				</div>
			</div>
		</>
	);
}

export default Home;
