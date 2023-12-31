import ProductComment from "../ProductComment/ProductComment";

import "./ProductComments.css";

export default function ProductComments({ product }) {
	const toShow =
		product["reviews"].length > 3
			? product["reviews"].slice(0, 3)
			: product["reviews"];
	return (
		<div className="product-comments">
			{toShow.map((review) => (
				<ProductComment review={review} />
			))}
		</div>
	);
}
