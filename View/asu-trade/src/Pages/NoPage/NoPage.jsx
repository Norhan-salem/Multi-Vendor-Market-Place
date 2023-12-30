import React from "react";
import NotFound from "../../Assets/404.png";
import '../NoPage/NoPage.css'


const NoPage = () => {

 return (
    <div className="bg nopage">
    <img src={NotFound} alt="404 Not Found" />
    </div>
    )
}
export default NoPage