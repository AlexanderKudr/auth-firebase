import { auth } from "../firebase/firebase";
import { Button } from "./Button";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [user, loading] = useAuthState(auth);
  const pathLogin = location.pathname !== "/login";
  
  const navigateToIndexPage = () => navigate("/");
  const signOut = () => {
    auth.signOut();
    setTimeout(navigateToIndexPage, 500);
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
        <Button className={"Button-sign-out"} onClick={signOut}>
          <span>Sign out</span>
        </Button>
      ) : (
        <>
          {pathLogin && (
            <Link to={"/login"}>
              <Button className={"Button-join-now"}>
                <span>Join now</span>
              </Button>
            </Link>
          )}
        </>
      )}
    </header>
  );
};
