/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../Hook/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = ({state}) => {
  console.log("From LoginForm : " , state);
  const toastSignInSuccess = () => toast.success("Email signin Success!");
const {emailSignIn } = useContext(AuthContext);
const navigate = useNavigate()
  const handleEmailLogIn = (e)=>{
    e.preventDefault();
    const email = e.target.email.value
    const password = e.target.password.value
    console.log("Values passed: ",email,password);
    emailSignIn(email,password)
    .then(result=>{
      console.log(result.user);
      // console.log(state);
      navigate(state? state : "/");
      toastSignInSuccess();
    })
    .catch(error=>{
      console.log(error.message);
    })
  }
 
  

  return (
    <div>
      <ToastContainer/>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Create a new account in ABD NIMITS WORLD OF CREATION!
            </p>
            <p>Build your own World and buy a character</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleEmailLogIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Login</button>
                
              </div>
              
              
              <p className="my-4 text-center">Don`t have an account?<Link to={"/register"} className="px-2 font-bold text-rose-600">Register</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
