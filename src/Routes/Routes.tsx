/**
 * @file 라우터
 * @author h.s.Song
 * @description 라우트 경로 정의 (루트)파일
 */

import { Route, Routes } from '../Types/Routes';
import Home from '../Pages/Home';
import Login from '../Pages/Login';

export const ROUTES: Routes = {
  // 230627 김민성
  HOME: {
    path: '/',
    link: '/',
    element: <Home />,
  },
  LOGIN: {
    path: '/login',
    link: '/login',
    element: <Login />,
  },
};

export const ROUTES_ARR: Route[] = Object.values(ROUTES);
