import NavbarAfterLogins from './component/NavbarAfterLogin';
import PaymentWaiting from './component/PaymentWaiting'


const PayMentBeforeBuy = (props) => {
    return(
        <div>
            <NavbarAfterLogins/>
            <PaymentWaiting place={props.place} total={props.total} quality={props.quality}/>
        </div>
    )
}
export default PayMentBeforeBuy;