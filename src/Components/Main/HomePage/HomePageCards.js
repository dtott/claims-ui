import { Fragment } from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const HomePageCards = () => {

    const navigate = useNavigate();

    const newClaimClick = () => {
        navigate("/newClaim");
    }

    const manageClaimClick = () => {
        navigate("/manageClaims");
    }

    return <Fragment>
        <div className="container">
    <div className="row justify-content-center">
    <div className="col-5">
<Card className="card-width mt-5">
      <Card.Img variant="top" src="/Images/HomePageImg1.jpg" />
      <Card.Body>
        <Card.Title className="card-title-font"><h3>New Claim</h3></Card.Title>
        <Card.Text className="card-text-size">
        Open a new claim and begin processing using the button below
        </Card.Text>
        <Button onClick={newClaimClick} variant="outline-primary">Open New Claim</Button>
      </Card.Body>
    </Card>
    </div>
    <div className="col-5">
    <Card className="card-width mt-5">
      <Card.Img variant="top" src="/Images/HomePageImg2.jpg" />
      <Card.Body>
        <Card.Title><h3>Manage Claims</h3></Card.Title>
       <Card.Text className="card-text-size">
          To manage the progress of existing claims use the button below
          </Card.Text>
        <Button onClick={manageClaimClick} variant="outline-primary">Manage Claims</Button>
      </Card.Body>
    </Card>
    </div>
        </div>
        </div>
    </Fragment>
}

export default HomePageCards;