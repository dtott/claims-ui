import ManageClaimsTableRow from './ManageClaimsTableRow';

const ManageClaimsTable = (props) => {

  const displayClaims = props.claimsToDisplay.filter(claims => props.searchTerm === "" || claims.customer.firstName.toLowerCase().includes(props.searchTerm.toLowerCase()) || claims.claimId.toString().includes(props.searchTerm) ).map(claims =>
    <ManageClaimsTableRow key={claims.claimId}
      policyNumber={claims.claimId}
      firstName={claims.customer.firstName}
      surname={claims.customer.surname}
      type={claims.type}
      estimatedValue={claims.estimatedValue}
      status={claims.status.status}
      claimId={claims.claimId}
    />
  )

  return <div className="d-flex container">
    <table className="table table-sm p-5">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Policy <br/>Number</th>
          <th scope="col">Customer <br/>Name</th>
          <th scope="col">Type</th>
          <th scope="col">Amount</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody className="p-3">
        {displayClaims}
      </tbody>
    </table>
  </div>
}

export default ManageClaimsTable;