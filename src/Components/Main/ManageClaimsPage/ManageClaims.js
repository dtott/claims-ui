import { Fragment, useState } from "react";
import JumbotronManageClaims from "./JumbotronManageClaims";
import ManageClaimsTable from "./ManageClaimsTable";
import ManageClaimsSearchBar from "./ManageClaimsSearchBar";
import {getAllClaims} from '../../Data/DataFunctions';


const ManageClaims = () => {

    const claims = getAllClaims(); // Declare getAllClaims Array
    const allStatus = claims.map (claims => claims.ClaimStatus); // Map all status options to allStatus

    // Remove status defaults 
    const uniqueStatus = allStatus.filter ( (status, idx) => 
    allStatus.indexOf(status) === idx
     ); 

    const [selectedStatus, setSelectedStatus] = useState(uniqueStatus[0]); // Declare use state for the selected status
    
    // Change claim status via select onChange event in JumbotronManageClaims
    const changeStatus = (event) => {
        const selectedStatusIndex = event.target.options.selectedIndex;
        setSelectedStatus(uniqueStatus[selectedStatusIndex-1]);
      }

    // Create Search Event
    const doSearch = (event) => {
        event.preventDefault();
    }

    return <Fragment>
        <JumbotronManageClaims changeStatus={changeStatus} />
        <ManageClaimsSearchBar doSearch={doSearch}/>
        <ManageClaimsTable claims={claims} selectedStatus={selectedStatus} />
    </Fragment>
}

export default ManageClaims;