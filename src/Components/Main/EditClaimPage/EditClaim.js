import { Fragment } from "react";
import JumbotronEditClaim from "./JumbotronEditClaim";
import { useLocation } from "react-router";
import EditClaimForm from "./EditClaimForm";

const EditClaim = () => {

    const location = useLocation();
    const {PolicyNo, InsuranceType, CustomerName, ClaimDate, ClaimAmount, ClaimReason, ClaimDescription} = location.state;
    
   
    return <Fragment>
        <JumbotronEditClaim />
        <EditClaimForm PolicyNo={PolicyNo} InsuranceType={InsuranceType} CustomerName={CustomerName} ClaimDate={ClaimDate} ClaimAmount={ClaimAmount} ClaimReason={ClaimReason} ClaimDescription={ClaimDescription} />
    </Fragment>
}

export default EditClaim;