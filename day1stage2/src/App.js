import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Navbars from "./component/Navbar";
// import NavbarAfterLogins from "./component/NavbarAfterLogin";
// import Header from "./component/Header";
// import Cards from "./component/Card";
// import DetailTour from "./component/DetailTour";
// import PaymentWaiting from "./component/PaymentWaiting";
// import PaymentWaitingYellow from "./component/PaymentWaitingYellow";
// import PaymentAfterBuys from "./component/PaymentAfterBuys";
// import ModalLogins from "./component/ModalLogin";
// import ModalRegister from "./component/ModalRegister";
// import IncomeTripAdmin from "./component/AdminTourTrip";
import PayMentApprove from "./component/PayMentApproveAdmin";
// import AddTripAdmins from "./component/AddTripAdmin";
// import AddTripAdmin from "./component/AddTripAdmin";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import ViewUser from "./ViewUser";
import DetailTourBeforeLogin from "./DetailTourBeforeLogin";
// import DetailTourAfterLogin from "./DetailTourAfterLogin";
import PayMentBeforeBuy from "./PaymentBeforeBuy";
// import PayMentPending from "./PayMentPending";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import PaymentAfterBuy from "./PayMentAfterBuy";
// import IncomeTripAdmins from "./IncomeTrip";
import { useState } from "react";
import IncomingTransaction from "./IncomingTransaction";
import AddTripForAdmin from "./AddTripForAdmin";
// import AdminTourTrips from "./component/AdminTourTrip";
import AddTripAdminLast from "./AddTripAdminLast";
import ProfileUser from "./Propfile";
// import PaymentwaitingYellow from "./component/PaymentWaitingYellow";
import PaymentwaitingYelloww from "./PaymentwaitingYellowWait";
// import ModalApprove from "./ModalApproveAdmin";

// import Home from "./Home";

function App() {
  const [place, setPlace] = useState([
    {
      viewPlace: "/img/Gambar1.svg",
      namePlace: "6D/4N Fun Tassie Vacation ...",
      pricePlace: 12398000,
      country: "Australia",
    },
    {
      viewPlace: "/img/Gambar2.svg",
      namePlace: "6D/4N Exciting Summer in ...",
      pricePlace: 10288000,
      country: "South Korea",
    },
    {
      viewPlace: "/img/Gambar3.svg",
      namePlace: "8D/6N Wonderful Autum ...",
      pricePlace: 28999000,
      country: "Japan",
    },
    {
      viewPlace: "/img/Gambar4.svg",
      namePlace: "4D/3N Overland Jakarta B...",
      pricePlace: 3188000,
      country: "Indonesia",
    },
    {
      viewPlace: "/img/Gambar5.svg",
      namePlace: "4D/3N Labuan Bajo Delight",
      pricePlace: 10488000,
      country: "Indonesia",
    },
    {
      viewPlace: "/img/Gambar6.svg",
      namePlace: "5D/4N Magic Tokyo Fun",
      pricePlace: 11188000,
      country: "Japan",
    },
  ]);

  const [total, setTotal] = useState(0);
  const [quality, setQuality] = useState(0);
  // console.log(quality)
  // console.log(total)
  // const [priceProfile, setPriceProfil] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home place={place} />} />
          <Route
            exact
            path="/detail/:id"
            element={
              <DetailTourBeforeLogin
                place={place}
                total={total}
                setTotal={setTotal}
                quality={quality}
                setQuality={setQuality}
              />
            }
          />
          <Route exact path="/user" element={<ViewUser place={place} />} />
          <Route exact path="/profile" element={<ProfileUser />} />
          <Route
            exact
            path="/beforebuy"
            element={
              <PayMentBeforeBuy place={place} total={total} quality={quality} />
            }
          />
          <Route
            exact
            path="/waitbeforebuy"
            element={
              <PaymentwaitingYelloww
                total={total}
                setTotal={setTotal}
                quality={quality}
                setQuality={setQuality}
              />
            }
          />
          <Route exact path="/transaksi" element={<IncomingTransaction />} />
          <Route exact path="/approve" element={<PayMentApprove />} />
          <Route exact path="/addtrip" element={<AddTripForAdmin />} />
          <Route exact path="/addtripAdmin" element={<AddTripAdminLast />} />
        </Routes>
      </BrowserRouter>
    </>
  );

  // <>
  // {/* <Home /> */}
  // {/* <ViewUser/> */}
  // {/* <DetailTourBeforeLogin/> */}
  // {/* <DetailTourAfterLogin/>
  // <PayMentBeforeBuy/>
  // <PayMentPending/>
  // <PaymentAfterBuy />
  // <IncomeTripAdmins/> */}

  // </>

  //  <Navbars />
  //  <NavbarAfterLogins />
  //  <Cards />
  //  <Header />
  //   {/* <DetailTour /> */}
  //   {/* <PaymentWaiting /> */}
  //   {/* <PaymentWaitingYellow /> */}
  //   {/* <PaymentAfterBuys /> */}
  //   {/* <ModalLogins /> */}
  //   {/* <ModalRegister /> */}
  // {/* <IncomeTripAdmin /> */}
  // {/* <PayMentApprove /> */}
  // {/* <AddTripAdmins /> */}
  // );
}

export default App;
