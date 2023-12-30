import './UserData.css'
import ProfileMenu from '../../Components/Profile Menu/ProfileMenu'
import ContactInfo from '../../Components/Contact Info/ContactInfo'
import AddressInfo from '../../Components/Address Info/AddressInfo'

function UserData(){
    return(
        <div className="all">
            <div className='FChild'>
                <ProfileMenu/>
            </div>
            <div className='SChild'>
                <ContactInfo/>
            </div>
            <div className='SChild'>
                <AddressInfo/>
            </div>
        </div>
    )
}

export default UserData