import { Fragment } from "react";

const DisplayClaimForm = (props) => {

    const viewClaim=props.viewClaim, getClaimDetails=props.getClaimDetails, handleChange=props.handleChange, 
    PropertyType=props.PropertyType, motorType=props.motorType, petType=props.petType, onSubmit=props.onSubmit, 
    rendered=props.rendered, navigate=props.navigate;


    return <Fragment>{rendered ? <div className="d-flex justify-content-center my-4">
    <form onSubmit={onSubmit} className="card p-3 bg-light col-xl-6 col-lg-10 col-md-10 col-sm-10 col-11 mb-7">

        <h1 className="text-center fw-bold display-6 mt-2" hidden={!viewClaim}>Full Details</h1>
        <h1 className="text-center fw-bold display-6 mt-2" hidden={viewClaim}>Edit Details</h1>

        <hr></hr>

        {/* row 1 */}
        <div className="form-group row">
            <div className="col-12 col-lg-6">
                <label className="col-form-label form-text-left" htmlFor="policyNumber">Policy Number</label>
                <input type="number" className="form-control" id="policyNumber" disabled defaultValue={getClaimDetails.claimId}></input>
            </div>
            <div className="col-12 col-lg-6">
                <label className="col-form-label form-text-left" htmlFor="type">Insurance Type</label>
                <input type="text" className="form-control" id="firstName" disabled defaultValue={getClaimDetails.type}></input>
            </div>
        </div>

        {/* row 2 */}
        <div className="form-group row">
            <div className="col-12 col-lg-6">
                <label className="col-form-label" htmlFor="claimOpenDate">Claim Open Date</label>
                <input type="date" className="form-control" id="claimOpenDate" disabled defaultValue={getClaimDetails.claimOpenDate}></input>
            </div>
            <div className="col-12 col-lg-6">
                <label className="col-form-label form-text-left" htmlFor="type">Status</label>
                <input type="text" className="form-control" id="firstName" disabled defaultValue={getClaimDetails.status.status}></input>
            </div>
        </div>

        <div className="mt-3">
            <hr></hr>
        </div>

        {/* row 3 */}
        <div className="form-group row">
            <div className="col-12 col-lg-6">
                <label className="col-form-label form-text-left" htmlFor="title">Title</label>
                <select defaultValue="default" onChange={handleChange} id="title" disabled={viewClaim} className="form-select form-control">
                    <option value="default" disabled hidden>{getClaimDetails.customer.title}</option>
                    <option>Mr</option>
                    <option>Mrs</option>
                    <option>Dr</option>
                    <option>Prof.</option>
                    <option>Miss</option>
                    <option>Do not specify</option>
                </select>
            </div>
            <div className="col-12 col-lg-6">
                <label className="col-form-label" htmlFor="firstName">First Name</label>
                <input type="text" className="form-control" onChange={handleChange} id="firstName" required disabled={viewClaim} defaultValue={getClaimDetails.customer.firstName}></input>
            </div>
        </div>

        {/* row 4 */}
        <div className="form-group row">
            <div className="col-12 col-lg-6">
                <label className="col-form-label" htmlFor="surname">Surname</label>
                <input type="text" className="form-control" onChange={handleChange} required id="surname" disabled={viewClaim} defaultValue={getClaimDetails.customer.surname}></input>
            </div>
            <div className="col-12 col-lg-6">
                <label className="col-form-label" htmlFor="estimatedValue">Estimated Value</label>
                <input type="number" className="form-control" onChange={handleChange} required max="500" step=".01" id="estimatedValue" disabled={viewClaim} defaultValue={getClaimDetails.estimatedValue}></input>
            </div>
        </div>

        {/* row 5 */}
        <div className="form-group row">
            <div className="col-12 col-lg-6">
                <label className="col-form-label" htmlFor="incidentDate">Incident Date</label>
                <input type="date" className="form-control" onChange={handleChange} required id="incidentDate" disabled={viewClaim} defaultValue={getClaimDetails.incidentDate}></input>
            </div>
            <div className="col-12 col-lg-6">

            </div>
        </div>

        <div className="mt-3">
            <hr></hr>
        </div>

        {/* Only displays if Motor Insurance Type is selected */}
        {!motorType ? <div>
            <div className="form-group row">
                <div className="col-12 col-lg-6">
                    <label className="col-form-label" htmlFor="make">Car Make</label>
                    <input type="text" className="form-control" onChange={handleChange} id="make" disabled={viewClaim} defaultValue={getClaimDetails.make}></input>
                </div>
                <div className="col-12 col-lg-6">
                    <label className="col-form-label" htmlFor="model">Car Model</label>
                    <input type="text" className="form-control" onChange={handleChange} id="model" disabled={viewClaim} defaultValue={getClaimDetails.model}></input>
                </div>
            </div>

            <div className="form-group row">
                <div className="col-12 col-lg-6">
                    <label className="col-form-label" htmlFor="year">Car Year</label>
                    <input type="text" className="form-control" onChange={handleChange} id="year" disabled={viewClaim} defaultValue={getClaimDetails.year}></input>
                </div>
                <div className="mt-3">
                    <hr></hr>
                </div>
            </div>
        </div> : null}

        {/* Only display if Property Insurance Type is selected */}
        {!PropertyType ?
            <div className="row">
                <div className="col-12">
                    <label className="col-form-label" htmlFor="address">Property Address</label>
                    <input type="text" className="form-control" onChange={handleChange} id="address" disabled={viewClaim} defaultValue={getClaimDetails.address}></input>
                </div>
                <div className="mt-3">
                    <hr></hr>
                </div>
            </div>
            : null}

        {/* Only displays if Pet Insurance Type is selected */}
        {!petType ?
            <div className="row">
                <div className="col">
                    <label className="col-form-label" htmlFor="animalType">Animal Type</label>
                    <input type="text" className="form-control" onChange={handleChange} id="animalType" disabled={viewClaim} defaultValue={getClaimDetails.animalType}></input>
                </div>
                <div className="col">
                    <label className="col-form-label" htmlFor="breed">Animal Breed</label>
                    <input type="text" className="form-control" onChange={handleChange} id="breed" disabled={viewClaim} defaultValue={getClaimDetails.breed}></input>
                </div>
                <div className="mt-3">
                    <hr></hr>
                </div>
            </div>
            : null}

        {/* row 6 */}
        <div className="row">
            <div className="col-12">
                <label className="col-form-label" htmlFor="claimReason">Reason for the claim</label>
                <textarea id="claimReason" className="form-control" onChange={handleChange} required rows="2" maxLength="100" disabled={viewClaim} defaultValue={getClaimDetails.claimReason}></textarea>
            </div>
            <br></br>
            <div className="col-12">
                <label className="col-form-label" htmlFor="claimDescription">Incident Description</label>
                <textarea id="claimDescription" className="form-control" onChange={handleChange} required rows="6" maxLength="500" disabled={viewClaim} defaultValue={getClaimDetails.claimDescription}></textarea>
                <small className="form-text text-muted">*500 characters</small>
            </div>
            <div className="col-12">
                <label className="col-form-label" htmlFor="furtherDetails">Further Details</label>
                <textarea id="furtherDetails" className="form-control" onChange={handleChange} rows="2" maxLength="100" disabled={viewClaim} defaultValue={getClaimDetails.furtherDetails}></textarea>
            </div>
            <div>
                <button type="submit" hidden={viewClaim} className="btn btn-success col mt-4">Update Details</button>
                <button className="btn btn-danger col mt-4" onClick={() => navigate(-1)}>Back</button>
            </div>
        </div>

    </form>

</div> : <p>Please wait...</p>}
</Fragment>


}

export default DisplayClaimForm