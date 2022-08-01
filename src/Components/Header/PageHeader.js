import './PageHeader.css';
import { Fragment } from "react";
import { Navbar, Container } from "react-bootstrap";
import EditClaim from '../Main/EditClaimPage/EditClaim';
import { Link } from 'react-router-dom';

const PageHeader = (
  
) => {
  
    return  <Fragment>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand><Link to="/" className="nav_title_font text-info nav-link-text">Small Claims</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <div className="me-auto">
      <Link to="/" className="d-block d-lg-inline nav-link-text" >Home</Link>
      <Link to="/newClaim" className="d-block d-lg-inline nav-link-text" >New Claim</Link>
      <Link to="/manageClaims" className="d-block d-lg-inline nav-link-text" >Manage Claims</Link>
    </div>
    <div>
      <button className="btn nav-link-text btn-outline-info">Sign Out</button>
    </div>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </Fragment>
}

export default PageHeader;