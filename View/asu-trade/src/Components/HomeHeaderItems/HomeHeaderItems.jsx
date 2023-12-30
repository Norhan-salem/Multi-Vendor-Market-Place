import HomeHeaderItem from "../HomeHeaderItem/HomeHeaderItem";
import electronicsImg from "../../Assets/Electronics.png";
import archToolsImg from "../../Assets/ArchTools.png";
import laptopsImg from "../../Assets/Laptops.png";
import phonesImg from "../../Assets/Phones.png";
import othersImg from "../../Assets/Others.png";
import "./HomeHeaderItems.css";

export default function HomeHeaderItems() {
	return (
		<div className="home-header-items">
			<HomeHeaderItem title="Electronics" imgSrc={electronicsImg} />
			<HomeHeaderItem title="Drawing Tools" imgSrc={archToolsImg} />
			<HomeHeaderItem title="Laptops" imgSrc={laptopsImg} />
			<HomeHeaderItem title="Phones" imgSrc={phonesImg} />
			<HomeHeaderItem title="Other" imgSrc={othersImg} />
		</div>
	);
}
