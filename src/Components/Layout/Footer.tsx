/**
 * @file 하단 컴포넌트
 * @author h.s.Song
 * @description 각 페이지의 푸터 부분을 출력하는 컴포넌트
 */

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <span>
        Contact: <a href="mailto:gusqhdo00@gmail.com">gusqhdo00@gmail.com</a>
      </span>
      <span>
        GitHub:{' '}
        <a href="https://github.com/hyundol97/reach-rich" target="_blank">
          https://github.com/hyundol97/reach-rich
        </a>
      </span>
      <span>
        Instagram:{' '}
        <a href="https://www.instagram.com/hyundol_97" target="_blank">
          https://www.instagram.com/hyundol_97
        </a>
      </span>
      <span className="copyrights">Copyright 2024. hyundol97 All pictures cannot be copied without permission.</span>
    </div>
  );
};

export default Footer;
