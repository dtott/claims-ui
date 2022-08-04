import { Fragment, useState } from "react";
import JumbotronManageClaims from "./JumbotronManageClaims";
import ManageClaimsTable from "./ManageClaimsTable";
import ManageClaimsSearchBar from "./ManageClaimsSearchBar";
import {getAllClaims} from '../../Data/DataFunctions';


const ManageClaims = () => {

    //Start of Creating dropdown options
    const claims = getAllClaims(); // Declare getAllClaims Array
    const allStatus = claims.map (claims => claims.ClaimStatus); // Map all status options to allStatus

    // Remove status defaults 
    const uniqueStatus = allStatus.filter ( (status, idx) => 
    allStatus.indexOf(status) === idx
     ); 

    const [selectedStatus, setSelectedStatus] = useState(uniqueStatus[0]); // Declare use state for the selected status
    //End of Creating dropdown options
    
    // Change claim status via select onChange event in JumbotronManageClaims
    const changeStatus = (event) => {
        const selectedStatusIndex = event.target.options.selectedIndex;
        setSelectedStatus(uniqueStatus[selectedStatusIndex]);
      }

    // Create Search Event
    const [searchTerm, setSearchTerm] = useState("");

    return <Fragment>
        <JumbotronManageClaims changeStatus={changeStatus} />
        <ManageClaimsSearchBar setSearchTerm={setSearchTerm}/>
        <ManageClaimsTable claims={claims} selectedStatus={selectedStatus} searchTerm={searchTerm}/>
    </Fragment>
}

export default ManageClaims;