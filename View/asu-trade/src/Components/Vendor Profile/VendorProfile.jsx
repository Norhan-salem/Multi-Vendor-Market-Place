import './VendorProfile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleUser} from '@fortawesome/free-regular-svg-icons'
import {faUserPen} from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import {faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'


function VendorProfile(){
    return(
        <div className='VPcontainer'>
            <div className='VPfirst'>
                <FontAwesomeIcon className='ic' icon={faCircleUser} />  
                Nasser Mohame
            </div>
            <div className='VPsecond'>
                <button className='Data org'>
                <FontAwesomeIcon className='icon' icon={faUserPen} />  
                    <span className='org'>Personal Data</span> 
                </button>
            </div>
            <div className='VPthird'>
                <button className='Data'>
                <FontAwesomeIcon className='icon' icon={faHeart} />  
                    Wish list
                </button>
            </div>
            <div className='VPthird'>
                <button className='Data'>
                    <FontAwesomeIcon icon={faBagShopping} />  
                    Cart
                </button>
            </div>
            <div className='VPthird'>
                <button className='Data'> 
                    <span className='plus'>+</span>
                       Listings
                </button>
            </div>
            <div className='VPfourth'>
                <button className='Data'>
                <FontAwesomeIcon className='icon' icon={faArrowRightFromBracket} /> 
                    <span className='col'>Log out</span>
                </button>
            </div>
        </div>
    )
}

export default VendorProfile