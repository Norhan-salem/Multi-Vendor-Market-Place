import CardItem from '../../Components/Card Item/CardItem'
import './WishList.css'
import ProfileMenu from '../../Components/Profile Menu/ProfileMenu'
import Navbar from '../../Components/Navbar/Navbar'
import LP from "../../Assets/Laptops.png";

function WishList(){
    const user = {
        userid: "1234",
        FirstName: "Sasa",
        LastName: "King",
        UserName: "sasaking123",
        EmailAddress: "Jimmy.smith1996@gmail.com",
        Password: "Password",
        PhoneNumber: "+1234567890"
        };

        const WishListItems = [
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
            {
                img: LP,
                title: "APPLE iPad Pro 11” M2 Chip (4th Generation) Wi-Fi 128GB Silver",
            },
            {
                img: LP,
                title: "APPLE iPad Pro 11” M2 Chip (4th Generation) Wi-Fi 128GB Silver",
            }
        ];

    return(
        <>
            <Navbar/>
            <div className='WLBigg'>
                <div className='WLFchildd'>
                    <ProfileMenu user={user}/>
                </div>
                <div className='WLSmalll'>
                    {WishListItems.map((data, index) => {
				return <CardItem data={data} key={index} />;
			})}
                </div>
            </div>
        </>
    )
}

export default WishList