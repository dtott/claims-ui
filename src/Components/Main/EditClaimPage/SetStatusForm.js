import { Fragment } from "react"

const SetStatusForm = () => {


    return <Fragment><div className="col-12">
    <h4 className="form-text-left">Process Application</h4>
        <small className="form-text text-muted small-margin">Update the application status after review</small>
    </div>

    <div className="col-12">
    <select onChange={statusUpdate} defaultValue="default" id="type" className="form-select form-control">
            <option disabled hidden value="default">{props.claimByID.status.status.charAt(0).toUpperCase() + props.claimByID.status.status.slice(1)} - {props.claimByID.status.description}</option>
            <option disabled={props.claimByID.status.id === 1} value="1">New - awaiting assessment</option>
            <option value="2">Open - currently under assessment</option>
            <option value="3">Accepted - awaiting payment</option>
            <option value="4">Paid - payment complete</option>
            <option value="5">Rejected - claim unsuccessful</option>
            <option value="6">Pushed - passed to main claims system</option>
        </select>
    </div>
    <div className="col-12">
    <label><button disabled={!touched} className="btn btn-success">Set Status</button></label>
    <label><button disabled={!touched} onClick={resetStatusField} className="btn btn-danger">Reset</button></label>
    </div>
    </Fragment>
}

export default SetStatusForm