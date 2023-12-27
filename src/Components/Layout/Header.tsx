/**
 * @file 상단 메뉴
 * @author h.s.Song
 * @description 각 페이지의 헤더 (메뉴) 부분을 출력하는 컴포넌트
 */

import '../../Styles/index.scss';

const Header = () => {
  return (
    <div className="header">
      <span>LOGIN</span>
      <span>MY PAGE</span>
      <span>PROFILE</span>
    </div>
  );
};

export default Header;
