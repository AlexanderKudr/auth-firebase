import { useAuthState } from "react-firebase-hooks/auth";
import { Header } from "../components/Header";
import { Title } from "../components/Title";
import { auth } from "../firebase/firebase";

export const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  console.log(user);
  return (
    <>
      <Header />
      <Title
        style={{ paddingTop: "100px", textAlign: "center" }}
        title={`Welcome to your dashboard ${user?.displayName}`}
      />
      <img
        src="https://lh3.googleusercontent.com/a/AEdFTp4I4U4kQ5tNFMN4wwgCfy5vmT8fRxPHCcgsa4apAw=s96-c"
        alt="UserPhoto"
        style={{margin: "0 auto", borderRadius: "50%"}}
      />
    </>
  );
};
