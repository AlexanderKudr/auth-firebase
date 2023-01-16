import { Title } from "./Title";
import { Card as CardProps } from "../types/Card";
import { Paragraph } from "./Paragraph";

export const Card = ({ children, className }: CardProps) => {
  return (
    <div className={className}>
      <Title title="Join Today" />
      <Paragraph paragraph="Sing in with one of the providers" />
      <div className="group">{children}</div>
    </div>
  );
};
