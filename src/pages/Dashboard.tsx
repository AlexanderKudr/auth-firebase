import { useAuthState } from "react-firebase-hooks/auth";
import { Header } from "../components/Header";
import { Title } from "../components/Title";
import { auth } from "../firebase/firebase";

export const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  return (
    <>
      <Header />
      <Title
        style={{ paddingTop: "100px", textAlign: "center" }}
        title={`Welcome to your dashboard ${user?.displayName}`}
      />
    </>
  );
};
