import ProductMain from "../../Components/ProductMain/ProductMain";
import ProductReviews from "../../Components/ProductReviews/ProductReviews";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import mockImg from "../../Assets/product-image-mock.png";

import "./ProductPage.css";

const product = {
	image: mockImg,
	price: 20000,
	seller: {
		name: "king sasa",
		city: "havana",
	},
	description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam in, ratione labore voluptatibus voluptates at sed expedita natus officia est tempore molestias iure blanditiis, reprehenderit, ex eos praesentium ducimus esse.",
	name: "iphone 18",
	reviews: [
		{
			user: "king sasa",
			review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam in, ratione labore voluptatibus voluptates at sed expedita natus officia est tempore molestias iure blanditiis, reprehenderit, ex eos praesentium.",
		},
		{
			user: "queen sasa",
			review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam in, ratione labore voluptatibus voluptates at sed expedita natus officia est tempore molestias iure blanditiis, reprehenderit, ex eos praesentium",
		},
		{
			user: "queen sasa",
			review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam in, ratione labore voluptatibus voluptates at sed expedita natus officia est tempore molestias iure blanditiis, reprehenderit, ex eos praesentium",
		},
		{
			user: "queen sasa",
			review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam in, ratione labore voluptatibus voluptates at sed expedita natus officia est tempore molestias iure blanditiis, reprehenderit, ex eos praesentium",
		},
	],
};

export default function ProductPage() {
	return (
		<>
			<Navbar />
			<div className="product-page">
				<ProductMain product={product} />
				<ProductReviews product={product} />
			</div>
			<Footer />
		</>
	);
}
