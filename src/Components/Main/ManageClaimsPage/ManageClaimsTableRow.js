import { Link } from "react-router-dom";

const ManageClaimsTableRow = (props) => {
    
    return <tr id={props.policyNumber}><td className="pt-3">{props.policyNumber}</td><td className="pt-3">{props.firstName} {props.surname}</td><td className="pt-3">{props.type}</td><td className="pt-3">${parseFloat(props.estimatedValue).toFixed(2)}</td><td className="pt-3">{props.status.charAt(0).toUpperCase() + props.status.slice(1)}</td>
    <td className="pt-2"><Link to="/editClaim" state={{ 
        claimId: props.claimId, 
    }}><button className="btn btn-primary">View</button></Link></td></tr>

}

export default ManageClaimsTableRow;