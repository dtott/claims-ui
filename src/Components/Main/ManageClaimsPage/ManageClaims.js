import { Fragment, useEffect, useState } from "react";
import JumbotronManageClaims from "./JumbotronManageClaims";
import ManageClaimsTable from "./ManageClaimsTable";
import ManageClaimsSearchBar from "./ManageClaimsSearchBar";
import { getClaimsByOpenStatus, getAllClaims } from "../../Data/sample-data";
import { getAllClaimsRest } from "../../Data/DataFunctions";

const ManageClaims = () => {

    //Fetching all Claims via API
    const [allClaims, setAllClaims] = useState([]);

    useEffect(() => {
        const claimsPromise = getAllClaimsRest();
        claimsPromise.then (
            (response) => {
                if(response.status === 200){
                    setAllClaims(response.data);
                    console.log(response.status);
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