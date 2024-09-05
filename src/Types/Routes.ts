import { ReactNode } from "react";

export interface Route {
  path: string;
  link: string;
  element: ReactNode;
}

export interface Routes {
  HOME: Route;
  INTRO: Route;
  CAREER: Route;
  ETC: Route;
}
