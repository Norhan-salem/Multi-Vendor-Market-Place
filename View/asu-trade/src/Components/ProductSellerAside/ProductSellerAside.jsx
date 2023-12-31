import Button from "../Button/Button";

import "./ProductSellerAside.css";

export default function ProductSellerAside({ product }) {
	return (
		<aside className="product-seller">
			<Button>Add to cart</Button>
		</aside>
	);
}
