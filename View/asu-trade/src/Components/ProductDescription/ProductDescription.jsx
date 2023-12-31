import "./ProductDescription.css";

export default function ProductDescription({ product }) {
	return (
		<div className="product-description">
			<img src={product["image"]} />
			<div className="product-details">
				<h3>{product["price"]} EGP</h3>
				<p>{product["name"]}</p>
				<p>{product["seller"]["city"]}</p>
				<p>{product["seller"]["name"]}</p>
			</div>
		</div>
	);
}
