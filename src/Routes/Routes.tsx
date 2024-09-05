/**
 * @file 라우터
 * @author h.s.Song
 * @description 라우트 경로 정의 (루트)파일
 */

import { Route, Routes } from "Types/Routes";
import Home from "Pages/Home";
import Intro from "Pages/Intro";
import Career from "Pages/Career";
import Etc from "Pages/Etc";

export const ROUTES: Routes = {
  // 230627 김민성
  HOME: {
    path: "/",
    link: "/",
    element: <Home />,
  },
  INTRO: {
    path: "/intro",
    link: "/intro",
    element: <Intro />,
  },
  CAREER: {
    path: "/career",
    link: "/career",
    element: <Career />,
  },
  ETC: {
    path: "/etc",
    link: "/etc",
    element: <Etc />,
  },
};

export const ROUTES_ARR: Route[] = Object.values(ROUTES);
