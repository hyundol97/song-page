/**
 * @file 인트로 (페이지)
 * @author h.s.Song
 */

import identify from 'Assets/identify.jpg';

const Intro = () => {
  return (
    <div className="intro-wrapper">
      <div className="intro-main">
        <img src={identify} alt="identify" width="200px" />
        <div>
          <ol>
            <li>이름: 송현석</li>
            <li>성별: 남자</li>
            <li>생년월일: 1997.08.19</li>
            <li>거주지: 서울특별시 관악구</li>
            <li>최종학력: 학사 (3.62/4.5)</li>
          </ol>
        </div>
      </div>
      <div className="intro-main">
        <div>
          <p>ㅇㅁㅇㅁㅇㅁㅇㅁ</p>
          <p>ㅁㅇㅁㅊㅋㅊㅈㅇㅂㅋ</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
