import { Fragment } from "react";

const EditClaimForm = (props) => {

    console.log(props.ClaimStatus);

    return <Fragment>
    <div className="d-flex justify-content-center mt-5">
        <form className="card p-3 col-xl-6 col-lg-10 col-md-10 col-sm-10 col-11">
            <div className="row">
            <h3 className="card-header">{props.CustomerName}</h3>
            <div className="form-group col-8 mt-3">
            <label className="col-form-label col-12" htmlFor="PolicyID"><span className="span-bold">Policy Number:</span>  {props.PolicyNo}</label>
            <label className="col-form-label col-12" htmlFor="ClaimStatus"><span className="span-bold">Status:</span>  {props.ClaimStatus}</label>
            <label className="col-form-label col-12" htmlFor="InsuranceType"><span className="span-bold">Insurance Type:</span>  {props.InsuranceType}</label>
            <label className="col-form-label col-12" htmlFor="ClaimStartDate"><span className="span-bold">Claim Start Date:</span>  {props.ClaimDate}</label>
            <label className="col-form-label col-12" htmlFor="EstimatedAmount"><span className="span-bold">Estimated Claim Amount:</span>  {props.ClaimAmount}</label>
            <label className="col-form-label col-12" htmlFor="ClaimReason"><span className="span-bold">Reason for the claim: </span>  {props.ClaimReason}</label>
            <label className="col-form-label col-12" htmlFor="ClaimDescription"><span className="span-bold">Reason for the claim: </span>  {props.ClaimDescription}</label>
            </div>
            <div className="form-group col-4 mt-3">
            <p class="card-text"><small className="text-muted text-center">Please update status below</small></p>
            <select className="col-12 form-select select-bg">
                <option>New</option>
                <option>Open</option>
                <option>Accepted</option>
                <option>Paid</option>
                <option>Rejected</option>
                <option>Pushed</option>
            </select>
            <button className="btn btn-success col-12">Set Status</button>
            </div>
            </div>
        </form>
    </div>
    </Fragment>
}

export default EditClaimForm;