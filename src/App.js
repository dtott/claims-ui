import './App.css';
import PageHeader from './Components/Header/PageHeader';
import PageFooter from './Components/Footer/PageFooter';
import './Components/Main/Main.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import ManageClaims from './Components/Main/ManageClaimsPage/ManageClaims';
import HomePage from './Components/Main/HomePage/HomePage';
import NewClaim from './Components/Main/NewClaimPage/NewClaim';
import EditClaim from './Components/Main/EditClaimPage/EditClaim';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditClaimForm from './Components/Main/EditClaimPage/EditClaimForm';
import { Provider } from 'react-redux';
import claimStore from './Components/store/store';
import ProtectedRoute from './Components/Main/UserManagement/ProtectedRoute';
import Login from './Components/Main/UserManagement/Login';


function App(props) {

  return (
    <Provider store={claimStore}>
    <BrowserRouter>
    <div className="App">
      <PageHeader/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/newClaim" element={<NewClaim />} /> */}
        {/* <Route path="/manageClaims" element={<ManageClaims />} />
        <Route path="/editClaim/:id" element={<EditClaim />} /> */}
        {/* <Route path="/editClaimForm/:id" element={<EditClaimForm viewClaim={false}/>} /> */}
        {/* <Route path="/displayClaimForm/:id" element={<EditClaimForm viewClaim={true}/>} /> */}

        <Route path="/newClaim" element={<ProtectedRoute component={<NewClaim />} roles={["USER"]}/>} />
        <Route path="/manageClaims" element={<ProtectedRoute component={<ManageClaims />} roles={["USER"]}/>} />
        <Route path="/editClaim/:id" element={<ProtectedRoute component={<EditClaim />} roles={["USER"]}/>} />
        <Route path="/editClaimForm/:id" element={<ProtectedRoute component={<EditClaimForm viewClaim={false}/>} roles={["USER"]}/>} />
        <Route path="/displayClaimForm/:id" element={<ProtectedRoute component={<EditClaimForm viewClaim={true}/>} roles={["USER"]}/>} />

      </Routes>
      <PageFooter />
    </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
