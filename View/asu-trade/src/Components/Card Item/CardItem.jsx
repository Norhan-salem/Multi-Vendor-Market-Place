<<<<<<< HEAD
import './CardItem.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashCan} from '@fortawesome/free-regular-svg-icons'
import CardItemButton from '../Card Item Button/CardItemButton'

function CardItem(){
    return(
        <div className='Del'>
            {/*<div>
                <img src={LP} alt='Laptop' width='250px' height='200px'/><br/><hr/>
                <p className='txt'>APPLE iPad Pro 11” M2 Chip (4th Generation) Wi-Fi 128GB Silver</p>
                <CardItemButton/>
                <button className='trash'><FontAwesomeIcon icon={faTrashCan} /></button>
    </div>*/}
        </div>
    )
}
export default CardItem
=======
import "./CardItem.css";
import LP from "../../Assets/Laptops.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import CardItemButton from "../Card Item Button/CardItemButton";

function CardItem() {
	return (
		<div className="Del">
			<div>
				<img src={LP} alt="Laptop" width="250px" height="200px" />
				<br />
				<hr />
				<p className="txt">
					APPLE iPad Pro 11” M2 Chip (4th Generation) Wi-Fi 128GB
					Silver
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
>>>>>>> 8ae2dfe58fe834cbb37fb947f85fd982f00e4137
