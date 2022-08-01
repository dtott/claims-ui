import NewClaim from "./NewClaim";

const NewClaimForm = () => {
    return <div className="d-flex justify-content-center">
        <form className=" card p-3 bg-light col-xl-5 col-lg-10 col-md-10 col-sm-10 col-11 mb-7">
            <div className="form-group">
                <label className="col-form-label form-text-left" htmlFor="PolicyID">Policy Number</label>
                <input type="number" className="form-control" id="PolicyID" placeholder="Enter Policy Number"></input>
            </div>
            <div className="form-group">
                <label className="col-form-label form-text-left" htmlFor="InsuranceType">Insurance Type</label>
                <select defaultValue="default" id="InsuranceType" className="form-select form-control">
                    <option value="default" disabled hidden>Select Insurance Type</option>
                    <option value="Property">Property</option>
                    <option value="Motor">Motor</option>
                    <option value="Pet">Pet</option>
                </select>
            </div>
            <div className="form-group">
                <label className="col-form-label" htmlFor="CustomerName">Customer's Full Name</label>
                <input type="text" className="form-control" id="CustomerName" placeholder="Enter Full Name"></input>
            </div>
            <div className="form-group">
                <label className="col-form-label" htmlFor="ClaimStartDate">Claim Start Date</label>
                <input type="date" className="form-control" id="ClaimStartDate"></input>
            </div>
            <div className="form-group">
                <label className="col-form-label" htmlFor="EstimatedAmount">Estimated Claim Amount</label>
                <input type="number" className="form-control" maxLength="5" max="500" step="any" id="EstimatedAmount" placeholder="Enter Claim Amount"></input>
                <small className="form-text text-muted">*Amount cannot exceed $500.00</small>
            </div>
            <div className="form-group">
                <label className="col-form-label" htmlFor="ClaimReason">Reason for the claim</label>
                <textarea id="ClaimReason" className="form-control" rows="2" minLength="100" placeholder="Enter Reason For Claim"></textarea>
                <small className="form-text text-muted">*Reason has to be below 100 characters</small>
            </div>
            <div className="form-group">
                <label className="col-form-label" htmlFor="ClaimDescription">Description of the incident leading to the claim</label>
                <textarea id="ClaimDescription" className="form-control" rows="6" minLength="500" placeholder="Enter Incident Description"></textarea>
                <small className="form-text text-muted">*Reason has to be below 500 characters</small>
            </div>
            <div className="justify-content-center text-center">
                <button type="submit" className="btn btn-outline-success">Open New Claim</button>
                <button type="submit" className="btn btn-outline-danger">Reset</button>
            </div>
        </form>
    </div>
}

export default NewClaimForm;