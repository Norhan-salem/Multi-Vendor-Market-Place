import homeMainImg from "../../Assets/HomeMainItem.png";
import HomeMainCard from "../HomeMainCard/HomeMainCard";

import "./HomeMainItems.css";

const homeMainData = [
	{
		img: homeMainImg,
		price: 20000,
		title: "iphone 14 pro max",
		seller: "King Sasa",
	},
	{
		img: homeMainImg,
		price: 20000,
		title: "iphone 14 pro max",
		seller: "King Sasa",
	},
	{
		img: homeMainImg,
		price: 20000,
		title: "iphone 14 pro max",
		seller: "King Sasa",
	},
	{
		img: homeMainImg,
		price: 20000,
		title: "iphone 14 pro max",
		seller: "King Sasa",
	},
	{
		img: homeMainImg,
		price: 20000,
		title: "iphone 14 pro max",
		seller: "King Sasa",
	},
	{
		img: homeMainImg,
		price: 20000,
		title: "iphone 14 pro max",
		seller: "King Sasa",
	},
	{
		img: homeMainImg,
		price: 20000,
		title: "iphone 14 pro max",
		seller: "King Sasa",
	},
	{
		img: homeMainImg,
		price: 20000,
		title: "iphone 14 pro max",
		seller: "King Sasa",
	},
	{
		img: homeMainImg,
		price: 20000,
		title: "iphone 14 pro max",
		seller: "King Sasa",
	},
	{
		img: homeMainImg,
		price: 20000,
		title: "iphone 14 pro max",
		seller: "King Sasa",
	},
];

export default function HomeMainItems() {
	return (
		<div className="home-main-items">
			{homeMainData.map((data, index) => {
				return <HomeMainCard data={data} key={index} />;
			})}
		</div>
	);
}
