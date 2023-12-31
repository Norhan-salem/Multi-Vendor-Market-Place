import AddComment from "../../AddComment/AddComment";
import ProductComments from "../ProductComments/ProductComments";

import "./ProductReviews.css";

export default function ProductReviews({ product }) {
	return (
		<div className="product-reviews">
			<AddComment />
			<ProductComments product={product} />
		</div>
	);
}
