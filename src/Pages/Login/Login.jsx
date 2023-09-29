import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { Result } from "postcss";
const Login = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorSMS = error.message;
        console.log(errorSMS);
      });
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <button
          onClick={handleGoogleLogin}
          className="py-2 px-3 bg-slate-900 text-white"
        >
          Login with google
        </button>
      </div>
    </div>
  );
};

export default Login;
