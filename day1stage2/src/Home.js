import Navbars from "./component/Navbar";
import Headers from "./component/Header";
import Card from "./component/Card";

const Home = (name) => {
  return (
    <div>
      <Navbars />
      <Headers />
      <Card place={name.place} />
    </div>
  );
};
export default Home;
