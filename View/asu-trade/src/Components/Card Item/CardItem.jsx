import "./CardItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import CardItemButton from "../Card Item Button/CardItemButton";

function CardItem({data}) {
	return (
		<div className="Del">
			<div>
				<img src={data["img"]} className="CardItemImage" alt="Laptop" width="250px" height="200px" />
				<br />
				<hr />
				<p className="txt">
					{data["title"]}
				</p>
				<CardItemButton />
				<button className="trash">
					<FontAwesomeIcon icon={faTrashCan} />
				</button>
			</div>
		</div>
	);
}

export default CardItem;
