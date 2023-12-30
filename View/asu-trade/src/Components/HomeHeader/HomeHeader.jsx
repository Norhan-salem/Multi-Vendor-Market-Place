import HomeHeaderLeft from "../HomeHeaderLeft/HomeHeaderLeft";
import HomeHeaderRight from "../HomeHeaderRight/HomeHeaderRight";
import HomeHeaderItems from "../HomeHeaderItems/HomeHeaderItems";
import "./HomeHeader.css";

export default function HomeHeader() {
	return (
		<header>
			<div className="home-header">
				<HomeHeaderLeft />
				<HomeHeaderRight />
			</div>
			<HomeHeaderItems />
		</header>
	);
}
