import './OrderSummary.css'

function OrderSummary(){
    return(
        <div>
            <div>
                Order Summary
                <form>
                    <label>Total: $150.25</label>
                    <label>Number of Items: 6</label>
                    <label>Coupon: </label>
                    <input type='text' placeholder='Enter Eligible Code'/>
                    <label>Discount: $00.00</label>
                </form>

            </div>
        </div>
    )
}

export default OrderSummary