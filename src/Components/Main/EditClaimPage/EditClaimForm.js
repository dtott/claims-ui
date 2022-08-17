<<<<<<< HEAD
import { Fragment, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getClaim } from "../../Data/sample-data";
=======
import { Fragment } from "react";
>>>>>>> 3e32ca3b335f481ec2e5dbb0597a1f7988b2efd0

const EditClaimForm = (props) => {

    const navigate = useNavigate();

    const location = useLocation();
    const { claimId, viewClaim } = location.state;

    const getClaimDetails = getClaim(claimId);

    const [motorType, setMotorType] = useState(true);
    const [PropertyType, setPropertyType] = useState(true);
    const [petType, setPetType] = useState(true);

    useEffect(() => {
        switch (getClaimDetails.type) {
            case "Property":
                setPropertyType(false);
                break;
            case "Motor":
                setMotorType(false);
                break;
            case "Pet":
                setPetType(false);
                break;
            default:
        }
    }, []);

    const onSubmit = (event) => {
        event.preventDefault();
    }

    console.log(viewClaim);


    return <Fragment><div className="d-flex justify-content-center mt-4">
        <form onSubmit={onSubmit} className="card p-3 bg-light col-xl-5 col-lg-10 col-md-10 col-sm-10 col-11 mb-7">
            <div className="form-group row">

            <div hidden={!viewClaim} className="col-12">
            <h4 className="form-text-left">Full Details</h4>
            <div>
                <hr></hr>
                </div>
            </div>

                {/* Column 1 of form */}
                <div className="col-6">
                    <label className="col-form-label form-text-left" htmlFor="policyNumber">Policy Number</label>
                    <input type="number" className="form-control" id="policyNumber" disabled defaultValue={getClaimDetails.policyNumber}></input>
                    <label className="col-form-label" htmlFor="firstName">First Name</label>
                    <input type="text" className="form-control" id="firstName" disabled={viewClaim} defaultValue={getClaimDetails.firstName}></input>
                    <label className="col-form-label form-text-left" htmlFor="type">Insurance Type</label>
                    <input type="text" className="form-control" id="firstName" disabled defaultValue={getClaimDetails.type}></input>
                    <label className="col-form-label" htmlFor="claimOpenDate">Claim Open Date</label>
                    <input type="date" className="form-control" id="claimOpenDate" disabled defaultValue={getClaimDetails.claimOpenDate}></input>
                </div>
                {/* End of Column 1 */}

                {/* Column 2 of form */}
                <div className="col-6">
                    <label className="col-form-label form-text-left" htmlFor="title">Title</label>
                    <select defaultValue="default" id="title" disabled={viewClaim} className="form-select form-control">
                        <option value="default" disabled hidden>{getClaimDetails.title}</option>
                        <option>Mr</option>
                        <option>Mrs</option>
                        <option>Dr</option>
                        <option>Prof.</option>
                        <option>Miss</option>
                        <option>Do not specify</option>
                    </select>
                    <label className="col-form-label" htmlFor="surname">Surname</label>
                    <input type="text" className="form-control" id="surname" disabled={viewClaim} defaultValue={getClaimDetails.surname}></input>
                    <input id="status" defaultValue={getClaimDetails.status} hidden></input>
                    <label className="col-form-label" htmlFor="estimatedValue">Estimated Value</label>
                    <input type="number" className="form-control" id="estimatedValue" disabled={viewClaim} defaultValue={getClaimDetails.estimatedValue}></input>
                    <label className="col-form-label" htmlFor="incidentDate">Incident Date</label>
                    <input type="date" className="form-control" id="incidentDate" disabled={viewClaim} defaultValue={getClaimDetails.incidentDate}></input>
                </div>
                {/* End of Column 2 */}

                <div className="mt-3">
                    <hr></hr>
                </div>
            </div>


            {/* Only displays if Motor Insurance Type is selected */}
            {!motorType ? <div className="form-group row">
                <div className="col-6">
                    <label className="col-form-label" htmlFor="make">Car Make</label>
                    <input type="text" className="form-control" id="make" disabled={viewClaim} defaultValue={getClaimDetails.make}></input>
                    <label className="col-form-label" htmlFor="year">Car Year</label>
                    <input type="text" className="form-control" id="year"  disabled={viewClaim} defaultValue={getClaimDetails.year}></input>
                </div>
                <div className="col-6">
                    <label className="col-form-label" htmlFor="model">Car Model</label>
                    <input type="text" className="form-control" id="model" disabled={viewClaim} defaultValue={getClaimDetails.model}></input>
                </div>
                <div className="mt-3">
                    <hr></hr>
                </div>
            </div> : null}

            {/* Only display if Property Insurance Type is selected */}
            {!PropertyType ?
                <div className="row">
                    <div className="col-12">
                        <label className="col-form-label" htmlFor="address">Property Address</label>
                        <input type="text" className="form-control" id="address" disabled={viewClaim} defaultValue={getClaimDetails.address}></input>
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
                        <input type="text" className="form-control" id="animalType" disabled={viewClaim} defaultValue={getClaimDetails.animalType}></input>
                    </div>
                    <div className="col">
                        <label className="col-form-label" htmlFor="breed">Animal Breed</label>
                        <input type="text" className="form-control" id="breed" disabled={viewClaim} defaultValue={getClaimDetails.breed}></input>
                    </div>
                    <div className="mt-3">
                        <hr></hr>
                    </div>
                </div>
                : null}

            <div className="row">
                <div className="col-12">
                    <label className="col-form-label" htmlFor="claimReason">Reason for the claim</label>
                    <textarea id="claimReason" className="form-control" rows="2" minLength="100" disabled={viewClaim} defaultValue={getClaimDetails.claimReason}></textarea>
                </div>
                <br></br>
                <div className="col-12">
                    <label className="col-form-label" htmlFor="claimDescription">Incident Description</label>
                    <textarea id="claimDescription" className="form-control" rows="6" minLength="500" disabled={viewClaim} defaultValue={getClaimDetails.claimDescription}></textarea>
                    <small className="form-text text-muted">*500 characters</small>
                </div>
                <div className="col-12">
                    <label className="col-form-label" htmlFor="furtherDetails">Further Details</label>
                    <textarea id="furtherDetails" className="form-control" rows="2" minLength="500" disabled={viewClaim} defaultValue={getClaimDetails.furtherDetails}></textarea>
                </div>
                <div>
                    <button type="submit" hidden={viewClaim} className="btn btn-success col mt-4">Update Details</button>
                    <button className="btn btn-danger col mt-4" onClick={() => navigate(-1)}>Back</button>
                    </div>
            </div>

        </form>
        
    </div>
    </Fragment>

}





















