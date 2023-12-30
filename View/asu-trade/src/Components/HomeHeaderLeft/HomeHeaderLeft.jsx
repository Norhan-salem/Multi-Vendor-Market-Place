import "./HomeHeaderLeft.css";
import Dome from "../../Assets/Dome.png";
import Button from "../Button/Button";

export default function HomeHeaderLeft() {
	return (
		<div className="home-header-left">
			<img src={Dome} className="dome-logo" />
			<h1>ASU TRADE</h1>
			<Button>Buy</Button>
			<Button textColor="#FF1F00" backColor="#FFF">
				Sell
			</Button>
		</div>
	);
}
