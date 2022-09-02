import { useState } from "react";

const ManageClaimsSearchBar = (props) => {

  const [searchTerm, setSearchTerm] = useState("");
  const [searchValid, setSearchValid] = useState(false);

  const doSearch = (event) => {
      event.preventDefault();
      props.setSearchTerm(searchTerm);
  }

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    setSearchValid (event.target.value.trim().length > 0)
    props.setSearchTerm("");
  }

    return <div className="container search-margin col-11 col-sm-4">
    <form className="input-group" onSubmit={doSearch}>
    <input id="searchId" type="search" className="form-control my-2 rounded" onChange={handleChange} value={searchTerm} placeholder="Search" />
    <button type="submit" disabled={!searchValid} className="btn btn-outline-primary my-2">Search</button>
    </form>
  </div>
  
}

export default ManageClaimsSearchBar;