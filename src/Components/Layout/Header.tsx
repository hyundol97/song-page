/**
 * @file 상단 메뉴
 * @author h.s.Song
 * @description 각 페이지의 헤더 (메뉴) 부분을 출력하는 컴포넌트
 */

import { BrowserRouter as Router, Link } from 'react-router-dom';
import { ROUTES } from '../../Routes/Routes';
import '../../Styles/index.scss';

const Header = () => {
  return (
    <div className="header">
      <Router>
        <span>
          <Link to={ROUTES.INTRO.path} key={ROUTES.INTRO.path} className="no-decoration">
            INTRO
          </Link>
        </span>
        <span>
          <Link to={ROUTES.CAREER.path} key={ROUTES.CAREER.path} className="no-decoration">
            CAREER
          </Link>
        </span>
        <span>
          <Link to={ROUTES.ETC.path} key={ROUTES.ETC.path} className="no-decoration">
            ETC
          </Link>
        </span>
      </Router>
    </div>
  );
};

export default Header;
