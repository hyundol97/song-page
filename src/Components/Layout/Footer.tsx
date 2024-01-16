/**
 * @file 하단 컴포넌트
 * @author h.s.Song
 * @description 각 페이지의 푸터 부분을 출력하는 컴포넌트
 */

import packageJson from '../../../package.json';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  const sxObject = {
    fontSize: {
      xs: '25px',
      md: '75px',
      lg: '100px',
    },
  };

  return (
    <div className="footer-wrapper">
      <div className="footer-icons">
        <a href="mailto:gusqhdo00@gmail.com">
          <EmailIcon sx={sxObject} />
        </a>
        <a href="https://github.com/hyundol97/song-page" target="_blank" rel="noopener noreferrer">
          <GitHubIcon sx={sxObject} />
        </a>
        <a href="https://hyundolog.tistory.com" target="_blank" rel="noopener noreferrer">
          <ArticleIcon sx={sxObject} />
        </a>
        <a href="https://www.instagram.com/hyundol_97" target="_blank" rel="noopener noreferrer">
          <InstagramIcon sx={sxObject} />
        </a>
      </div>

      <span className="copyrights">Copyright 2024. hyundol97 All pictures cannot be copied without permission.</span>
      <span className="version">Version {packageJson.version}</span>
    </div>
  );
};

export default Footer;
