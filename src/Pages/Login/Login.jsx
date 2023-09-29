import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { useState } from "react";
const Login = () => {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const googleUser = result.user;
        console.log(googleUser);
        setUser(googleUser);
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
        <div>user: {user?.displayName}</div>
      </div>
    </div>
  );
};

export default Login;
