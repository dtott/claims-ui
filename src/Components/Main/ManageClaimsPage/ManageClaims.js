import { Fragment, useState } from "react";
import JumbotronManageClaims from "./JumbotronManageClaims";
import ManageClaimsTable from "./ManageClaimsTable";
import ManageClaimsSearchBar from "./ManageClaimsSearchBar";
import { getClaimsByOpenStatus, getAllClaims } from "../../Data/sample-data";

const ManageClaims = () => {

    const allClaims = getAllClaims();

    const [selectedStatus, setSelectedStatus] = useState();

    const allOpenStatus = getClaimsByOpenStatus(selectedStatus);

    const displayStatusTable = () => {
        if (selectedStatus !== undefined){
            return allOpenStatus;
        }
        return allClaims;
    }

    const claimsToDisplay = displayStatusTable();


    // Create Search Event
    const [searchTerm, setSearchTerm] = useState("");

    return <Fragment>
        <JumbotronManageClaims setSelectedStatus={setSelectedStatus} />
        <ManageClaimsSearchBar setSearchTerm={setSearchTerm}/>

        <ManageClaimsTable claimsToDisplay={claimsToDisplay} searchTerm={searchTerm}/>
    </Fragment>
}

export default ManageClaims;