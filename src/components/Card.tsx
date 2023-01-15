import { Card as CardProps } from "../types/Card";

export const Card = ({ children }: CardProps) => {
  return (
    <div className="Card">
      <h2>Join Today</h2>
      <p>Sing in with one of the providers</p>
      <div className="group">{children}</div>
    </div>
  );
};
