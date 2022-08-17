import { Fragment, useState } from "react";
<<<<<<< HEAD
import { getAllClaims } from "../../Data/sample-data";

const NewClaimForm = () => {

const claims = getAllClaims();
const claimIds = claims.map(claim => claim.claimId);
const maxClaimId = Math.max(...claimIds);


const today = new Date();
=======

const NewClaimForm = () => {


    const today = new Date();
>>>>>>> 3e32ca3b335f481ec2e5dbb0597a1f7988b2efd0
const date = today.setDate(today.getDate()); 
const defaultDate = new Date(date).toISOString().split('T')[0] // yyyy-mm-dd

const [motorType, setMotorType] = useState(true);
const [PropertyType, setPropertyType] = useState(true);
const [petType, setPetType] = useState(true);

const changeTypefields = (event) => {
    const selectedIndex = event.target.options.selectedIndex;

    switch(selectedIndex){
      case 1:
        setPropertyType(false);
        setMotorType(true);
        setPetType(true);
        break;
        case 2:
            setPropertyType(true);
        setMotorType(false);
        setPetType(true);
            break;
            case 3:
                setPropertyType(true);
        setMotorType(true);
        setPetType(false);
                break;
                default:

    }
}
<<<<<<< HEAD

const [addClaim, setAddClaim] = useState({
    claimId: '',
    policyNumber: '',
    title: '',
    firstName: '',
    surname: '',
    status: '',
    type: '',
    estimatedValue: '',
    claimOpenDate: '',
    claimReason: '',
    make: '',
    model: '',
    year: '',
    incidentDate: '',
    claimDescription: '',
    furtherDetails: '',
    animalType: '',
    breed: '',
    address: ''
 });

 const submitNewClaim = (e) => {
    e.preventDefault();
    
    if(PropertyType === false){
        setAddClaim({...addClaim, 
            claimId: maxClaimId + 1,
            address: e.target.elements.address.value,
            policyNumber: e.target.elements.policyNumber.value,
        title: e.target.elements.title.value,
        firstName: e.target.elements.firstName.value,
        surname: e.target.elements.surname.value,
        status: e.target.elements.status.value,
        type: e.target.elements.type.value,
        estimatedValue: e.target.elements.estimatedValue.value,
        claimOpenDate: e.target.elements.claimOpenDate.value,
        claimReason: e.target.elements.claimReason.value,
        incidentDate: e.target.elements.incidentDate.value,
        claimDescription: e.target.elements.claimDescription.value,
        furtherDetails: e.target.elements.furtherDetails.value,
        })
    }else if(motorType === false){
        setAddClaim({...addClaim, 
            claimId: maxClaimId + 1,
            make: e.target.elements.make.value,
            model: e.target.elements.model.value,
            year: e.target.elements.year.value,
            policyNumber: e.target.elements.policyNumber.value,
        title: e.target.elements.title.value,
        firstName: e.target.elements.firstName.value,
        surname: e.target.elements.surname.value,
        status: e.target.elements.status.value,
        type: e.target.elements.type.value,
        estimatedValue: e.target.elements.estimatedValue.value,
        claimOpenDate: e.target.elements.claimOpenDate.value,
        claimReason: e.target.elements.claimReason.value,
        incidentDate: e.target.elements.incidentDate.value,
        claimDescription: e.target.elements.claimDescription.value,
        furtherDetails: e.target.elements.furtherDetails.value
        })
    }else if(petType === false){
        setAddClaim({...addClaim, 
            claimId: maxClaimId + 1,
            animalType: e.target.elements.animalType.value,
            breed: e.target.elements.breed.value,
            policyNumber: e.target.elements.policyNumber.value,
        title: e.target.elements.title.value,
        firstName: e.target.elements.firstName.value,
        surname: e.target.elements.surname.value,
        status: e.target.elements.status.value,
        type: e.target.elements.type.value,
        estimatedValue: e.target.elements.estimatedValue.value,
        claimOpenDate: e.target.elements.claimOpenDate.value,
        claimReason: e.target.elements.claimReason.value,
        incidentDate: e.target.elements.incidentDate.value,
        claimDescription: e.target.elements.claimDescription.value,
        furtherDetails: e.target.elements.furtherDetails.value
        })
    }

 }

 console.log(addClaim);
 
=======
    
>>>>>>> 3e32ca3b335f481ec2e5dbb0597a1f7988b2efd0

    return <Fragment>
        
        <div className="d-flex justify-content-center">
<<<<<<< HEAD
        <form onSubmit={submitNewClaim} className=" card p-3 bg-light col-xl-5 col-lg-10 col-md-10 col-sm-10 col-11 mb-7">
=======
        <form className=" card p-3 bg-light col-xl-5 col-lg-10 col-md-10 col-sm-10 col-11 mb-7">
>>>>>>> 3e32ca3b335f481ec2e5dbb0597a1f7988b2efd0
        <div className="form-group row">

            {/* Column 1 of form */}
            <div className="col-6">
                <label className="col-form-label form-text-left" htmlFor="policyNumber">Policy Number</label>
<<<<<<< HEAD
                <input type="number" className="form-control" id="policyNumber" name="policyNumber" placeholder="Enter Policy Number"></input>
=======
                <input type="number" className="form-control" id="policyNumber" placeholder="Enter Policy Number"></input>
>>>>>>> 3e32ca3b335f481ec2e5dbb0597a1f7988b2efd0
                <label className="col-form-label" htmlFor="firstName">First Name</label>
                <input type="text" className="form-control" id="firstName" placeholder="Enter First Name"></input>
                <label className="col-form-label form-text-left" htmlFor="type">Insurance Type</label>
                <select onChange={changeTypefields} defaultValue="default" id="type" className="form-select form-control">
                    <option value="default" disabled hidden>Select Insurance Type</option>
                    <option>Property</option>
                    <option>Motor</option>
                    <option>Pet</option>
                </select>
                <label className="col-form-label" htmlFor="claimOpenDate">Claim Open Date</label>
                <input type="date" className="form-control" id="claimOpenDate" defaultValue={defaultDate}></input>
                </div>
                {/* End of Column 1 */}

                {/* Column 2 of form */}
                <div className="col-6">
                <label className="col-form-label form-text-left" htmlFor="title">Title</label>
<<<<<<< HEAD
                <select defaultValue="default" id="title" name="title" className="form-select form-control">
                    <option value="default" disabled hidden>Title</option>
                    <option>Mr</option>
                    <option>Mrs</option>
                    <option>Dr</option>
                    <option>Prof.</option>
                    <option>Miss</option>
                    <option>Do not specify</option>
                </select>
                <label className="col-form-label" htmlFor="surname">Surname</label>
                <input type="text" className="form-control" id="surname" placeholder="Enter Surname"></input>
                <input id="status" defaultValue="new" hidden></input>
=======
                <select defaultValue="default" id="title" className="form-select form-control">
                    <option value="default" disabled hidden>Title</option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Dr">Dr</option>
                    <option value="Prof.">Prof.</option>
                    <option value="Miss">Miss</option>
                    <option value="Do not specify">Do not specify</option>
                </select>
                <label className="col-form-label" htmlFor="surname">Surname</label>
                <input type="text" className="form-control" id="surname" placeholder="Enter Surname"></input>
                <input id="status" value="new" hidden></input>
>>>>>>> 3e32ca3b335f481ec2e5dbb0597a1f7988b2efd0
                <label className="col-form-label" htmlFor="estimatedValue">Estimated Value</label>
                <input type="number" className="form-control" id="estimatedValue" placeholder="Enter the Estimated Value"></input>
                <label className="col-form-label" htmlFor="incidentDate">Incident Date</label>
                <input type="date" className="form-control" id="incidentDate"></input>
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
                <input type="text" className="form-control" id="make" placeholder="Enter Make"></input>
                <label className="col-form-label" htmlFor="year">Car Year</label>
                <input type="text" className="form-control" id="year" placeholder="Enter Year"></input>
                </div>
                <div className="col-6">
                <label className="col-form-label" htmlFor="model">Car Model</label>
                <input type="text" className="form-control" id="model" placeholder="Enter Model"></input>
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
<<<<<<< HEAD
                    <input type="text" className="form-control" id="address" defaultValue="" placeholder="Enter Address"></input>
=======
                    <input type="text" className="form-control" id="address" placeholder="Enter Address"></input>
>>>>>>> 3e32ca3b335f481ec2e5dbb0597a1f7988b2efd0
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
<<<<<<< HEAD
                    <input type="text" className="form-control" id="animalType" defaultValue="" placeholder="Enter Type"></input>
                    </div>
                    <div className="col">
                    <label className="col-form-label" htmlFor="breed">Animal Breed</label>
                    <input type="text" className="form-control" id="breed" defaultValue="" placeholder="Enter Breed"></input>
=======
                    <input type="text" className="form-control" id="animalType" placeholder="Enter Type"></input>
                    </div>
                    <div className="col">
                    <label className="col-form-label" htmlFor="breed">Animal Breed</label>
                    <input type="text" className="form-control" id="breed" placeholder="Enter Breed"></input>
>>>>>>> 3e32ca3b335f481ec2e5dbb0597a1f7988b2efd0
                    </div>
                    <div className="mt-3">
                <hr></hr>
                </div>
                </div>
                : null}
                
               <div className="row">
               <div className="col-12">
                <label className="col-form-label" htmlFor="claimReason">Reason for the claim</label>
<<<<<<< HEAD
                <textarea id="claimReason" className="form-control" rows="2" maxLength="100" placeholder="Enter Reason For Claim"></textarea>
                </div>
                <br></br>
                <div className="col-12">
                <label className="col-form-label" htmlFor="claimDescription">Incident Description</label>
                <textarea id="claimDescription" className="form-control" rows="6" maxLength="500" placeholder="Enter Incident Description"></textarea>
                <small className="form-text text-muted">*500 characters</small>
                </div>
                <div className="col-12">
                <label className="col-form-label" htmlFor="furtherDetails">Further Details</label>
                <textarea id="furtherDetails" className="form-control" rows="2" maxLength="500" placeholder="Enter Further Details"></textarea>
                </div>
                <div>
                <button className="btn btn-success col mt-4">Submit</button>
                <button className="btn btn-danger col mt-4">Reset</button></div>
                </div>
                
=======
                <textarea id="claimReason" className="form-control" rows="2" minLength="100" placeholder="Enter Reason For Claim"></textarea>
                </div>
                <br></br>
                <div className="col-12">
                <label className="col-form-label" htmlFor="furtherDetails">Further Details</label>
                <textarea id="furtherDetails" className="form-control" rows="6" minLength="500" placeholder="Enter Further Details"></textarea>
                <small className="form-text text-muted">*500 characters</small>
                </div>
                </div>
>>>>>>> 3e32ca3b335f481ec2e5dbb0597a1f7988b2efd0

        </form>
        </div>
    </Fragment>
}


export default NewClaimForm;