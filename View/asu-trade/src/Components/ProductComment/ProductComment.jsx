import "./ProductComment.css";

export default function ProductComment({ review }) {
	return (
		<div className="product-comment">
			<h3>{review["user"]}</h3>
			<p>{review["review"]}</p>
		</div>
	);
}
