/**
 * @file router
 * @author 김민성
 * @description 라우트 정의, 레이지 로딩으로 코드 스플리팅
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
