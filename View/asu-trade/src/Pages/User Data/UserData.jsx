import "./UserData.css";
import ProfileMenu from "../../Components/Profile Menu/ProfileMenu";
import ContactInfo from "../../Components/Contact Info/ContactInfo";
import AddressInfo from "../../Components/Address Info/AddressInfo";
import Navbar from "../../Components/Navbar/Navbar";
import NotLoggedIn from "../../Components/NotLoggedIn/NotLoggedIn";
import { useUser } from "../../Context/UserContext";
import Footer from "../../Components/Footer/Footer";

function UserData() {
	const { user } = useUser();

	return (
		<>
			<Navbar />
			<div className="UDall">
				{user ? (
					<>
						<div className="UDFChild">
							<ProfileMenu user={user} />
						</div>
						<div className="UDSChild">
							<ContactInfo user={user} />
						</div>
						<div className="UDSChild">
							<AddressInfo user={user} />
						</div>
					</>
				) : (
					<NotLoggedIn />
				)}
			</div>
			<Footer />
		</>
	);
}

export default UserData;
