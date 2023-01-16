import { useAuthState } from "react-firebase-hooks/auth";
import { Header } from "../components/Header";
import { Title } from "../components/Title";
import { auth } from "../firebase/firebase";

export const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  return (
    <>
      <Header />
      <div style={{ paddingTop: "100px", textAlign: "center" }}>
        <Title title={`Welcome to your dashboard ${user?.displayName}`} />
      </div>
    </>
  );
};
