import IncomeTripAdmins from "./IncomeTrip"
import NavbarAfterLogins from "./component/NavbarAfterLogin";

function AddTripForAdmin (){
    return(
        <div>
            <NavbarAfterLogins/>
            <IncomeTripAdmins/>
        </div>
    )
}
export default AddTripForAdmin