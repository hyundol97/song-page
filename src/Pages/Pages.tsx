/**
 * @file 페이지 레이아웃
 * @author h.s.Song
 */

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as RoutesType from '../Types/Routes';

interface PageProps {
  routes: RoutesType.Route[];
}

const Pages = (props: PageProps) => {
  const { routes } = props;
  return (
    <Router>
      <Routes>
        {routes.map((el) => {
          return <Route key={el.path} path={el.path} element={el.element} />;
        })}
        <Route path="/*" element={<div>page not found</div>} />
      </Routes>
    </Router>
  );
};

export default Pages;
