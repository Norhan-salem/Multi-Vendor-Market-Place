import './Listings.css';
import CardItem from '../../Components/Card Item/CardItem';
import VendorProfile from '../../Components/Vendor Profile/VendorProfile';
import Navbar from '../../Components/Navbar/Navbar';
import LP from "../../Assets/Laptops.png";

function Listings(){

    const Listings = [
        {
            img: LP,
            title: "APPLE iPad Pro 11” M2 Chip (4th Generation) Wi-Fi 128GB Silver",
        },
        {
            img: LP,
            title: "APPLE iPad Pro 11” M2 Chip (4th Generation) Wi-Fi 128GB Silver",
        },
        {
            img: LP,
            title: "APPLE iPad Pro 11” M2 Chip (4th Generation) Wi-Fi 128GB Silver",
        },
        {
            img: LP,
            title: "APPLE iPad Pro 11” M2 Chip (4th Generation) Wi-Fi 128GB Silver",
        },
        {
            img: LP,
            title: "APPLE iPad Pro 11” M2 Chip (4th Generation) Wi-Fi 128GB Silver",
        },
        {
            img: LP,
            title: "APPLE iPad Pro 11” M2 Chip (4th Generation) Wi-Fi 128GB Silver",
        },
    ];

    return(
        <>
            <Navbar/>
            <div className='List'>
            <button className='m'>
                            List Item
                        </button>
                <div className='LBig'>
                    <div className='Lchild'>
                        <VendorProfile/>
                    </div>
                    <div className='LSmall'>
                        {Listings.map((data, index) => {
                            return <CardItem data={data} key={index} />;
                        })}
                    </div>
                </div>
</div>
        </>
    )
}

export default Listings