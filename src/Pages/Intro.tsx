/**
 * @file 인트로 (페이지)
 * @author h.s.Song
 */

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import identify from 'Assets/identify.jpg';

const Intro = () => {
  return (
    <div className="intro-wrapper">
      <div className="intro-main">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia component="img" image={identify} alt="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h5">
                프로필
              </Typography>
              <Typography variant="body1">
                <p>이름: 송현석</p>
                <p>생년월일: 1997.08.19</p>
                <p>성별: 남자</p>
                <p>거주지: 서울특별시 관악구</p>
                <p>최종학력: 학사 (3.62 / 4.5)</p>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div className="intro-main">
        <div>
          <p>ㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁ</p>
          <p>ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
