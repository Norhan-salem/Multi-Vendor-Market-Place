import './OrderSummary.css'

function OrderSummary(){
    return(
        <div className='container'>
            <form className='sf'>
                <span className='sp'>Order Summary</span> <br/><br/>
                <label>Total: $150.25</label><br/><br/>
                <label>Number of Items: 6</label><br/><br/>
                <label>Coupon: </label>
                <input type='text'className='k' placeholder='Enter Eligible Code'/><br/><br/>
                <label>Discount: $00.00</label><br/>
            </form><br/><br/>
            <button className='Button'>
                Checkout
            </button>
        </div>
    )
}

export default OrderSummary