import NavbarAfterLogins from "./component/NavbarAfterLogin";
import Transaction from "./component/Transaction";

const IncomingTransaction = () => {
  return (
    <div>
      <NavbarAfterLogins/>
      <Transaction />
    </div>
  );
};
export default IncomingTransaction;