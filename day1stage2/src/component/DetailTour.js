import { Button } from "react-bootstrap";
import { useParams,Link } from "react-router-dom";
import React, { useState } from "react";

function DetailTour(props) {
  const { id } = useParams();
  function Koma(r) {
    r = r.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(r)) r = r.replace(pattern, "$1,$2");
    return r;
  }
  const [value, setValue] = useState(1)

  function add () {
    setValue(value + 1);
  }
  function less (){
    if(value >0){
    setValue(value - 1);
  }
}
// console.log(props.total)
  return (
    <>
      {/* start to deatil */}
      <div className="detail">
        <div className="judul">
          <h1>{props.place[id].namePlace}</h1>
          <p>Autralia</p>
        </div>
        <div className="allimg">
          <div className="imgfirst">
            <img
              src={props.place[id].viewPlace}
              alt=""
              className="imgcountry"
            ></img>
          </div>
          <div className="imgsecond">
            <img src={props.place[id].viewPlace} alt=""></img>
            <img src={props.place[id].viewPlace} alt="" className="foto1"></img>
            <img src={props.place[id].viewPlace} alt=""></img>
          </div>
        </div>
      </div>
      {/* end to deatil */}
      {/* info duration */}
      <div>
        <div className="p-0px-250px-0px-250px">
          <p>Information Trip</p>
        </div>

        <div>
          <ul className="duration">
            <li className="nameandimg1">
              <label className="nameimg">Accommodation</label>
              <li className="nameandimg">
                <img src="/img/g1.svg" alt=""></img>
                <label className="ms-2">Hotel 4 Nights</label>
              </li>
            </li>
            <li className="nameandimg1">
              <label className="nameimg">Transportation</label>
              <li className="nameandimg">
                <img src="/img/g2.svg" alt=""></img>
                <label className="ms-2">Qatar Airways</label>
              </li>
            </li>
            <li className="nameandimg1">
              <label className="nameimg">Eat</label>
              <li className="nameandimg">
                <img src="/img/g3.svg" alt=""></img>
                <label className="ms-2">Included as ltinerary</label>
              </li>
            </li>
            <li className="nameandimg1">
              <label className="nameimg">Duration</label>
              <li className="nameandimg">
                <img src="/img/g4.svg" alt=""></img>
                <label className="ms-2">6 Day 4 Nights</label>
              </li>
            </li>
            <li className="nameandimg1">
              <label className="ms-2 text-secondary">Date Trip</label>
              <li className="nameandimg">
                <img src="/img/g5.svg" alt=""></img>
                <label className="ms-2">26 August 2020</label>
              </li>
            </li>
          </ul>
          <div className="description">
            <p className="fontdescription">Description</p>
            <p className="textdescription">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
                <div className="d-flex">
                  <div className="d-flex2">
                    <h6 className="pricedescription">IDR. {Koma(props.place[id].pricePlace)} </h6>
                    <h6 className="ms-1">/ Person</h6>
                  </div>
                  <div className="jumlahticket">
                    <button className="jandk bg-warning" onClick={less}>-</button>
                    <h5 className="ms-2 me-2" text="number">{props.setQuality(value)}{value}</h5>
                    <button className="jandk bg-warning" onClick={add}>+</button>
                  </div>
                </div>
            <div className="totalharga">
              <h5 className="fonttotal">Total :</h5>
              <div>
                <h5 className="fontprice">IDR. {props.setTotal(Koma(value * (props.place[id].pricePlace) ))} {Koma(value * (props.place[id].pricePlace) )}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="buttonbook">
       <Link to="/beforebuy"><Button className="buttonbook2">BOOK NOW</Button></Link> 
      </div>
      <div
        className="bg-warning"
        style={{
          marginTop: 40,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>Copyright @ 2020 Dewe Tour - Your Name - NIS. All Rights reserved</p>
      </div>
    </>
  );
}

export default DetailTour;
