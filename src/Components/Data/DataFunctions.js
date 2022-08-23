import axios from "axios";

export const getAllClaimsRest = () => {
    return axios({ url: "http://localhost:8080/getClaims",
    method: "GET", 
    headers: {'Accept': 'application/json', 'Content-Type' : 'application/json'}
});
}

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

export const getAllClagetClaimsBasedOnStatusimsRest = () => {
    return axios({ url: "http://localhost:8080/getClaimsByStatus",
    method: "GET", 
    headers: {'Accept': 'application/json', 'Content-Type' : 'application/json'}
});
}


