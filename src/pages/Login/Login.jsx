import { useLocation } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";

const Login = () => {
const location =useLocation()
console.log("LOGIN PAGE LOCATION : ",location.state);
    return (
        <div>
           <LoginForm state={location.state}></LoginForm>
        </div>
    );
};

export default Login;