import { useState, setShow } from "react";
import { Button, Form, Modal, Navbar, Table } from "react-bootstrap";

function Transaction() {
  const [view, setView] = useState(false);

  const handleOnClose = () => setView(false);
  const handleOnShow = () => setView(true);
  return (
    <div>
      <div className="listall">
        <div className="listhuman">
          <h3>Incoming Transaction</h3>
        </div>
        <Table striped bordered hover size="sm" className="a123">
          <thead>
            <tr>
              <th className="py-3">No</th>
              <th className="py-3">Users</th>
              <th className="py-3">Trip</th>
              <th className="py-3">Bukti Transfer</th>
              <th className="py-3">Status Payment</th>
              <th className="py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3">1</td>
              <td className="py-3">Radif Ganteng</td>
              <td className="py-3">6D/4N Fun Tassie Vaca ...</td>
              <td className="py-3">bca.jpg</td>
              <td className="py-3">Pending</td>
              <td className="py-3">
                <Button to="#" className="imgpencarian1" onClick={handleOnShow}>
                  <img src="/img/pencarian.svg" alt=""></img>
                </Button>

                <Modal show={view} onHide={handleOnClose}>
                  <div>
                    <div className="allin11">
                      <div className="semuanyatanpakecuali">
                        <div className="afternavbar2">
                          <div className="boking22">
                            <div className="kiri">
                              <div className="logoboking">
                                <img
                                  src="/img/payment.svg"
                                  alt=""
                                  className="imgcost"
                                ></img>
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
                                <p className="waiting1">Waiting Payment</p>
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
                              <img
                                src="/img/cost.svg"
                                alt=""
                                className="cost"
                              ></img>
                              <Form.Group
                                controlId="formFileSm"
                                className="mb-3"
                              >
                                <Form.Control
                                  type="file"
                                  size="sm"
                                  className="sizebox"
                                />
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
                                    <td className="tabless3">
                                      IDR. 12,398,000
                                    </td>
                                  </tr>
                                </tbody>
                              </Table>
                            </div>
                          </div>
                        </div>
                        <div className="buttonpay1111">
                          <Button
                            className="buttonpayacc11"
                            onClick={handleOnClose}
                          >
                            Cancel
                          </Button>
                          <Button
                            className="buttonpayacc22"
                            onClick={handleOnClose}
                          >
                            Approve
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal>
              </td>
            </tr>
            <tr>
              <td className="py-3">2</td>
              <td className="py-3">Haris Rahman</td>
              <td className="py-3">6D/4N Exciting Summer...</td>
              <td className="py-3">bni.jpg</td>
              <td className="py-3">Approve</td>
              <td className="py-3">
                <Button to="#" className="imgpencarian">
                  <img src="/img/pencarian.svg" alt=""></img>
                </Button>
              </td>
            </tr>
            <tr>
              <td className="py-3">3</td>
              <td className="py-3">Amin Subagiyo</td>
              <td className="py-3">6D/4N Fun Tassie Vaca ...</td>
              <td className="py-3">permata.jpg</td>
              <td className="py-3">Cancel</td>
              <td className="py-3">
                <Button to="#" className="imgpencarian1">
                  <img src="/img/pencarian.svg" alt=""></img>
                </Button>
              </td>
            </tr>
            <tr>
              <td className="py-3">4</td>
              <td className="py-3">Aziz Oni On</td>
              <td className="py-3">6D/4N Magic Tokyo ...</td>
              <td className="py-3">bi.jpg</td>
              <td className="py-3">Pending</td>
              <td className="py-3">
                <Button to="#" className="imgpencarian">
                  <img src="/img/pencarian.svg" alt=""></img>
                </Button>
              </td>
            </tr>
            <tr>
              <td className="py-3">5</td>
              <td className="py-3">Sugeng No Pants</td>
              <td className="py-3">6D/4N Labuan Bajo ...</td>
              <td className="py-3">bni.jpg</td>
              <td className="py-3">Approve</td>
              <td className="py-3">
                <Button to="#" className="imgpencarian1">
                  <img src="/img/pencarian.svg" alt=""></img>
                </Button>
              </td>
            </tr>
            <tr>
              <td className="py-3">6</td>
              <td className="py-3">Haris Astina</td>
              <td className="py-3">6D/4N Wonderful Autum ...</td>
              <td className="py-3">permata.jpg</td>
              <td className="py-3">Cancel</td>
              <td className="py-3">
                <Button to="#" className="imgpencarian">
                  <img src="/img/pencarian.svg" alt=""></img>
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div
        className="bg-warning"
        style={{
          marginTop: 60,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <p>
          Copyright @ 2022 Dewe Tour - Muhammad Ridho - NIS. All Rights reserved
        </p>
      </div>
    </div>
  );
}
export default Transaction;
