import { Fragment, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import DisplayClaim from "./DisplayClaim";
import { getClaim } from "../../Data/DataFunctions";

const EditClaim = () => {

    const params = useParams();

    const claimId = params.id;

    const [claimByID, setClaimByID] = useState([]);
    const [hasRendered, setHasRendered] = useState(false)
    
    const [statusWasUpdated, setStatusWasUpdated] = useState(0);
    
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

    }, [statusWasUpdated]);
    
    return <Fragment>
        {hasRendered ? <DisplayClaim claimByID={claimByID} setStatusWasUpdated={setStatusWasUpdated} statusWasUpdated={statusWasUpdated}/> : <p>Please wait....</p>}
    </Fragment>
}

export default EditClaim;