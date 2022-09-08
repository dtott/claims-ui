import axios from "axios";

const basicAuthHeader = (username, password) => {
    console.log(btoa(`${username}:${password}`));
    return {'Authorization' : 'Basic ' + btoa(`${username}:${password}`)}
}

//The claim object comes from the newClaimReducer in NewClaimForm
export const addNewcustomer = (username, password, claim) => {
    return axios({ url: "http://localhost:8080/customer", 
    method: "POST", 
    headers: {...basicAuthHeader(username,password), 'Accept': 'application/json', 'Content-Type' : 'application/json'}, 
    data: claim});
}

export const addNewClaim = (username, password, claim, id) => {
    return axios({ url: "http://localhost:8080/claim/" + id, 
    method: "POST", 
    headers: {...basicAuthHeader(username,password), 'Accept': 'application/json', 'Content-Type' : 'application/json'}, 
    data: claim});
}

export const getclaimsWithSelectedStatus = (username, password, selectedStatus) => {
    return axios({ url: "http://localhost:8080/claim?selectedStatus=" + selectedStatus,
    method: "GET", 
    headers: {...basicAuthHeader(username, password), 'Accept': 'application/json', 'Content-Type' : 'application/json'},
});
}

export const getClaim = (username, password, claimId) => {
    return axios({ url: "http://localhost:8080/claim/" + claimId,
    method: "GET", 
    headers: {...basicAuthHeader(username, password), 'Accept': 'application/json', 'Content-Type' : 'application/json'}
});
}

export const updateClaim = (username, password, claim, id) =>  {
    return axios({ url : "http://localhost:8080/claim/" + id, 
    method : "PUT", 
    headers : {...basicAuthHeader(username, password), 'Accept': 'application/json', 'Content-Type' : 'application/json' } , 
    data : claim } );
}

export const updateClaimStatus = (username, password, claimId, statusId) =>  {
    return axios({ url : "http://localhost:8080/claim/" + claimId + "/" + statusId, 
    method : "PUT", 
    headers : {...basicAuthHeader(username, password),'Accept': 'application/json', 'Content-Type' : 'application/json' } , 
} );
}

export const login = (username, password) => {
    return axios(
        {url : "http://localhost:8080/login",
        method: "POST",
        headers : {...basicAuthHeader(username, password), 'Accept': 'application/json', 'Content-Type' : 'application/json' },
        data : {"username" : username}
    }) ;
}



