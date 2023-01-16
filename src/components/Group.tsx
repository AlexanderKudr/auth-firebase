import { Group as GroupProps } from "../types/Group";

export const Group = ({ children, className }: GroupProps) => {
  return <div className={className}>{children}</div>;
};
