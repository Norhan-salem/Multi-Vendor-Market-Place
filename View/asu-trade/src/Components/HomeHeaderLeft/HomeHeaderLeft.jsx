import "./HomeHeaderLeft.css";
import Dome from "../../Assets/Dome.png";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";

export default function HomeHeaderLeft() {
	return (
		<div className="home-header-left">
			<img src={Dome} className="dome-logo" />
			<h1>ASU TRADE</h1>
			<Button>Buy</Button>
			{/* just linked the sell button to seller signup */}
			<NavLink to="/SellerSignup" >
				<Button textColor="#FF1F00" backColor="#FFF">
				Sell
				</Button>
			</NavLink>
		</div>
	);
}
