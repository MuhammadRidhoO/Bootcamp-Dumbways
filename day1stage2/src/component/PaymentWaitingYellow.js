import {Form, Table } from "react-bootstrap";

function PaymentwaitingYellow(props) {
  return (
  
    <div className="BG333">
      <div className="afternavbar">
        <div>
          <div className="boking">
            <div className="kiri">
              <div className="logoboking">
                <img src="/img/payment.svg" alt="" className="imgcost"></img>
              </div>
              <div className="bar1">
                <div className="khusus">
                  <h3>6D/4N Fun Tassie Vacation</h3>
                  <p>Australia</p>
                </div>
                <div className="atasdikit">
                  <p>Date Trip</p>
                  <p className="bawah">26 August 2020</p>
                </div>
                <div className="atasdikit">
                  <p>Duration</p>
                  <p className="bawah">6 Day 4 Night</p>
                </div>
              </div>
              <div className="bar2">
                <p className="waiting2">Waiting Payment</p>
                <div className="last">
                  <p>Accomodation</p>
                  <p className="bawah">Hotel 4 Nights</p>
                </div>
                <div>
                  <p>Transporartion</p>
                  <p className="bawah">Qatar Airways</p>
                </div>
              </div>
              {/* <p>Waiting Payment</p> */}
            </div>
            <div className="costdkk">
              <h4>Booking</h4>
              <p>Saturday, 22 Juy 2020</p>
              <img src="/img/cost.svg" alt="" className="cost"></img>
              <Form.Group controlId="formFileSm" className="mb-3">
                <Form.Control type="file" size="sm" className="sizebox" />
              </Form.Group>
            </div>
            <div className="lanjutan1">
              <Table className="alltable">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Full Name</th>
                    <th>Gender</th>
                    <th>Phone</th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Radif Ganteng</td>
                    <td>Male</td>
                    <td>083896833112</td>
                    <td className="tabless">Qty</td>
                    <td className="tabless">:</td>
                    <td className="tabless">{props.quality}</td>
                  </tr>
                  <tr className="tabless2">
                    <td colSpan={5} className="tabless">
                      Total
                    </td>
                    <td className="tabless">:</td>
                    <td className="tabless3">{props.total}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
        <div
          className="bg-warning"
          style={{
            marginTop: 130,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>
            Copyright @ 2020 Dewe Tour - Your Name - NIS. All Rights reserved
          </p>
        </div>
      </div>
      {/* end info durasi */}
    </div>
  );
}
export default PaymentwaitingYellow;
