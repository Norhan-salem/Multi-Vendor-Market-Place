import './Listings.css'
import CardItem from '../../Components/Card Item/CardItem'
import VendorProfile from '../../Components/Vendor Profile/VendorProfile'

function Listings(){
    return(
        <div>
            <button className='m'>
                Add Product
            </button>
            <div className='Big'>
                <div className='Fchild'>
                    <VendorProfile/>
                </div>
                <div className='Small'>
                    <div><CardItem/></div>
                    <div><CardItem/></div>
                    <div><CardItem/></div>
                    <div><CardItem/></div>
                    <div><CardItem/></div>
                    <div><CardItem/></div>
                </div>
            </div>
        </div>
    )
}

export default Listings