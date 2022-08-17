import { Fragment } from "react";
import { useLocation } from "react-router";
import EditClaimForm from "./EditClaimForm";
import DisplayClaim from "./DisplayClaim";

const EditClaim = () => {

    const location = useLocation();
    const {claimId} = location.state;
    
   
    return <Fragment>
        <DisplayClaim claimId={claimId} />
        {/* <EditClaimForm claimId={claimId} /> */}
    </Fragment>
}

export default EditClaim;