import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { useState } from "react";
const Login = () => {
  const [user, setUser] = useState(null);
  const goggleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const auth = getAuth(app);
  const handleGoogleLogin = () => {
    signInWithPopup(auth, goggleProvider)
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
  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const githuUser = result.user;
        console.log(githuUser);
        setUser(githuUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSignOut = () => {
    console.log("signout");
    signOut(auth)
      .then(() => {
        setUser("");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        {user ? (
          <button
            onClick={handleSignOut}
            className="py-2 px-3 bg-slate-900 text-white"
          >
            sign out
          </button>
        ) : (
          <div>
            <button
              onClick={handleGoogleLogin}
              className="py-2 px-3 bg-slate-900 text-white mr-2"
            >
              Login with google
            </button>
            <button
              onClick={handleGithubLogin}
              className="py-2 px-3 bg-slate-900 text-white mr-2"
            >
              Login with gitHub
            </button>
          </div>
        )}

        {user && (
          <div>
            <div>User: {user?.displayName}</div>
            <div>Email: {user?.email}</div>
            <div>
              Photo:
              <img className="w-28" src={user?.photoURL} alt="" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
