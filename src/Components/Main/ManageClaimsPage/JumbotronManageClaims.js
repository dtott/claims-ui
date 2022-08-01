import { Fragment } from "react";

const JumbotronManageClaims = (props) => {
    return <Fragment>
        <div className="jumbotron-text-left jumbotron-bg p-5 mb-4 rounded-3">
    <div className="col-12 col-lg-9 container-fluid py-1">
        <h1 className="display-6 jumbotron-view jumbotron-text-margin justify-content-left text-info fw-bold">Manage Claims</h1>
        <p className="col-md-8 jumbotron-view jumbotron-text-margin fs-4">Please select what claims to view</p>
        <form className="col-md-8 jumbotron-view jumbotron-text-margin">
            <select defaultValue="default" onChange={props.changeStatus} className="form-select select-bg form-select-size" data-style="btn-primary" placeholder="Claim Status">
                <option vlaue="default" hidden disabled>Select Claim Status</option>
                <option value="Open">Open Claims</option>
                <option value="Closed">Closed Claims</option>
            </select>
        </form>
    </div>
</div>
</Fragment>
}

export default JumbotronManageClaims;