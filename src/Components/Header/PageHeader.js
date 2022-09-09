import './PageHeader.css';
import { Fragment } from "react";
import { Navbar, Container, Dropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const PageHeader = () => {

  const username = useSelector(state => state.user.name);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = () => {
      navigate("/login");
  }

  const logout = () => {
    dispatch({type : "logout"});
    navigate("/");
  }
  
    return  <Fragment>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand><Link to="/" className="nav_title_font text-info nav-link-text">Speedy Claims</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <div className="me-auto">
      <Link to="/" className="d-block d-lg-inline nav-link-text" >Home</Link>
      <Link data-testId="newClaim" to="/newClaim" className="d-block d-lg-inline nav-link-text" >New Claim</Link>
      <Link to="/manageClaims" className="d-block d-lg-inline nav-link-text" >Manage Claims</Link>
    </div>
    <div>
      {username === "" ?
      <button className="btn nav-link-text btn-outline-info" onClick={login} id="login">Login</button>
      : <Dropdown>
      <Dropdown.Toggle className="px-3" variant="outline-info" id="logout">
        {username + "  "}
      </Dropdown.Toggle>

      <Dropdown.Menu variant="dark">
        <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>}
    </div>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </Fragment>
}

export default PageHeader;