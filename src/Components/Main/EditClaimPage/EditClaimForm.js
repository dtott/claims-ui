import { Fragment } from "react";
import EditClaim from "./EditClaim";

const EditClaimForm = (props) => {

    return <Fragment><div className="d-flex justify-content-center">
        <form className=" card p-3 bg-light col-xl-5 col-lg-10 col-md-10 col-sm-10 col-11 mb-7">
            <div className="form-group">
                <label className="col-form-label form-text-left col-6" htmlFor="PolicyID"><span className="span-bold">Policy Number:</span>  {props.PolicyNo}</label>
                <label className="col-form-label form-text-left col-6" htmlFor="InsuranceType"><span className="span-bold">Insurance Type:</span>  {props.InsuranceType}</label>
            </div>
            <div className="form-group">
            <label className="col-form-label col-6" htmlFor="ClaimStartDate"><span className="span-bold">Claim Start Date:</span>  {props.ClaimDate}</label>
                <label className="col-form-label" htmlFor="EstimatedAmount"><span className="span-bold">Estimated Claim Amount:</span>  {props.ClaimAmount}</label>
                <br></br>
                <label className="col-form-label col-12" htmlFor="CustomerName"><span className="span-bold">Customer's Full Name:</span>  {props.CustomerName}</label>
            </div>
            <div className="form-group">
                <label className="col-form-label col-12" htmlFor="ClaimReason"><span className="span-bold">Reason for the claim: </span>  {props.ClaimReason}</label>
            </div>
            <div className="form-group">
                <label className="col-form-label" htmlFor="ClaimDescription">Description of the incident leading to the claim</label>
                <textarea id="ClaimDescription" className="form-control" rows="6" minLength="500" placeholder="Enter Incident Description" defaultValue={props.ClaimDescription}></textarea>
                <small className="form-text text-muted">*Reason has to be below 500 characters</small>
            </div>
            <div className="justify-content-center text-center">
                <button type="submit" className="btn btn-outline-success">Open New Claim</button>
                <button type="submit" className="btn btn-outline-danger">Reset</button>
            </div>
        </form>
    </div>
    </Fragment>
}

export default EditClaimForm;