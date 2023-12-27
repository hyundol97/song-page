/**
 * @file 홈 (페이지)
 * @author h.s.Song
 */

import Lottie from 'react-lottie-player';
import lottieJson from '../Assets/animation.json';

const Home = () => {
  return (
    <Lottie
      className="item-center justify-center flex-auto w-10"
      loop
      animationData={lottieJson}
      play
      style={{ width: 1000, height: 1000, alignItems: 'center' }}
    />
  );
};

export default Home;
