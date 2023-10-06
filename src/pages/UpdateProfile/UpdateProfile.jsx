import { useContext } from "react";
import { AuthContext } from "../../Hook/AuthProvider";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const notifyProfileUpdate = () => toast.success("Profile updated successfully");
  const notifyError = () => toast.error("Please Log in first!");
  // eslint-disable-next-line no-unused-vars
  const { updateProfileManager } = useContext(AuthContext);
  const handleProfileUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const imgUrl = e.target.imgUrl.value;
    console.log("Update Profile : ", name, imgUrl);
    updateProfileManager(name, imgUrl)
      .then(() => {
        console.log("Profile Updated");
        navigate("/");
        notifyProfileUpdate();
      })
      .catch((error) => {
        console.log("update Error:", error.message);
        notifyError()
      });
  };
  return (
    <div className="bg-rose-100 min-h-screen flex justify-center items-center flex-col">
      <h2 className="font-bold text-3xl font-serif  pb-6 text-teal-600">
        Update you profile!
      </h2>
      <ToastContainer/>
      <form
        onSubmit={handleProfileUpdate}
        className="flex flex-col gap-4 border-4 border-slate-200 rounded-xl p-10 w-[400px]"
      >
        <input
          type="text"
          name="name"
          className="p-2 rounded-lg outline-teal-400 "
          placeholder="name"
          required
        />
        <input
          type="url"
          name="imgUrl"
          className="p-2 rounded-lg outline-teal-400 "
          placeholder="url"
          required
        />
        <button type="submit" className="btn btn-success">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
