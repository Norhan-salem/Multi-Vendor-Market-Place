import './VendorData.css'
import VendorProfile from '../../Components/Vendor Profile/VendorProfile'
import ContactInfo from '../../Components/Contact Info/ContactInfo'
import VendorAddress from '../../Components/Vendor Address/VendorAddress'
import Navbar from '../../Components/Navbar/Navbar'

function VendorData(){
    return(
        <>
            <Navbar/>
            <div className="VDall">
                <div className='VDFChild'>
                    <VendorProfile/>
                </div>
                <div className='VDSChild'>
                    <ContactInfo/>
                </div>
                <div className='VDSChild'>
                    <VendorAddress/>
                </div>
            </div>
        </>
    )
}

export default VendorData