import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function NavbarAfterLogins() {
  const goes = useNavigate();

  return (
    <div className="afterloginkali">
      <Navbar>
        <Container className="d-flex justify-content-around">
          <Navbar.Brand href="/">
            <img src="/img/Icon.png" alt=""></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Dropdown>
              <Dropdown.Toggle
                variant=""
                id="dropdown-basic"
                className="border-0"
              >
                <img src="/img/akunnavbar.svg" alt=""></img>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/profile">
                  {" "}
                  <img src="/img/user.svg" alt=""></img> Profile
                </Dropdown.Item>
                <Dropdown.Item href="/beforebuy">
                  {" "}
                  <img src="/img/bill.svg" alt=""></img> Pay
                </Dropdown.Item>
                <hr></hr>
                <Dropdown.Item
                  href="#"
                  onClick={() => {
                    localStorage.removeItem("KeyLogin");
                    goes("/");
                  }}
                >
                  {" "}
                  <img src="/img/logout.svg" alt=""></img> Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarAfterLogins;
