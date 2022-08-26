import axios from "axios";

//The claim object comes from the newClaimReducer in NewClaimForm
export const addNewcustomer = (claim) => {
    return axios({ url: "http://localhost:8080/addNewCustomer", 
    method: "POST", 
    headers: {'Accept': 'application/json', 'Content-Type' : 'application/json'}, 
    data: claim});
}

export const addNewClaim = (claim, id) => {
    return axios({ url: "http://localhost:8080/addNewClaim/" + id, 
    method: "POST", 
    headers: {'Accept': 'application/json', 'Content-Type' : 'application/json'}, 
    data: claim});
}

export const getclaimsWithSelectedStatus = (selectedStatus) => {
    return axios({ url: "http://localhost:8080/testDisplayClaims/" + selectedStatus,
    method: "GET", 
    headers: {'Accept': 'application/json', 'Content-Type' : 'application/json'}
});


}


