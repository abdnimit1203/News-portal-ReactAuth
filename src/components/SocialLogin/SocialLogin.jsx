import { useContext } from "react";
import { AuthContext } from "../../Hook/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SocialLogin = () => {
  
  const toastSignInSuccess = () => toast.success("User Signed in successFully");
    const { googleSignIn} = useContext(AuthContext);
    const handleGoogleLogIn = ()=>{
        googleSignIn()
        .then(result=>{
          console.log(result.user);
          toastSignInSuccess();
        })
        .catch(error=>{
          console.log(error.message);
        })
      }
    const handleGithubLogIn = ()=>{
        // eslint-disable-next-line no-undef
        githubSignIn()
        .then(result=>{
          console.log(result.user);

        })
        .catch(error=>{
          console.log(error.message);
        })
      }
    return (
        <div className="p-2">
          <ToastContainer/>
            <h2 >Login With</h2>
            <button onClick={handleGoogleLogIn} className="btn btn-sm rounded-md w-full btn-ghost text-xs lg:text-sm mb-2 border border-teal-600 mt-6 h-full py-2"><span><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png" alt="google icon"  className="w-4 mx-auto"/></span> Login with Google</button>
            <button onClick={handleGithubLogIn} className="btn btn-sm rounded-md w-full btn-ghost text-xs lg:text-sm mb-2 border border-slate-800 h-full py-2"><span><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="google icon"  className="w-4 mx-auto"/></span> Login with Github</button>
        </div>
    );
};

export default SocialLogin;