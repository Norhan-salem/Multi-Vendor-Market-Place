import Button from "../Button/Button";
import HomeMainItems from "../HomeMainItems/HomeMainItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "./HomeMain.css";

export default function HomeMain() {
	return (
		<main className="home-main">
			<div className="home-main-bar">
				<h3>Recent Listings</h3>
				<a>View all &gt;</a>
			</div>
			<HomeMainItems />
			<div style={{ alignSelf: "center" }}>
				<Button>
					View All Products
					<FontAwesomeIcon
						style={{ marginLeft: "5px" }}
						icon={faEye}
					/>
				</Button>
			</div>
		</main>
	);
}
