import { Button as ButtonProps } from "../types/Button";

export const Button = ({ className, icon, text }: ButtonProps) => {
  return (
    <div className={className}>
      {icon}
      {text}
    </div>
  );
};
