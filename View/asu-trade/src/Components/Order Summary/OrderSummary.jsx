import './OrderSummary.css'

function OrderSummary({Ordersummary}){
    return(
        <div className='OScontainer'>
            <form className='sf'>
                <span className='sp'>Order Summary</span> <br/><br/>
                <label>Total: ${Ordersummary["Price"]}</label><br/><br/>
                <label>Number of Items: {Ordersummary["NumberOfItems"]}</label><br/><br/>
                <label>Coupon: </label>
                <input type='text'className='k' placeholder='Enter Eligible Code'/><br/><br/>
                <label>Discount: ${Ordersummary["Discount"]}</label><br/><br/>
            </form><br/>
            <button className='OSButton'>
                Checkout
            </button>
        </div>
    )
}

export default OrderSummary