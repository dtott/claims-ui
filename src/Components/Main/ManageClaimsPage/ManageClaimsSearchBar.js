const ManageClaimsSearchBar = (props) => {
    return <form onSubmit={props.doSearch}>
      <div className="container search-margin col-11 col-md-6">
    <div className="input-group">
    <input type="search" className="form-control rounded" placeholder="Search" />
    <button type="button" className="btn btn-outline-primary">Search</button>
  </div>
  </div>
  </form>
}

export default ManageClaimsSearchBar;