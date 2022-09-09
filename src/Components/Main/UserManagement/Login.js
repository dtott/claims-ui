import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../Data/DataFunctions";
import { useSearchParams, useNavigate } from "react-router-dom";
import './Login.css';
import JumbotronLogin from "./JumbotronLogin";

const Login = () => {

    const dispatch = useDispatch();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const updateUsername = (e) => {
        setUsername(e.target.value);
    }

    const updatePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login(username, password)
        .then (result => {
            if (result.status === 200) {
                dispatch(
                    {type : "login",
                    value : {username : username, password: password, 
                        role : result.data.role, 
                        name : result.data.name} 
                });

                if (searchParams.has("target")){
                   navigate(searchParams.get("target")); 
                }else{
                    navigate("/");
                }  
                setMessage(false);
            }
        })
        .catch (error => {
            console.log("error ", error);
            setMessage(true);
        })
    }

    return <Fragment>
        <JumbotronLogin />
        <div className="container">
        <div className="login-form">
    <form onSubmit={handleSubmit}>
        <h2 className="text-center">Login</h2>       
        <div className="form-group mt-4">
            <input type="text" onChange={updateUsername} className="form-control" id="username" placeholder="Username" required="required"></input>
        </div>
        <div className="form-group mt-3">
            <input type="password" onChange={updatePassword} className="form-control" id="password" placeholder="Password" required="required"></input>
        </div>
        <div className="form-group mt-3">
            {message ? <p className="text-danger">Incorrect password!</p>: null}
        </div>
        <div className="form-group my-2">
            <button type="submit" className="btn btn-outline-primary col-4">Log in</button>
            <button type="reset" className="btn btn-outline-danger col-4">Clear</button>
        </div>       
    </form>
</div>  
        </div>
        
    </Fragment>
}

export default Login;