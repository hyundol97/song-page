/**
 * @file 상단 메뉴
 * @author h.s.Song
 * @description 각 페이지의 헤더 (메뉴) 부분을 출력하는 컴포넌트
 */

import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from 'Routes/Routes';
import homeLogo from 'Assets/home_logo.png';

const Header = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/');
  };

  return (
    <div className="header">
      <div className="logo">
        <img src={homeLogo} alt="main" width="140px" onClick={onClick} />
      </div>
      <div className="menu">
        <span>
          <Link to={ROUTES.INTRO.path} className="no-decoration">
            INTRO
          </Link>
        </span>
        <span>
          <Link to={ROUTES.CAREER.path} className="no-decoration">
            CAREER
          </Link>
        </span>
        <span>
          <Link to={ROUTES.ETC.path} className="no-decoration">
            ETC
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
