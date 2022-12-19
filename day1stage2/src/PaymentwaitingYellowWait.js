import NavbarAfterLogins from "./component/NavbarAfterLogin";
import PaymentwaitingYellow from "./component/PaymentWaitingYellow";

function PaymentwaitingYelloww (props){
    return(
        <div>
            <NavbarAfterLogins/>
            <PaymentwaitingYellow total={props.total}
                setTotal={props.setTotal}
                quality={props.quality}
                setQuality={props.setQuality}/>
        </div>
    )
} 
export default PaymentwaitingYelloww