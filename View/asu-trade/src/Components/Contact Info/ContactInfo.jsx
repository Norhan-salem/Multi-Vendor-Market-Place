import "./ContactInfo.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faKey } from "@fortawesome/free-solid-svg-icons"
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons"
import { Link } from "react-router-dom"

function ContactInfo(){
    return(
        <div className='containerr'>
            First name
            <div className='Childd'>
                <FontAwesomeIcon className="iconn" icon={faUser} /> 
                Jimmy Smith
                <button className="buy">
                    <FontAwesomeIcon className="edit" icon={faPenToSquare} />
                </button>
            </div>
            E-mail Address 
            <div className="Childd">
                <FontAwesomeIcon className="iconn" icon={faEnvelope} /> 
                JimmySmith@gmail.com
                <button className="buy">
                    <FontAwesomeIcon className="edit" icon={faPenToSquare} />
                </button>
            </div>
            Password
            <div className='Childd'>
                <FontAwesomeIcon className="iconn" icon={faKey} /> 
                ********
                <button className="buy">
                    <FontAwesomeIcon className="edit" icon={faPenToSquare} />
                </button>
            </div><br/>
            <a className="link">Forget Password?</a>
        </div>
    )
}

export default ContactInfo