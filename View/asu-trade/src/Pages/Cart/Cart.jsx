import './Cart.css';
import ProfileMenu from '../../Components/Profile Menu/ProfileMenu';
import CardItem from '../../Components/Card Item/CardItem';
import OrderSummary from '../../Components/Order Summary/OrderSummary';
import Navbar from '../../Components/Navbar/Navbar';
import LP from "../../Assets/Laptops.png";

function Cart(){
    const user = {
        userid: "1234",
        FirstName: "Sasa",
        LastName: "King",
        UserName: "sasaking123",
        EmailAddress: "Jimmy.smith1996@gmail.com",
        Password: "Password",
        PhoneNumber: "+1234567890"
        };

        const CartItems = [
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

        const Ordersummary=
            {
                Price: 2000,
                NumberOfItems: 8,
                Discount: 20,
            };

    return(
        <>
            <Navbar/>
            <div className='CBig'>
                <div className='Cchild'>
                    <ProfileMenu user={user}/>
                </div>
                <div className='CSmall'>
                {CartItems.map((data, index) => {
                            return <CardItem data={data} key={index} />;
                        })}
                </div>
                <div className='Csumm'>
                    <OrderSummary Ordersummary={Ordersummary}/>
                </div>
            </div>
        </>
    )
}

export default Cart;