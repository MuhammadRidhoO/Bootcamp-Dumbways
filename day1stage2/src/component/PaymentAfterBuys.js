import { Form, Table, Button } from "react-bootstrap";

function PaymentAfterBuys() {
  return (
    <>
      <div className="allinfoidentity">
      <div>
        <div className="allidentityuser">
          <div className="usersbuy">
            <div className="allidentity">
              <div>
                <h3 className="personalinfo">Personal info</h3>
              </div>
              <div className="identity">
                <div className="preidentity">
                  <div>
                    <img src="/img/iconprofil.svg" alt=""></img>
                  </div>
                  <div>
                    <h6>Radif Ganteng</h6>
                    <p className="nameidentity">Full name</p>
                  </div>
                </div>
                <div className="preidentity">
                  <div>
                    <img src="/img/iconemail.svg" alt=""></img>
                  </div>
                  <div>
                    <h6>radifgans@gmail.com</h6>
                    <p className="nameidentity">Email</p>
                  </div>
                </div>
                <div className="preidentity">
                  <div>
                    <img src="/img/iconphone.svg" alt=""></img>
                  </div>
                  <div>
                    <h6>0812-8623-8911</h6>
                    <p className="nameidentity">Mobile phone</p>
                  </div>
                </div>
                <div className="preidentity">
                  <div>
                    <img src="/img/iconlocation.svg" alt=""></img>
                  </div>
                  <div>
                    <h6>Perumahan Permata Bintaro Residence C-3</h6>
                    <p className="nameidentity">Address</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img src="/img/imgUser.svg" alt="" className="imgsize"></img>
              <div className="buttonpay">
                <Button className="placeeditphhoto">
                  Change Photo Profile
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="history">
            <h2 className="history2">History Trip</h2>
        </div>
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
              <p className="waiting3">Approve</p>
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
            <img src="/img/barkotbuyer.svg" alt="" className="cost"></img>
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
                  <td className="tabless">1</td>
                </tr>
                <tr className="tabless2">
                  <td colSpan={5} className="tabless">
                    Total
                  </td>
                  <td className="tabless">:</td>
                  <td className="tabless3">IDR. 12,398,000</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
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

export default PaymentAfterBuys;
