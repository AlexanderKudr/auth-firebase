import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { Button } from "../components/Button";

export const buttonsData = [
  {
    key: crypto.randomUUID(),
    className: "Button-google",
    icon: <FcGoogle />,
    text: "Sign in with Google",
  },
  {
    key: crypto.randomUUID(),
    className: "Button-facebook",
    icon: <AiFillFacebook />,
    text: "Sign in with Facebook",
  },
];
export const buttons = buttonsData.map(({ className, icon, text, key }) => (
  <Button key={key} className={className} icon={icon} text={text} />
));
