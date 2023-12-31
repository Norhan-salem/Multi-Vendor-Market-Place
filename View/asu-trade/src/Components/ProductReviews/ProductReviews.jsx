import AddComment from "../../AddComment/AddComment";
import ProductComments from "../ProductComments/ProductComments";

export default function ProductReviews({ product }) {
	return (
		<>
			<AddComment />
			<ProductComments />
		</>
	);
}
