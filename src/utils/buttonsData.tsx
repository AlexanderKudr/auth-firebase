import { Button } from "../components/Button";
import { FcGoogle } from "react-icons/fc";
import { GoogleLogin } from "../firebase/logins";

export const buttonsData = [
  {
    key: crypto.randomUUID(),
    className: "Button-google",
    icon: <FcGoogle />,
    text: "Sign in with Google",
    provider: GoogleLogin,
  },
];
export const buttons = buttonsData.map(
  ({ className, icon, text, key, provider }) => (
    <Button
      key={key}
      className={className}
      icon={icon}
      onClick={provider}
    >{text}</Button>
  )
);
