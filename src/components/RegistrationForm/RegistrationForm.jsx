import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Hook/AuthProvider";

const RegistrationForm = () => {
    const {emailSignUp}= useContext(AuthContext);
  const handleReistration = (e) => {
    e.preventDefault();
    const username = e.target.username.value
    const photoUrl = e.target.photoUrl.value
    const email = e.target.email.value
    const password = e.target.password.value
    console.log(username,photoUrl,email,password);
    emailSignUp(email,password)
    .then(result=>{
        console.log(result.user);
    })
    .catch(error=>{
        alert(error.message)
    })
  };
  return (
    <div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleReistration}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              name="username"
              type="text"
              placeholder="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="photoUrl"
              type="text"
              placeholder="URL"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              
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
            />
            <label className="label">
              <a className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>

          <p className="my-4 text-center">
            Don`t have an account?
            <Link to={"/login"} className="px-2 font-bold text-indigo-500">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
