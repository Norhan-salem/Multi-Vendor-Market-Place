import "./ContactInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

function ContactInfo({ user }) {
	return (
		<div className="CIcontainerr">
			First name
			<div className="CIChildd">
				<FontAwesomeIcon className="iconn" icon={faUser} /> 
				{user["firstName"]}
				<button className="CIbuy">
					<FontAwesomeIcon className="CIedit" icon={faPenToSquare} />
				</button>
			</div>
			E-mail Address
			<div className="CIChildd">
				<FontAwesomeIcon className="iconn" icon={faEnvelope} /> 
				{user["email"]}
				<button className="CIbuy">
					<FontAwesomeIcon className="CIedit" icon={faPenToSquare} />
				</button>
			</div>
			Password
			<div className="CIChildd">
				<FontAwesomeIcon className="iconn" icon={faKey} />  ********
				<button className="CIbuy">
					<FontAwesomeIcon className="CIedit" icon={faPenToSquare} />
				</button>
			</div>
			<br />
			<a className="CIlink">Forget Password?</a>
		</div>
	);
}

export default ContactInfo;
