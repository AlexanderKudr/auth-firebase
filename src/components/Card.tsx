import { Group } from "./Group";
import { Title } from "./Title";
import { Paragraph } from "./Paragraph";
import { Card as CardProps } from "../types/Card";

export const Card = ({ children, className }: CardProps) => {
  return (
    <Group className={className}>
      <Title title="Join Today" />
      <Paragraph paragraph="Sing in with one of the providers" />
      <div className="group">{children}</div>
    </Group>
  );
};
