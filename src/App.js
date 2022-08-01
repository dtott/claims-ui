import './App.css';
import PageHeader from './Components/Header/PageHeader';
import PageFooter from './Components/Footer/PageFooter';
import './Components/Main/Main.css';
import { useState } from 'react';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import ManageClaims from './Components/Main/ManageClaimsPage/ManageClaims';
import HomePage from './Components/Main/HomePage/HomePage';
import NewClaim from './Components/Main/NewClaimPage/NewClaim';
import EditClaim from './Components/Main/EditClaimPage/EditClaim';
import ManageClaimsTableRow from './Components/Main/ManageClaimsPage/ManageClaimsTableRow';
import {ChangePage} from './Components/Main/ManageClaimsPage/ManageClaimsTableRow';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App(props) {

  const saveClaimId = props.state;

  return (
    <BrowserRouter>
    <div className="App">
      <PageHeader/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/newClaim" element={<NewClaim />} />
        <Route path="/manageClaims" element={<ManageClaims />} />
        <Route path="/editClaim" element={<EditClaim />} />
      </Routes>
      <PageFooter />
    </div>
    </BrowserRouter>
  );
}

export default App;
