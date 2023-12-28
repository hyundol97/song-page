/**
 * @file 홈 (페이지)
 * @author h.s.Song
 */

import Lottie from 'react-lottie-player';
import lottieJson from '../Assets/animation.json';

const Home = () => {
  return (
    <>
      <div className="home-main">
        <Lottie loop animationData={lottieJson} play style={{ width: '50%', height: '50%' }} />
        <div>ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ</div>
      </div>
      <div>ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ</div>
    </>
  );
};

export default Home;
