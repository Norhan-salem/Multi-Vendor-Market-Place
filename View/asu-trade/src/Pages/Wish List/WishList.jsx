import CardItem from '../../Components/Card Item/CardItem'
import './WishList.css'
import ProfileMenu from '../../Components/Profile Menu/ProfileMenu'

function WishList(){
    return(
        <div className='Bigg'>
            <div className='Fchildd'>
                <ProfileMenu/>
            </div>
            <div className='Smalll'>
                <div><CardItem/></div>
                <div><CardItem/></div>
                <div><CardItem/></div>
                <div><CardItem/></div>
                <div><CardItem/></div>
                <div><CardItem/></div>
            </div>
        </div>
    )
}

export default WishList