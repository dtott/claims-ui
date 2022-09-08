import { useState, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { getClaim, updateClaim } from "../../Data/DataFunctions";
import { useParams } from "react-router";
import DisplayClaimForm from "./DisplayClaimForm";
import { useSelector } from "react-redux";


const EditClaimForm = (props) => {

    const username = useSelector(state => state.user.username);
    const password = useSelector(state => state.user.password);

    const navigate = useNavigate();

    const viewClaim = props.viewClaim;

    const params = useParams();

    const [getClaimDetails, setClaimDetails] = useState([]);
    const [rendered, setRendered] = useState(false);

    useEffect(() => {
        const getClaimResponse = getClaim(username, password, params.id);
        getClaimResponse.then(
            (response) => {
                if (response.status === 200) {
                    setClaimDetails(response.data);
                    setRendered(true);
                } else {
                    console.log("Something went wrong" + response.status);
                }
            }
        )
            .catch(
                (error) => {
                    console.log(error + " Server Error");
                }
            )
    }, []);

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
    }, [getClaimDetails]);

    const newClaimsReducer = (existingState, data) => {
        return { ...existingState, [data.field]: data.value }
    }

    const [newClaim, dispatch] = useReducer(newClaimsReducer, getClaimDetails);

    const handleChange = (event) => {
        const dataToChange = { field: event.target.id, value: event.target.value };
        dispatch(dataToChange);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        let data = {};
        
        // Customer Fields
        if (getClaimDetails.customer.firstName !== newClaim.firstName) {
            data = { ...data, firstName: newClaim.firstName };
        }
        if (getClaimDetails.customer.title !== newClaim.title) {
            data = { ...data, title: newClaim.title };
        }
        if (getClaimDetails.customer.surname !== newClaim.surname) {
            data = { ...data, surname: newClaim.surname };
        }

        //Claim Fields
        if (getClaimDetails.estimatedValue !== newClaim.estimatedValue) {
            data = { ...data, estimatedValue: newClaim.estimatedValue };
        }
        if (getClaimDetails.incidentDate !== newClaim.incidentDate) {
            data = { ...data, incidentDate: newClaim.incidentDate };
        }
        if (getClaimDetails.claimReason !== newClaim.claimReason) {
            data = { ...data, claimReason: newClaim.claimReason };
        }
        if (getClaimDetails.claimDescription !== newClaim.claimDescription) {
            data = { ...data, claimDescription: newClaim.claimDescription };
        }
        if (getClaimDetails.furtherDetails !== newClaim.furtherDetails) {
            data = { ...data, furtherDetails: newClaim.furtherDetails };
        }

        //Pet Fields
        if (getClaimDetails.animalType !== newClaim.animalType) {
            data = { ...data, animalType: newClaim.animalType };
        }
        if (getClaimDetails.breed !== newClaim.breed) {
            data = { ...data, breed: newClaim.breed };
        }

        //Property Fields
        if (getClaimDetails.address !== newClaim.address) {
            data = { ...data, address: newClaim.address };
        }

        //Motor Fields
        if (getClaimDetails.make !== newClaim.make) {
            data = { ...data, make: newClaim.make };
        }
        if (getClaimDetails.model !== newClaim.model) {
            data = { ...data, model: newClaim.model };
        }
        if (getClaimDetails.year !== newClaim.year) {
            data = { ...data, year: newClaim.year };
        }

        if (Object.keys(data).length > 0){
        //Api call for put method
        const response = updateClaim(username, password, data, getClaimDetails.claimId);
        response.then(result => {
            if (result.status === 200) {
                console.log("Update Complete " + result.status);
                navigate("/editClaim/" + getClaimDetails.claimId);
            } else {
                console.log("Something went wrong" + result.status);
            }
        })
            .catch(error => console.log("something went wrong new" + error))
     }
    }

    return <DisplayClaimForm viewClaim={viewClaim} getClaimDetails={getClaimDetails} handleChange={handleChange} PropertyType={PropertyType} motorType={motorType} petType={petType} onSubmit={onSubmit} navigate={navigate} rendered={rendered} />
}


export default EditClaimForm;