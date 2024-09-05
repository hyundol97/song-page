/**
 * @file 홈 (페이지)
 * @author h.s.Song
 */

import Lottie from "react-lottie-player";
import doMyBestJson from "Assets/doMyBest.json";
import everyExperienceJson from "Assets/everyExperience.json";
import richIsJson from "Assets/richIs.json";
import TyppingEffectText from "Components/Common/TyppingEffectText";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-main">
        <Lottie
          loop
          animationData={doMyBestJson}
          play
          style={{ width: "50%", height: "50%" }}
        />
        <div>
          <p className="intro-main">Do My Best!</p>
          <p className="intro-black">안녕하세요 🖐️</p>
          <TyppingEffectText text="최고보다 최선을 다하는 사람이 되고싶은" />
          <p className="intro-black">프론트엔드 개발자 송현석 입니다.</p>
        </div>
      </div>
      <div className="home-main">
        <Lottie
          loop
          animationData={everyExperienceJson}
          play
          style={{ width: "50%", height: "50%" }}
        />
        <div>
          <p className="intro-main">Every Experience</p>
          <p className="intro-black">
            새로운 기술 및 환경을 경험하는 것, 그리고 새로운 사람을 만나는 것은
          </p>
          <TyppingEffectText text="또 다른 나를 발견할 수 있는 기회라고 생각합니다." />
          <p className="intro-black">확신할 수 있는 길을 찾을 수 있도록</p>
          <TyppingEffectText text="찾아온 모든 기회를 쟁취하려 노력하는 편입니다." />
        </div>
      </div>
      <div className="home-sub">
        <Lottie
          loop
          animationData={richIsJson}
          play
          style={{ width: "50%", height: "50%", marginBottom: "30px" }}
        />
        <div>
          <p className="intro-black">
            &nbsp; 세상에 부유한 사람들은 많습니다. 하지만, 여기서 의미하는
            부유함은 재력에 대한 부유함을 의미합니다. 저는 이외에 넓고 우호적인
            인간관계, 여러 사람들에게 인정받을 수 있는 능력, 그리고 여유를 가질
            수 있는 심적인 부분 등의 방면에서 부유한 사람이 되고자 합니다.
            이러한 점들을 먼저 증식시키면 재력에 대한 부유함은 저절로 따라오게
            될 것이라고 생각합니다.
          </p>
          <p className="intro-black">
            &nbsp; 제 인생의 모토는 가장 중요한 것은 사람이라는 것입니다. 안락한
            삶을 영위할 수 있다 하더라도, 결국 이를 함께 나눌 수 있는 사람이
            중요하다는 것을 중요시 하고 있습니다. 따라서, 한 사람마다의 인연을
            헛되이 하지 않으며 조직의 원만한 분위기를 위해 노력하고 있습니다.
            좋은 환경과 양질의 업무를 함께 만들어가는, 그리고 조직에 꼭 필요한
            사람이 되고자 합니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
