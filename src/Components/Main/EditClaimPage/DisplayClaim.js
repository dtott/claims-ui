import { Fragment, useEffect, useState } from "react";
import { Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getClaim, getNotesForClaim } from "../../Data/sample-data";

const DisplayClaim = (props) => {

    const getClaimDetails = getClaim(props.claimId);
    const [editAvailable, setEditAvailable] = useState(false);

    useEffect(() => {
        switch (getClaimDetails.status) {
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


    const retrieveNotes = getNotesForClaim(props.claimId);
    const numOfNotes = getNotesForClaim(props.claimId).length;


    console.log(numOfNotes);


    return <Fragment><div className="d-flex justify-content-center mt-4">
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
                <label className="form-control" disabled>{getClaimDetails.policyNumber}</label>
                <label className="col-form-label form-text-left">Name</label>
                <label className="form-control" disabled>{getClaimDetails.title} {getClaimDetails.firstName} {getClaimDetails.surname}</label>
                <label className="col-form-label form-text-left">Type</label>
                <label className="form-control" disabled>{getClaimDetails.type}</label>
                <Link to="/editClaimForm" state={{ claimId: getClaimDetails.claimId, viewClaim: true}}><label className="mt-3"><button className="btn btn-primary">View Full Details</button></label></Link>
                <label className="mt-3"></label>
                {editAvailable ?
                        <Link to="/editClaimForm" state={{ claimId: getClaimDetails.claimId }}><label className="mt-3"><button className="btn btn-success">Edit Details</button></label></Link>
                        :
                        <label className="mt-3"><button disabled={!editAvailable} className="btn btn-success">Edit Details</button></label>
                    }


            </div>
            {/* End of Column 1 */}

            {/* Column 2 of form */}
            <div className="col-6">
                <label className="col-form-label form-text-left">Current Status</label>
                <label className="form-control" disabled>{getClaimDetails.status.charAt(0).toUpperCase() + getClaimDetails.status.slice(1)}</label>
                <label className="col-form-label form-text-left">Estimated Amount</label>
                <label className="form-control" disabled>${parseFloat(getClaimDetails.estimatedValue).toFixed(2)}</label>
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
                <textarea className="form-control" rows="2" minLength="100" defaultValue={getClaimDetails.claimReason} disabled></textarea>
            </div>
            <br></br>
            <div className="col-12">
                <label className="col-form-label" >Incident Description</label>
                <textarea className="form-control" rows="2" minLength="100" defaultValue={getClaimDetails.claimDescription} disabled></textarea>
            </div>
            <div className="col-12">
                <label className="col-form-label">Further Details</label>
                <textarea className="form-control" rows="2" minLength="100" defaultValue={getClaimDetails.furtherDetails} disabled></textarea>
            </div>

            <div className="col-6">
            
            <Link to="/notes" state={{ claimId: getClaimDetails.claimId}}><label><Button variant="primary">Notes <Badge bg="secondary">{numOfNotes}</Badge></Button></label></Link>
            <Link to="/tasks" state={{ claimId: getClaimDetails.claimId}}><label><Button variant="success">Tasks <Badge bg="secondary">{numOfNotes}</Badge></Button></label></Link>
            </div>
            <div className="col-6">

            </div>

        </div>
        
    </form>
    
</div>
</Fragment>


}

export default DisplayClaim;


// <div className="d-flex justify-content-center mt-4">
// <div className="card p-3 bg-light col-xl-5 col-lg-10 col-md-10 col-sm-10 col-11 mb-7">
// <form className="form-group row">
//     <h3 className="col-12 mt-3 display-5">Claim Details</h3>
//     <div>
//         <hr></hr>
//     </div>

//     <div className="form-group row">

//     {/* Column 1 of form */}
//     <div className="col-6">
//         <label className="col-form-label form-text-left" htmlFor="policyNumber">Policy Number</label>
//         <input type="number" className="form-control" id="policyNumber" disabled defaultValue={getClaimDetails.policyNumber}></input>
//         <label className="col-form-label" htmlFor="firstName">First Name</label>
//         <input type="text" className="form-control" id="firstName" defaultValue={getClaimDetails.firstName}></input>
//         <label className="col-form-label form-text-left" htmlFor="type">Insurance Type</label>
//         <input type="text" className="form-control" id="firstName" disabled defaultValue={getClaimDetails.type}></input>
//         <label className="col-form-label" htmlFor="claimOpenDate">Claim Open Date</label>
//         <input type="date" className="form-control" id="claimOpenDate" disabled defaultValue={getClaimDetails.claimOpenDate}></input>
//     </div>
//     {/* End of Column 1 */}

//     {/* Column 2 of form */}
//     <div className="col-6">
//         <label className="col-form-label form-text-left" htmlFor="title">Title</label>
//         <select defaultValue="default" id="title" className="form-select form-control">
//             <option value="default" disabled hidden>{getClaimDetails.title}</option>
//             <option>Mr</option>
//             <option>Mrs</option>
//             <option>Dr</option>
//             <option>Prof.</option>
//             <option>Miss</option>
//             <option>Do not specify</option>
//         </select>
//         <label className="col-form-label" htmlFor="surname">Surname</label>
//         <input type="text" className="form-control" id="surname" defaultValue={getClaimDetails.surname}></input>
//         <input id="status" defaultValue={getClaimDetails.status} hidden></input>
//         <label className="col-form-label" htmlFor="estimatedValue">Estimated Value</label>
//         <input type="number" className="form-control" id="estimatedValue" defaultValue={getClaimDetails.estimatedValue}></input>
//         <label className="col-form-label" htmlFor="incidentDate">Incident Date</label>
//         <input type="date" className="form-control" id="incidentDate" defaultValue={getClaimDetails.incidentDate}></input>
//     </div>
//     {/* End of Column 2 */}

//     <div className="mt-3">
//         <hr></hr>
//     </div>
// </div>

//     {/* Column 1 of form */}
//     <div className="col-6 mt-3">
//         <h5 className="ml-3">Customer Name:</h5>
//         <input type="text" className="form-control" id="surname" defaultValue={getClaimDetails.surname}></input>
//         <h5 className="ml-3 lead lead-fontsize">{getClaimDetails.title} {getClaimDetails.firstName} {getClaimDetails.surname}</h5>
//         <h5 className="ml-3 mt-4">Claim Type</h5>
//         <h5 className="ml-3 lead lead-fontsize">{getClaimDetails.type}</h5>


//     </div>
//     {/* End of Column 1 */}

//     {/* Column 2 of form */}
//     <div className="col-6 mt-3">
//         <h5 className="ml-3">Current Status</h5>
//         <h5 className="ml-3 lead lead-fontsize">{getClaimDetails.status.charAt(0).toUpperCase() + getClaimDetails.status.slice(1)}</h5>
//         <h5 className="ml-3 mt-4">Estimated Vlaue</h5>
//         <h5 className="ml-3 lead lead-fontsize">${getClaimDetails.estimatedValue}</h5>
//     </div>
//     {/* End of Column 2 */}

//     <div className="col-6">
//     {editAvailable ?
//             <div className="button-left"><Link to="/editClaimForm" state={{ claimId: getClaimDetails.claimId }}><button className="btn btn-primary button-left">Edit Details</button></Link></div>
//             :
//             <div className="button-left"><button disabled={!editAvailable} className="btn btn-primary">Edit Details</button></div>
//         }
//     </div>


//     <div className="mt-3">
//         <hr></hr>
//     </div>

//     <div className="row">
//         <div className="col">
//         <h5 className="ml-3">Current Status</h5>
//         </div>
//         <div className="col">
            
//         </div>
//     </div>




// </form>
// </div>

// </div>