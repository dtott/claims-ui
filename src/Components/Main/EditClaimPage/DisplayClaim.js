import { Fragment, useEffect, useState } from "react";
import { Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useDispatch } from 'react-redux';


const DisplayClaim = (props) => {
const [editAvailable, setEditAvailable] = useState(false);

const navigate = useNavigate();

useEffect(() => {
    switch (props.claimByID.status.status) {
        case "new":
            setEditAvailable(true);
            break;
        case "open":
            setEditAvailable(true);
            break;
        case "accepted":
            setEditAvailable(true);
            break;
        default:
    }
}, []);


const edit = (e) => {
    e.preventDefault();
    navigate("/EditClaimForm/" + props.claimByID.claimId);
}

const view = (e) => {
    e.preventDefault();
    navigate("/displayClaimForm/" + props.claimByID.claimId);
}

        return <Fragment>
        <div className="d-flex justify-content-center mt-4">
    <form className="card p-3 bg-light col-xl-6 col-lg-10 col-md-10 col-sm-10 col-11 mb-7">
        <div className="form-group row">

            <div className="col-12">
            <h3 className="col-12 mt-3 display-5">Manage Claim</h3>
            <div>
                <hr></hr>
                </div>
            </div>

            <div className="col-12">
            <h4 className="form-text-left">Claim Details</h4>
            </div>

            {/* Column 1 of form */}
            <div className="col-6">
                <label className="col-form-label form-text-left">Policy Number</label>
                <label className="form-control" disabled>{props.claimByID.claimId}</label>
                <label className="col-form-label form-text-left">Name</label>
                <label className="form-control" disabled>{props.claimByID.customer.title} {props.claimByID.customer.firstName} {props.claimByID.customer.surname}</label>
                <label className="col-form-label form-text-left">Type</label>
                <label className="form-control" disabled>{props.claimByID.type}</label>
                <label className="mt-3"><button onClick={view} className="btn btn-primary">View Full Details</button></label>
                <label className="mt-3"></label>
                {editAvailable ?
                        <label className="mt-3"><button onClick={edit} className="btn btn-success">Edit Details</button></label>
                        :
                        <label className="mt-3"><button disabled={!editAvailable} className="btn btn-success">Edit Details</button></label>
                    }


            </div>
            {/* End of Column 1 */}

            {/* Column 2 of form */}
            <div className="col-6">
                <label className="col-form-label form-text-left">Current Status</label>
                <label className="form-control" disabled>{props.claimByID.status.status.charAt(0).toUpperCase() + props.claimByID.status.status.slice(1)}</label>
                <label className="col-form-label form-text-left">Estimated Amount</label>
                <label className="form-control" disabled>${parseFloat(props.claimByID.estimatedValue).toFixed(2)}</label>
            </div>
            {/* End of Column 2 */}

            <div className="mt-3">
                <hr></hr>
            </div>

            <div className="col-12">
            <h4 className="form-text-left">Manage Claim Status</h4>
            <small className="form-text text-muted small-margin">Review the Information below to process application</small>
            </div>
            
            <div className="col-12">
                <label className="col-form-label">Reason for the claim</label>
                <textarea className="form-control" rows="2" minLength="100" defaultValue={props.claimByID.claimReason} disabled></textarea>
            </div>
            <br></br>
            <div className="col-12">
                <label className="col-form-label" >Incident Description</label>
                <textarea className="form-control" rows="2" minLength="100" defaultValue={props.claimByID.claimDescription} disabled></textarea>
            </div>
            <div className="col-12">
                <label className="col-form-label">Further Details</label>
                <textarea className="form-control" rows="2" minLength="100" defaultValue={props.claimByID.furtherDetails} disabled></textarea>
            </div>

            <div className="col-6">
            
            <Link to="/notes" state={{ claimId: props.claimByID.claimId}}><label><Button variant="primary">Notes <Badge bg="secondary"></Badge></Button></label></Link>
            <Link to="/tasks" state={{ claimId: props.claimByID.claimId}}><label><Button variant="success">Tasks <Badge bg="secondary"></Badge></Button></label></Link>
            </div>
            <div className="col-6">

            </div>

        </div>
        
    </form>
    
</div>
    </Fragment>
    }

export default DisplayClaim;


