import { Fragment, useEffect, useReducer, useRef, useState } from "react";
import { addNewClaim, addNewcustomer } from "../../Data/DataFunctions";

const NewClaimForm = () => {

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


    const dataToChange = { field: event.target.id, value: event.target.value};
     dispatch(dataToChange);
}

const emptyClaim = {
    customerID: '',
    type: '',
    firstName: '',
    surname: '',
    title: '',
    estimatedValue: '',
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
 }

 const [userID, setUserID] = useState(null);
 const [count, setCount] = useState(0);

 const newClaimsReducer = (existingState, data) => {
     return {...existingState, [data.field]: data.value}
 }

 const [newClaim, dispatch] = useReducer(newClaimsReducer, emptyClaim);

 const handleChange = (event) => {
     const dataToChange = { field: event.target.id, value: event.target.value};
     dispatch(dataToChange);
 }

 const [message, setMessage] = useState("");

 const isSubmitPressed = useRef(false);

 const submitform = (e) => {
     e.preventDefault();
     console.log(newClaim);
     isSubmitPressed.current = true;
     // Response for adding customer fields
     const response = addNewcustomer(newClaim);
     response.then (result => {
         if(result.status === 200){
             setMessage("Payment added with ID " + result.data.customerID)
             setUserID(result.data.customerID);
             setCount(count + 1);
         }else{
             setMessage("didn't work");
         }
     })
     .catch(error => console.log ("something went wrong " + error))
    
 }

 

 useEffect(() => {
     if(isSubmitPressed.current){
         console.log(userID);
      // Response for adding claimDetails
      const responseClaimDetails = addNewClaim(newClaim, userID);
      responseClaimDetails.then (result => {
         if(result.status === 200){
             setMessage("Payment added with ID " + result.data.claimId)
             console.log(result.data.claimId);
         }else{
             setMessage("didn't work");
         }
      })
      .catch(error => console.log ("something went wrong new" + error))
 
      console.log(userID);
      isSubmitPressed.current = false;
    }
 }, [count])

 
    return <Fragment>
        
        <div className="d-flex justify-content-center">
        <form onSubmit={submitform} className=" card p-3 bg-light col-xl-5 col-lg-10 col-md-10 col-sm-10 col-11 mb-7">
        
        {/* First Row Fields */}
        <div className="form-group row">
            <div className="col-12 col-lg-6">
            <label className="col-form-label form-text-left" htmlFor="title">Title</label>
                <select defaultValue="Do not specify" onChange={handleChange} id="title" name="title" className="form-select form-control">
                    <option value="Do not specify" disabled hidden>Select Title</option>
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
                <input type="text" onChange={handleChange} required className="form-control" id="firstName" placeholder="Enter First Name"></input>
            </div>
            </div>

            {/* Second Row Fields */}
        <div className="form-group row">
            <div className="col-12 col-lg-6">
            <label className="col-form-label" htmlFor="surname">Surname</label>
                <input type="text" onChange={handleChange} required className="form-control" id="surname" placeholder="Enter Surname"></input>
            </div>
            <div className="col-12 col-lg-6">
            <label className="col-form-label form-text-left" htmlFor="type">Insurance Type</label>
                <select onChange={changeTypefields} required defaultValue="" id="type" className="form-select form-control">
                    <option value="" disabled hidden>Select Insurance Type</option>
                    <option>Property</option>
                    <option>Motor</option>
                    <option>Pet</option>
                </select>
            </div>
            </div>

            {/* Third Row Fields */}
        <div className="form-group row">
            <div className="col-12 col-lg-6">
            <label className="col-form-label" htmlFor="estimatedValue">Estimated Value</label>
                <input type="number" onChange={handleChange} required className="form-control" id="estimatedValue" max="500" step=".01" placeholder="Enter the Estimated Value"></input>
            </div>
            <div className="col-12 col-lg-6">
            <label className="col-form-label" htmlFor="incidentDate">Incident Date</label>
                <input type="date" onChange={handleChange} required className="form-control" id="incidentDate"></input>
            </div>
            <div className="mt-3">
                <hr></hr>
                </div>
            </div>
            
            {!motorType ? <div>
            {/* Motor Row Fields */}
            <div className="form-group row">
            <div className="col-12 col-lg-6">
            <label className="col-form-label" htmlFor="make">Car Make</label>
                <input type="text" onChange={handleChange} className="form-control" id="make" defaultValue="" placeholder="Enter Make"></input>
            </div>
            <div className="col-12 col-lg-6">
            <label className="col-form-label" htmlFor="model">Car Model</label>
                <input type="text" onChange={handleChange} className="form-control" id="model" defaultValue="" placeholder="Enter Model"></input>
            </div>
            </div>
            <div className="form-group row">
            <div className="col-12 col-lg-6">
            <label className="col-form-label" htmlFor="year">Car Year</label>
                <input type="number" onChange={handleChange} className="form-control" min="1900" max="9999" id="year" defaultValue="" placeholder="Enter Year"></input>
            </div>
            </div>
            <div className="mt-4">
                <hr></hr>
                </div>
            </div> : null}

            {!petType ? <div>
            {/* Pet Row Fields */}
            <div className="form-group row">
            <div className="col-12 col-lg-6">
            <label className="col-form-label" htmlFor="animalType">Animal Type</label>
                    <input type="text" onChange={handleChange} className="form-control" id="animalType" defaultValue="" placeholder="Enter Type"></input>
            </div>
            <div className="col-12 col-lg-6">
            <label className="col-form-label" htmlFor="breed">Animal Breed</label>
                    <input type="text" onChange={handleChange} className="form-control" id="breed" defaultValue="" placeholder="Enter Breed"></input>
            </div>
            </div>
            <div className="mt-4">
                <hr></hr>
                </div>
            </div> : null}

            {!PropertyType ? <div>
            {/* Property Row Fields */}
            <div className="form-group row">
            <div className="col-12">
            <label className="col-form-label" htmlFor="address">Property Address</label>
                    <input type="text" onChange={handleChange} className="form-control" id="address" defaultValue="" placeholder="Enter Address"></input>
            </div>
            </div>
            <div className="mt-4">
                <hr></hr>
                </div>
            </div> : null}

                {/* Fourth Row Fields */}
            <div className="row">
               <div className="col-12">
                <label className="col-form-label" htmlFor="claimReason">Reason for the claim</label>
                <textarea id="claimReason" onChange={handleChange} required className="form-control" rows="2" maxLength="100" placeholder="Enter Reason For Claim"></textarea>
                </div>
                <br></br>
                <div className="col-12">
                <label className="col-form-label" htmlFor="claimDescription">Incident Description</label>
                <textarea id="claimDescription" onChange={handleChange} required className="form-control" rows="6" maxLength="500" placeholder="Enter Incident Description"></textarea>
                <small className="form-text text-muted">*500 characters</small>
                </div>
                <div className="col-12">
                <label className="col-form-label" htmlFor="furtherDetails">Further Details</label>
                <textarea id="furtherDetails" onChange={handleChange} className="form-control" rows="2" maxLength="200" placeholder="Enter Further Details"></textarea>
                </div>
                <div>
                <button type="submit" className="btn btn-success col mt-4">Submit</button>
                <button type="reset" className="btn btn-danger col mt-4" >Reset</button></div>
                </div>
                <p>{message}</p>

        </form>
        </div>
    </Fragment>
}


export default NewClaimForm;