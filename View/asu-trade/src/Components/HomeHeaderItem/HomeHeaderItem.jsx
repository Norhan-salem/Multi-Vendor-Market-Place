import "./HomeHeaderItem.css";

export default function HomeHeaderItem({ imgSrc, title }) {
	console.log(imgSrc);
	return (
		<div className="home-header-item">
			<h3>{title}</h3>
			<img src={imgSrc} />
		</div>
	);
}
