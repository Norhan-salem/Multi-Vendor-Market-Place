import './UserData.css'
import ProfileMenu from '../../Components/Profile Menu/ProfileMenu'
import ContactInfo from '../../Components/Contact Info/ContactInfo'
import AddressInfo from '../../Components/Address Info/AddressInfo'
import Navbar from '../../Components/Navbar/Navbar'

function UserData(){

    const user = {
        userid: "1234",
        FirstName: "Sasa",
        LastName: "King",
        UserName: "sasaking123",
        EmailAddress: "Jimmy.smith1996@gmail.com",
        Password: "Password",
        PhoneNumber: "+1234567890"
        };

    return(
        <>
            <Navbar/>
            <div className="UDall">
                <div className='UDFChild'>
                    <ProfileMenu user={user}/>
                </div>
                <div className='UDSChild'>
                    <ContactInfo user={user}/>
                </div>
                <div className='UDSChild'>
                    <AddressInfo user={user}/>
                </div>
            </div>
        </>
    )
}

export default UserData