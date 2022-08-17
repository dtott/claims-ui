import { useEffect } from "react"
import { useLocation } from "react-router-dom";
import { getNotesForClaim, getTasksForClaim } from "../../Data/sample-data";

const Tasks = () => {

    const location = useLocation();
    const { claimId } = location.state;

    console.log(claimId);

    const retrieveNotes = getTasksForClaim(claimId).map((claims) => <div key={claims.id}>
    <label className="form-control">{claims.description}</label>
    <label> {claims.status}</label>
    <small className="ml-2 align-right form-text text-muted">{claims.date}</small>
    
    </div>)
    const numOfNotes = getNotesForClaim(claimId).length;

    return <div className="d-flex justify-content-center mt-4">
        <form className="card p-3 bg-light col-xl-6 col-lg-10 col-md-10 col-sm-10 col-11 mb-7">
        <div className="col-12">
            <h4 className="form-text-left">Tasks</h4>
            </div>
        {retrieveNotes}


        </form>
    </div>

}

export default Tasks