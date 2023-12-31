import './VendorAddress.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faShop } from '@fortawesome/free-solid-svg-icons'

function VendorAddress(){
    return(
        <div className='container'>
            Last name
            <div className='Child'>
                <FontAwesomeIcon className="iconnn" icon={faUser} /> 
                 Smith
                <button className="buy">
                    <FontAwesomeIcon className="edit" icon={faPenToSquare} />
                </button>
            </div>
            Username
            <div className='Child'>
                <FontAwesomeIcon className="iconnn" icon={faUser} /> 
                Jimmy Smith
                <button className="buy">
                    <FontAwesomeIcon className="edit" icon={faPenToSquare} />
                </button>
            </div>
            Phone number
            <div className='Child'>
                <FontAwesomeIcon className="iconnn" icon={faPhone} /> 
                +01512312447
                <button className="buy">
                    <FontAwesomeIcon className="edit" icon={faPenToSquare} />
                </button>
            </div>
            Address 
            <div className='Child'>
                <FontAwesomeIcon className='iconnn' icon={faShop} /> 
                Abdo Pasha Street 
                <button className="buy">
                    <FontAwesomeIcon className="edit" icon={faPenToSquare} />
                </button>
            </div>
        </div>
    )
}

export default VendorAddress