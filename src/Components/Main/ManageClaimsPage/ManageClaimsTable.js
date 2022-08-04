import ManageClaimsTableRow from './ManageClaimsTableRow';

const ManageClaimsTable = (props) => {

  console.log(props.searchTerm);

 

    // Display claim results
    const displayClaims = props.claims.filter(claims => props.searchTerm=== "" || claims.CustomerName.toString().includes(props.searchTerm) || claims.PolicyNo.toString().includes(props.searchTerm)).map(claims => (claims.ClaimStatus === props.selectedStatus)
       && <ManageClaimsTableRow key={claims.PolicyNo} 
      PolicyNo={claims.PolicyNo} 
      InsuranceType={claims.InsuranceType}
      CustomerName={claims.CustomerName} 
      ClaimAmount={claims.ClaimAmount} 
      ClaimStatus={claims.ClaimStatus} 
      ClaimDate={claims.ClaimDate}
      ClaimReason={claims.ClaimReason}
      ClaimDescription={claims.ClaimDescription}
      />
     );

    return <div className="d-flex container">
        <table className="table">
    <thead className="thead-dark">
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Customer Name</th>
        <th scope="col">Amount</th>
        <th scope="col">Status</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      {displayClaims}
    </tbody>
  </table>
  </div>
}

export default ManageClaimsTable;