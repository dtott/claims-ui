const statuses = [{id : "new", description: "awaiting assessment", open: true},
    {id : "open", description: "open", open: true},
    {id :"accepted", description: "accepted - awaiting payment", open: true},
    {id : "paid" , description: "paid", open: false},
    {id : "rejected" ,description: "rejected", open: false},
    {id : "pushed", description: "pushed to main handling", open: false}]

export const getStatusDetail = (status) => statuses.find(it => it.id === status);

const claims = [
    {
        claimId: 1, policyNumber: 3281, title: "Mr", firstName: "Simon", surname: "Smith", status: "new",
        type: "Motor", estimatedValue: 400, claimOpenDate: "2022-05-19", claimReason: "backed into lamp post",
        make: "Nissan", model: "Juke", year: 2018, incidentDate: "2022-05-18", claimDescription: "Car was reversed into a lamp post and damaged the back of the car",
        furtherDetails: "claimed that the lamp post wasn't there the last time they looked"
    },
    {
        claimId: 2, policyNumber: 4406, title: "Mrs", firstName: "Jane", surname: "Jones", status: "paid",
<<<<<<< HEAD
        type: "Pet", estimatedValue: 240.21, claimOpenDate: "2022-05-20", claimReason: "cut on front left paw",
        animalType: "dog", breed: "Border collie", incidentDate: "2022-05-18", claimDescription: "The dog scraped up against a fence and cut its paw",
=======
        type: "pet", estimatedValue: 240, claimOpenDate: "2022-05-20", claimReason: "cut on front left paw",
        animalType: "dog", breed: "Border collie", incidentDate: "2022-05-18"
>>>>>>> 3e32ca3b335f481ec2e5dbb0597a1f7988b2efd0
    },
    {
        claimId: 3, policyNumber: 9191, title: "Dr", firstName: "Geraldine", surname: "Green", status: "rejected",
        type: "Motor", estimatedValue: 380.40, claimOpenDate: "2022-05-20", claimReason: "skidded on ice",
        furtherDetails: "Had been snowing all morning", claimDescription: "The car lost control on the road due to the build-up of ice",
        make: "Citroen", model: "Berlingo", year: 2021
    },
    {
        claimId: 4, policyNumber: 1200, title: "Prof.", firstName: "Clive", surname: "Cole", status: "open",
        type: "Property", estimatedValue: 200.87, claimOpenDate: "2022-05-21", claimReason: "damage from flood",
        address: "15 Acacia Avenue, Sometown", claimDescription: "Electrics and furniture damage due to the flood",
    },
    {
        claimId: 5, policyNumber: 1655, title: "Miss", firstName: "Wanda", surname: "Web", status: "rejected",
        type: "Property", estimatedValue: 300.23, claimOpenDate: "2022-05-22",
        claimReason: "window broken by neighbour's child playing football", claimDescription: "Window broken by neighbour's child playing football, windows needs replaced",
        address: "27 Summer View, Differentown"
    }
];


let notes = [
    {id: 1, claimId:4, description: "checking real estimate", date: "2022-05-23", complete: true},
    {id: 2, claimId:3, description: "falls outside policy coverage", date: "2022-05-22", complete: true},
    {id: 3, claimId:4, description: "customer photo received and stored on file", date: "2022-05-28", complete: true},
    {id: 4, claimId:5, description: "customer withdrew claim as amount of damage is lower than policy excess", date: "2022-05-27", complete: true}
];

let tasks = [
    {id: 1, claimId:4, description: "awaiting customer photo", date: "2022-05-22", status: "complete"},
    {id: 2, claimId:4, description: "estimating cost of repair", date: "2022-05-23", status: "active"}
];

export const getAllClaims = () => {
    return claims;
}

export const getClaim = (claimId) => {
    return claims.find(it => it.claimId === claimId);
}

export const getNotesForClaim = (claimId) => {
    return notes.filter(it => it.claimId === claimId);
}

export const getTasksForClaim = (claimId) => {
    return tasks.filter(it => it.claimId === claimId);
}

export const getClaimsByOpenStatus = (status) => {
    return claims.filter (claim => getStatusDetail(claim.status).open === status);
}

export const registerNewClaim = (newClaim) => {
    const claimIds = claims.map(claim => claim.claimId);
    const maxClaimId = Math.max(...claimIds);

    const claimToAdd = {
        claimId: maxClaimId + 1, status: "new",
        claimOpenDate: Date.now(), ...newClaim
    };

    claims.push(claimToAdd);
    return claimToAdd;
}

export const findClaimByPolicyNumber = (policyNumber) => {
    return claims.filter(it => it.policyNumber === policyNumber);
}

export const findClaimBySurname = (surname) => {
    return claims.filter(it => it.surname.toLowerCase().includes(surname.toLowerCase()));
}

export const updateClaim = (id, newData) => {
    const position = claims.findIndex(it => it.claimId === +id);
    const updatedClaim = {...claims[position], ...newData};
    claims[position] = updatedClaim;
}

export const addTaskToClaim = (claimId, task) => {

    const highestTaskId = Math.max(...tasks.map(it => it.id));
    tasks.push( {id : highestTaskId + 1, claimId: claimId, description: task, date: new Date().toISOString().substring(0, 10), status: "active"});
}

export const addNoteToClaim = (claimId, note) => {
    const highestNoteId = Math.max(...notes.map(it => it.id));
    notes.push({id : highestNoteId + 1, claimId : claimId, description: note, date: new Date().toISOString().substring(0, 10)});
}

export const markTaskComplete = (id) => {
    tasks = tasks.map( it => it.id === id ? {...it, status: "complete"} : it);
}