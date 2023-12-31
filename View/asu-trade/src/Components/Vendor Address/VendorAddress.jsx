import './VendorAddress.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faShop } from '@fortawesome/free-solid-svg-icons'

function VendorAddress(){
    return(
        <div className='VAcontainer'>
            Last name
            <div className='VAChild'>
                <FontAwesomeIcon className="iconnn" icon={faUser} /> 
                 Smith
                <button className="VAbuy">
                    <FontAwesomeIcon className="edit" icon={faPenToSquare} />
                </button>
            </div>
            Username
            <div className='VAChild'>
                <FontAwesomeIcon className="iconnn" icon={faUser} /> 
                Jimmy Smith
                <button className="VAbuy">
                    <FontAwesomeIcon className="edit" icon={faPenToSquare} />
                </button>
            </div>
            Phone number
            <div className='VAChild'>
                <FontAwesomeIcon className="iconnn" icon={faPhone} /> 
                +01512312447
                <button className="VAbuy">
                    <FontAwesomeIcon className="edit" icon={faPenToSquare} />
                </button>
            </div>
            Address 
            <div className='VAChild'>
                <FontAwesomeIcon className='iconnn' icon={faShop} /> 
                Abdo Pasha Street 
                <button className="VAbuy">
                    <FontAwesomeIcon className="edit" icon={faPenToSquare} />
                </button>
            </div>
        </div>
    )
}

export default VendorAddress