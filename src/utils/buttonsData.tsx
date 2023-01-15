import { Button } from "../components/Button";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { GoogleLogin } from "../firebase/logins";

export const buttonsData = [
  {
    key: crypto.randomUUID(),
    className: "Button-google",
    icon: <FcGoogle />,
    text: "Sign in with Google",
    provider: GoogleLogin,
  },
  {
    key: crypto.randomUUID(),
    className: "Button-facebook",
    icon: <AiFillFacebook />,
    text: "Sign in with Facebook",
    // provider: Facebook,
  },
];
export const buttons = buttonsData.map(
  ({ className, icon, text, key, provider }) => (
    <Button
      key={key}
      className={className}
      icon={icon}
      text={text}
      provider={provider}
    />
  )
);
