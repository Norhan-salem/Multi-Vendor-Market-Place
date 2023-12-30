import './VendorData.css'
import VendorProfile from '../../Components/Vendor Profile/VendorProfile'
import ContactInfo from '../../Components/Contact Info/ContactInfo'
import VendorAddress from '../../Components/Vendor Address/VendorAddress'

function VendorData(){
    return(
        <div>
            <div className="all">
            <div className='FChild'>
                <VendorProfile/>
            </div>
            <div className='SChild'>
                <ContactInfo/>
            </div>
            <div className='SChild'>
                <VendorAddress/>
            </div>
        </div>
        </div>
    )
}

export default VendorData