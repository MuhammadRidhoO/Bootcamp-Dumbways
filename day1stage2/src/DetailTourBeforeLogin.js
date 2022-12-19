import Navbars from "./component/Navbar";
import DetailTour from "./component/DetailTour";

const DetailTourBeforeLogin = (props) => {
  return (
    <div>
      <Navbars />
      <DetailTour place={props.place} total={props.total} setTotal={props.setTotal} quality={props.quality} setQuality={props.setQuality} />
    </div>
  );
};
export default DetailTourBeforeLogin;
