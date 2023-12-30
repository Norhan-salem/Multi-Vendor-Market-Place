import "./HomeMainCard.css";

export default function HomeMainCard({ data }) {
	return (
		<div className="home-main-card">
			<img src={data["img"]} alt="" />
			<span className="home-card-price">{data["price"]} EGP</span>
			<span className="home-card-title">{data["title"]}</span>
			<span className="home-card-seller">Sold by: {data["seller"]}</span>
		</div>
	);
}
