import "./AddressInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function AddressInfo({ user }) {
	return (
		<div className="AIcontainer">
			Last name
			<div className="AIChild">
				<FontAwesomeIcon className="iconnn" icon={faUser} /> 
				{user["lastName"]}
				<button className="AIbuy">
					<FontAwesomeIcon className="editt" icon={faPenToSquare} />
				</button>
			</div>
			Username
			<div className="AIChild">
				<FontAwesomeIcon className="iconnn" icon={faUser} /> 
				{user["username"]}
				<button className="AIbuy">
					<FontAwesomeIcon className="editt" icon={faPenToSquare} />
				</button>
			</div>
			Phone number
			<div className="AIChild">
				<FontAwesomeIcon className="iconnn" icon={faPhone} /> 
				{user["phoneNumber"]}
				<button className="AIbuy">
					<FontAwesomeIcon className="editt" icon={faPenToSquare} />
				</button>
			</div>
		</div>
	);
}

export default AddressInfo;
