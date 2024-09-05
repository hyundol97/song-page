/**
 * @file 인트로 (페이지)
 * @author h.s.Song
 */

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import SchoolIcon from "@mui/icons-material/School";
import identify from "Assets/identify.jpg";
import example from "Assets/background.jpg";

const Intro = () => {
  return (
    <div className="intro-wrapper">
      <div className="intro-main">
        <Card sx={{ borderRadius: 5, boxShadow: 7, maxWidth: "300px" }}>
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

        <div>
          <List sx={{ bgcolor: "background.paper" }}>
            <h2>학력사항</h2>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <SchoolIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="초등학교" secondary="용현초등학교" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <SchoolIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="중학교" secondary="충의중학교" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <SchoolIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="고등학교"
                secondary="부용고등학교 (인문계)"
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <SchoolIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="대학교"
                secondary="세종대학교 (소프트웨어, 소셜미디어매니지먼트소프트웨어 전공)"
              />
            </ListItem>
          </List>
        </div>
      </div>

      <div className="summary">
        <div className="summary-contents">
          <h2>새로운 길에 대한 도전</h2>
          <p>
            &nbsp; 고등학생 시절 문과에 속한 학생이었고, 제 당시 장래희망은 돈을
            가장 많이 벌 수 있는 직업을 갖는 것이 전부였습니다. 이에 상경계열
            학과를 선택하여 대학을 지원하고자 했었습니다. 하지만, 이는 제가
            흥미를 가질 요소와는 거리가 있다 생각했습니다. 결국, 성적에 맞춰
            대학에 진학하기를 포기하였고 새로운 도전을 결심하였고, 교차지원을
            통해 대학에 입학하였습니다. 대학에서 주전공으로 소프트웨어학,
            연계전공으로 소셜미디어매니지먼트소프트웨어를 전공하여 학사 학위를
            취득하였습니다. 🎓
          </p>
        </div>

        <div className="summary-images">
          <img src={example} alt="main" />
          <img src={example} alt="main" />
        </div>
      </div>

      <div className="intro-sub">
        <h2>나름 괜찮은 학생 이었을지도?!</h2>
        <div className="intro-images">
          <img src={example} alt="main" />
          <img src={example} alt="main" />
          <img src={example} alt="main" />
          <img src={example} alt="main" />
          <img src={example} alt="main" />
          <img src={example} alt="main" />
          <img src={example} alt="main" />
          <img src={example} alt="main" />
        </div>
        <p>(위 상장들은 극히 일부에 불과합니다^^)</p>
      </div>
    </div>
  );
};

export default Intro;
