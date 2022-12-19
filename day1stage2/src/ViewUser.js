import NavbarAfterLogins from "./component/NavbarAfterLogin";
import Header from "./component/Header";
import Card from "./component/Card";

const ViewUser = (props) => {
  return (
    <div>
      <NavbarAfterLogins />
      <Header />
      <Card place={props.place}/>
    </div>
  );
};
export default ViewUser;