//     <Fragment>
//     <div className="d-flex justify-content-center mt-5">
//         <form className="card p-3 col-xl-6 col-lg-10 col-md-10 col-sm-10 col-11">
//             <div className="row">
//             <h3 className="card-header">{props.CustomerName}</h3>
//             <div className="form-group col-8 mt-3">
//             <label className="col-form-label col-12" htmlFor="PolicyID"><span className="span-bold">Policy Number:</span>  {getClaimDetails.policyNumber}</label>
//             <label className="col-form-label col-12" htmlFor="ClaimStatus"><span className="span-bold">Status:</span>  {props.ClaimStatus}</label>
//             <label className="col-form-label col-12" htmlFor="InsuranceType"><span className="span-bold">Insurance Type:</span>  {props.InsuranceType}</label>
//             <label className="col-form-label col-12" htmlFor="ClaimStartDate"><span className="span-bold">Claim Start Date:</span>  {props.ClaimDate}</label>
//             <label className="col-form-label col-12" htmlFor="EstimatedAmount"><span className="span-bold">Estimated Claim Amount:</span>  {props.ClaimAmount}</label>
//             <label className="col-form-label col-12" htmlFor="ClaimReason"><span className="span-bold">Reason for the claim: </span>  {props.ClaimReason}</label>
//             <label className="col-form-label col-12" htmlFor="ClaimDescription"><span className="span-bold">Reason for the claim: </span>  {props.ClaimDescription}</label>
//             </div>
//             <div className="form-group col-4 mt-3">
//             <p className="card-text"><small className="text-muted text-center">Please update status below</small></p>
//             <select className="col-12 form-select select-bg">
//                 <option>New</option>
//                 <option>Open</option>
//                 <option>Accepted</option>
//                 <option>Paid</option>
//                 <option>Rejected</option>
//                 <option>Pushed</option>
//             </select>
//             <button className="btn btn-success col-12">Set Status</button>
//             </div>
//             </div>
//         </form>
//     </div>
//     </Fragment>
// }

export default EditClaimForm;