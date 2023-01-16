import { ReactNode } from "react";
export interface Button {
  className: string;
  icon: ReactNode;
  text: string;
  provider: (() => Promise<void>) | undefined;
}
