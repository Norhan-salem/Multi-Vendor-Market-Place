import ProductDescription from "../ProductDescription/ProductDescription";
import ProductSellerAside from "../ProductSellerAside/ProductSellerAside";

export default function ProductMain({ product }) {
	return (
		<>
			<ProductDescription product={product} />
			<ProductSellerAside product={product} />
		</>
	);
}
