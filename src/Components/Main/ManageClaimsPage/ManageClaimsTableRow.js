import { Link } from "react-router-dom";
import App from "../../../App";

const ManageClaimsTableRow = (props) => {
    
    return <tr id={props.PolicyNo}><td className="pt-3">{props.PolicyNo}</td><td className="pt-3">{props.CustomerName}</td><td className="pt-3">{props.ClaimAmount}</td><td className="pt-3">{props.ClaimStatus}</td>
    <td><Link to="/editClaim" state={{ 
        PolicyNo: props.PolicyNo, 
        CustomerName: props.CustomerName, 
        ClaimAmount: props.ClaimAmount, 
        InsuranceType: props.InsuranceType,
        ClaimStatus: props.ClaimStatus,
        ClaimDate: props.ClaimDate,
        ClaimReason: props.ClaimReason,
        ClaimDescription: props.ClaimDescription
    }}><button className="btn btn-primary">View</button></Link></td></tr>

}

export default ManageClaimsTableRow;