import { Fragment, useEffect, useState } from "react";
import { Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { updateClaimStatus } from "../../Data/DataFunctions";


const DisplayClaim = (props) => {

    const [editAvailable, setEditAvailable] = useState(false);

    const navigate = useNavigate();

    const [checkClaimChange, setClaimChange] = useState(0);

    console.log(checkClaimChange + " " + props.claimByID.status.status);

    const [touched, setTouched] = useState(false);

    useEffect(() => {
        if (props.claimByID.status.id === 1 || props.claimByID.status.id === 2 || props.claimByID.status.id === 3) {
            setEditAvailable(true);
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

    const [newStatus, setNewStatus] = useState();

    const statusUpdate = (e) => {
        setTouched(true);
        setNewStatus(e.target.options.selectedIndex);
    }

    const SubmitNewStatus = () => {

        if (newStatus === 4 || newStatus === 5 || newStatus === 6) {
            setEditAvailable(false);
        }
        if (props.claimByID.status.id !== newStatus && props.claimByID.status.id !== null) {

            //Api call for put request
            const response = updateClaimStatus(props.claimByID.claimId, newStatus);
            response.then(result => {
                if (result.status === 200) {
                    console.log("Update Complete " + result.status);
                    props.setStatusWasUpdated(props.statusWasUpdated + 1);
                    setClaimChange(checkClaimChange + 1);
                    setTouched(false);
                } else {
                    console.log("Something went wrong" + result.status);
                }
            })
                .catch(error => console.log("something went wrong new" + error))
        }
    }

    console.log(newStatus);

    const resetStatusInput = (e) => {
        e.preventDefault();
        document.getElementById("type").value = "default";
        setTouched(false);
        setNewStatus();
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return <Fragment>
        <div className="d-flex justify-content-center my-4">
            <form onSubmit={onSubmit} className="card p-3 bg-light col-xl-6 col-lg-10 col-md-10 col-sm-10 col-11 mb-7">
                <div className="form-group mb-4">

                <div className="col-12">
                <h1 className="display-6 mt-3 fw-bold">Manage Claim</h1>
                <br></br>
                <div>
                <hr></hr>
                </div>
                </div>

                <div className="col-12">
                <h4 className="form-text-left">Claim Details</h4>
                </div>

            {/* row 1 details */}
                <div className="form-group row">
                <div className="col-lg-6 col-12">
                <label className="col-form-label form-text-left">Policy Number</label>
                <label className="form-control" disabled>{props.claimByID.claimId}</label>
                </div>
                <div className="col-lg-6 col-12">
                <label className="col-form-label form-text-left">Current Status</label>
                <label className="form-control" disabled>{props.claimByID.status.status.charAt(0).toUpperCase() + props.claimByID.status.status.slice(1)}</label>
                </div>
                </div>

            {/* row 2 details */}
                <div className="form-group row">
                <div className="col-lg-6 col-12">
                <label className="col-form-label form-text-left">Name</label>
                <label className="form-control" disabled>{props.claimByID.customer.title} {props.claimByID.customer.firstName} {props.claimByID.customer.surname}</label>
                </div>
                <div className="col-lg-6 col-12">
                <label className="col-form-label form-text-left">Estimated Amount</label>
                <label className="form-control" disabled>${parseFloat(props.claimByID.estimatedValue).toFixed(2)}</label>
                </div>
                </div>

            {/* row 3 details */}
                <div className="form-group row">
                <div className="col-lg-6 col-12">
                <label className="col-form-label form-text-left">Type</label>
                <label className="form-control" disabled>{props.claimByID.type }</label>
                </div>
                </div>

            {/* row 4 details */}
                <div className="form-group row">
                <div className="col-lg-6 col-12">
                <label className="mt-3"><button onClick={view} className="btn btn-primary">View Full Details</button></label>
                <label className="mt-3"></label>
            {editAvailable?
                <label className="mt-3"><button onClick={edit} className="btn btn-success">Edit Details</button></label>
                :
                <label className="mt-3"><button disabled className="btn btn-success">Edit Details</button></label>
            }
                </div>
                </div>

                <div className="mt-3">
                <hr></hr>
                </div>

                <div className="row">
                <div className="col-12">
                <h4 className="form-text-left">Review Claim</h4>
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
                <Link to="/notes" state={{ claimId: props.claimByID.claimId }}><label><Button variant="primary">Notes <Badge bg="secondary"></Badge></Button></label></Link>
                <Link to="/tasks" state={{ claimId: props.claimByID.claimId }}><label><Button variant="success">Tasks <Badge bg="secondary"></Badge></Button></label></Link>
                </div>
                </div>

                <div className="mt-3">
                <hr></hr>
                </div>

                <div className="row">
                <div className="col-12">
                <h4 className="form-text-left">{editAvailable?"Process Application": "Claim Closed"}</h4>
                <small className="form-text text-muted small-margin">{editAvailable?"Update the application status after review": "The claim has been closed and archived"}</small>
                </div>

            {!editAvailable?<label className="col-form-label">Closed status of: </label>: null}

                <div className="col-12">
                <select onChange={statusUpdate} disabled={!editAvailable} defaultValue="default" id="type" className="form-select form-control">
                <option disabled hidden value="default">{props.claimByID.status.status.charAt(0).toUpperCase() + props.claimByID.status.status.slice(1)} - {props.claimByID.status.description}</option>
                <option hidden={props.claimByID.status.id === 1} value="1">New - awaiting assessment</option>
                <option hidden={props.claimByID.status.id === 2} value="2">Open - currently under assessment</option>
                <option hidden={props.claimByID.status.id === 3} value="3">Accepted - awaiting payment</option>
                <option hidden={props.claimByID.status.id === 4} value="4">Paid - payment complete</option>
                <option hidden={props.claimByID.status.id === 5} value="5">Rejected - claim unsuccessful</option>
                <option hidden={props.claimByID.status.id === 6} value="6">Pushed - passed to main claims system</option>
                </select>
                </div>
            {editAvailable?
                <div className="col-12">
                <label><button disabled={!touched} onClick={SubmitNewStatus} className="btn btn-success">Set Status</button></label>
                <label><button disabled={!touched} onClick={resetStatusInput} className="btn btn-danger">Reset</button></label>
                </div>: null}

                </div>
                </div>


            </form>

        </div>
    </Fragment>
}

export default DisplayClaim;


