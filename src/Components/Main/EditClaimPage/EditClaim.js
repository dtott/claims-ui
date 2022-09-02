import { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router";
import EditClaimForm from "./EditClaimForm";
import DisplayClaim from "./DisplayClaim";
import { getClaim } from "../../Data/DataFunctions";

const EditClaim = () => {

    const location = useLocation();
    const {claimId} = location.state;

    const [claimByID, setClaimByID] = useState([]);
    const [hasRendered, setHasRendered] = useState(false)
    
    useEffect(() => {
        const getClaimResponse = getClaim(claimId);
        getClaimResponse.then (
            (response) => {
                if(response.status === 200){
                    setClaimByID(response.data);
                    setHasRendered(true);
                }else{
                    console.log("Something went wrong" + response.status);
                }
            }
        )
        .catch (
            (error) => {
                console.log("Server Error");
            }
        )
    }, []);
    
    return <Fragment>
        {hasRendered ? <DisplayClaim claimByID={claimByID} /> : <p>Please wait....</p>}
    </Fragment>
}

export default EditClaim;