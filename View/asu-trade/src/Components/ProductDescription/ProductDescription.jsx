import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartS } from "@fortawesome/free-solid-svg-icons";
import "./ProductDescription.css";
import { useState } from "react";

export default function ProductDescription({ product }) {
	const [isWishlisted, setIsWishlisted] = useState(false);

	return (
		<div className="product-description">
			<img src={product["image"]} />
			<section className="product-details">
				<div>
					<h3 className="product-price">{product["price"]} EGP</h3>
					<p>{product["name"]}</p>
					<p>{product["seller"]["city"]}</p>
					<p className="seller-name">{product["seller"]["name"]}</p>
				</div>
				<FontAwesomeIcon
					icon={isWishlisted ? faHeartS : faHeart}
					className="heart-icon"
					onClick={() => {
						setIsWishlisted((isWishlisted) => !isWishlisted);
					}}
				/>
			</section>
			<h2>Description</h2>
			<section className="description">{product["description"]}</section>
		</div>
	);
}
