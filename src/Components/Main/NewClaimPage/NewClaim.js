import { Fragment } from "react";
import NewClaimForm from "./NewClaimForm";
import JumbotronNewClaim from "./JumbotronNewClaim";

const NewClaim = () => {

    return <Fragment>
        <JumbotronNewClaim />
        <NewClaimForm />
    </Fragment>
}

export default NewClaim;