import { Fragment } from "react";
import { useLocation } from "react-router";
import EditClaimForm from "./EditClaimForm";

const EditClaim = () => {

    const location = useLocation();
    const {PolicyNo, InsuranceType, CustomerName, ClaimDate, ClaimAmount, ClaimReason, ClaimDescription, ClaimStatus} = location.state;
    
   
    return <Fragment>
        <EditClaimForm PolicyNo={PolicyNo} InsuranceType={InsuranceType} CustomerName={CustomerName} ClaimDate={ClaimDate} ClaimAmount={ClaimAmount} ClaimReason={ClaimReason} ClaimDescription={ClaimDescription} ClaimStatus={ClaimStatus} />
    </Fragment>
}

export default EditClaim;