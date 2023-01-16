import { auth } from "../firebase/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";

export const Header = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const navigateToLoginPage = () => navigate("/login");
  const signOut = () => {
    auth.signOut();
    setTimeout(() => {
      navigateToLoginPage();
    }, 500);
  };
  useEffect(() => {
    user ? navigate("/dashboard") : console.log("sign out");
  }, [user]);

  return (
    <header className="header">
      <Link to={"/"} className="authentor logo">
        Authentor
      </Link>

      {user ? (
        <button className="sign-out" onClick={signOut}>
          Sign out
        </button>
      ) : (
        <Link to={"/login"}>
          <button className="join-now">Join now</button>
        </Link>
      )}
    </header>
  );
};
