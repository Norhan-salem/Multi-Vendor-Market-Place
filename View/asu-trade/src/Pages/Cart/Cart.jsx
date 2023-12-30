import './Cart.css'
import ProfileMenu from '../../Components/Profile Menu/ProfileMenu'
import CardItem from '../../Components/Card Item/CardItem'
import OrderSummary from '../../Components/Order Summary/OrderSummary'

function Cart(){
    return(
        <div className='Big'>
            <div className='Fchild'>
                <ProfileMenu/>
            </div>
            <div className='Small'>
                <div><CardItem/></div>
                <div><CardItem/></div>
                <div><CardItem/></div>
                <div><CardItem/></div>
                <div><CardItem/></div>
                <div><CardItem/></div>
            </div>
            <div className='summ'>
                <OrderSummary/>
            </div>
        </div>
    )
}

export default Cart