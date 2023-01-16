import { Button as ButtonProps } from "../types/ButtonLogin";

export const Button = ({ className, icon, text, provider }: ButtonProps) => {
  return (
    <div onClick={provider} className={className}>
      {icon}
      {text}
    </div>
  );
};
