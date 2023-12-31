import ProductDescription from "../ProductDescription/ProductDescription";
import ProductSellerAside from "../ProductSellerAside/ProductSellerAside";
import "./ProductMain.css";

export default function ProductMain({ product }) {
	return (
		<div className="product-main">
			<ProductDescription product={product} />
			<ProductSellerAside product={product} />
		</div>
	);
}
