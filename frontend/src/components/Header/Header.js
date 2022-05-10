import React from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../actions/userActions";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const logoutHandler = () => {
    // localStorage.removeItem("userInfo");
    // history.push("/");
    dispatch(logout());
    navigate("/");
  };
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Nav
          style={{
            fontWeight: "700",
          }}
        >
          <Link className="nav-link" to="/">
            Note Drive
          </Link>
        </Nav>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="m-auto">
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Nav>
          <Nav style={{ maxHeight: "100px" }} navbarScroll>
            <Link className="nav-link" to="/mynotes">
              My Notes
            </Link>

            <NavDropdown
              title="Courage Ihensekhien"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action4">My Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={logoutHandler}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
