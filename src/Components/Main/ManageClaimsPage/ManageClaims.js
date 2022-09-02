import { Fragment, useEffect, useState } from "react";
import JumbotronManageClaims from "./JumbotronManageClaims";
import ManageClaimsTable from "./ManageClaimsTable";
import ManageClaimsSearchBar from "./ManageClaimsSearchBar";
import { getclaimsWithSelectedStatus } from "../../Data/DataFunctions";

const ManageClaims = () => {

    //Set the claims via get Api
    const [allClaims, setAllClaims] = useState([]);
    
    //Set selected status via Jumbotron component
    const [selectedStatus, setSelectedStatus] = useState("all");
    const [rendered, setRendered] = useState(false);

    //Call get api everytime selectedStatus state changes
    useEffect(() => {
        const claimsWithSelectedStatus = getclaimsWithSelectedStatus(selectedStatus);
        claimsWithSelectedStatus.then (
            (response) => {
                if(response.status === 200){
                    setAllClaims(response.data);
                    setRendered(true);
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
    }, [selectedStatus]);

    //Function for returning the allClaims state via ManageClaimsTable
    const displayStatusTable = () => {
        return allClaims;
    }

    const claimsToDisplay = displayStatusTable();


    // Create Search Event
    const [searchTerm, setSearchTerm] = useState("");

    return <Fragment>
        <JumbotronManageClaims setSelectedStatus={setSelectedStatus} />
        <ManageClaimsSearchBar setSearchTerm={setSearchTerm}/>
        {rendered ? <ManageClaimsTable selectedStatus={selectedStatus} claimsToDisplay={claimsToDisplay} searchTerm={searchTerm}/> : <p>Please wait....</p>}
    </Fragment>
}

export default ManageClaims;