import { Button as ButtonProps } from "../types/Button";

export const Button = ({ className, icon, text, provider }: ButtonProps) => {
  return (
    <div onClick={provider} className={className}>
      {icon}
      {text}
    </div>
  );
};
