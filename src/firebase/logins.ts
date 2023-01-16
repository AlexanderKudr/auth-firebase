import { auth } from "../firebase/firebase";
import { User, Error } from "../types/logins";
import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const extractUser = ({ user }: User) => console.log(user);
const extractError = ({ error }: Error) => console.log(error);

export const GoogleLogin = async () => {
  await signInWithPopup(auth, googleProvider)
    .then(extractUser)
    .catch(extractError);
};
