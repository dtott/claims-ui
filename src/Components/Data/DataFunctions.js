// import axios from "axios";

export const getAllClaims = () => {
    return [
        { PolicyNo: 101, InsuranceType: "property", CustomerName: "Martyna Palacios", ClaimDate: "2022-01-31", ClaimAmount: "325.23", ClaimReason: "Property Damage", ClaimDescription: "Example Description", ClaimStatus: "Open"},
        { PolicyNo: 102, InsuranceType: "motor", CustomerName: "Saara Goldsmith", ClaimDate: "2022-02-01", ClaimAmount: "413.21", ClaimReason: "Car Damage", ClaimDescription: "Example Description", ClaimStatus: "Open"},
        { PolicyNo: 103, InsuranceType: "pet", CustomerName: "Brett James", ClaimDate: "2022-02-01", ClaimAmount: "123.45", ClaimReason: "Vet bills", ClaimDescription: "Example Description", ClaimStatus: "Open"},
        { PolicyNo: 104, InsuranceType: "property", CustomerName: "Paisley Handley", ClaimDate: "2022-02-02", ClaimAmount: "223.21", ClaimReason: "Property Damage", ClaimDescription: "Example Description", ClaimStatus: "Closed"},
        { PolicyNo: 105, InsuranceType: "motor", CustomerName: "Maud Ellis", ClaimDate: "2022-01-31", ClaimAmount: "234.89", ClaimReason: "Car Damage", ClaimDescription: "Example Description", ClaimStatus: "Closed"},
        { PolicyNo: 106, InsuranceType: "pet", CustomerName: "Rui Mitchell", ClaimDate: "2022-02-01", ClaimAmount: "125.23", ClaimReason: "Vet bills", ClaimDescription: "Example Description", ClaimStatus: "Closed"},
        { PolicyNo: 107, InsuranceType: "property", CustomerName: "Lauryn Whitmore", ClaimDate: "2022-02-01", ClaimAmount: "487.87", ClaimReason: "Property Damage", ClaimDescription: "Example Description", ClaimStatus: "Open"},
        { PolicyNo: 108, InsuranceType: "motor", CustomerName: "Pauline Whitworth", ClaimDate: "2022-02-02", ClaimAmount: "243.76", ClaimReason: "Car Damage", ClaimDescription: "Example Description", ClaimStatus: "Open"},
        { PolicyNo: 109, InsuranceType: "pet", CustomerName: "Clement Hunter", ClaimDate: "2022-01-31", ClaimAmount: "487.56", ClaimReason: "Vet bills", ClaimDescription: "Example Description", ClaimStatus: "Closed"},
        { PolicyNo: 110, InsuranceType: "property", CustomerName: "Lesley Boyd", ClaimDate: "2022-02-01", ClaimAmount: "145.23", ClaimReason: "Property Damage", ClaimDescription: "Example Description", ClaimStatus: "Open"},
        { PolicyNo: 111, InsuranceType: "motor", CustomerName: "Ameen Stein", ClaimDate: "2022-02-01", ClaimAmount: "365.56", ClaimReason: "Car Damage", ClaimDescription: "Example Description", ClaimStatus: "Open"},
        { PolicyNo: 112, InsuranceType: "pet", CustomerName: "Rogan Hatfield", ClaimDate: "2022-02-02", ClaimAmount: "376.34", ClaimReason: "Vet bills", ClaimDescription: "Example Description", ClaimStatus: "Closed"}
    ]
}


export const getAllClaimsRestVersion = () => {
    const headers = new Headers({ 'Accept': 'application/json' });

    const paymentsPromise = fetch("http://localhost:8080/api/payment/",
        { method: "GET", headers: headers });
        
    return paymentsPromise;
}

// export const getAllClaimsAxiosVersion = () => {

//     const paymentsPromise = axios({url:"http://localhost:8080/api/payment/",
//         method: "GET", headers: { 'Accept': 'application/json' } });
        
//     return paymentsPromise;
// }


export const getAllClaimsRestExample = () => {
    //GET  http://localhost:8080/api/payment


    const headers = new Headers({ 'Accept': 'application/json' });

    const paymentsPromise = fetch("http://localhost:8080/api/payment/",
        { method: "GET", headers: headers });

    paymentsPromise.then(
        (response) => {
             if(response.ok) {
                    const dataPromise = response.json();
                    dataPromise.then ( data => {
                        console.log(data);
                    }
                  )
            }
            else {
                console.log("Something went wrong - the server responded with",
                    response.status, response.statusText);
            }

        }
    )
        .catch(
            (error) => {
                console.log("something went wrong", error);
            }
        );



}