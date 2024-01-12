/**
 * @file 인트로 (페이지)
 * @author h.s.Song
 */

import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import SchoolIcon from '@mui/icons-material/School';
import identify from 'Assets/identify.jpg';

const Intro = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="intro-wrapper">
      <div className="intro-main">
        <Card sx={{ borderRadius: 5, boxShadow: 7 }}>
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
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
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
            <ListItemText primary="고등학교" secondary="부용고등학교 (인문계)" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <SchoolIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="대학교" secondary="세종대학교 (소프트웨어, 소셜미디어매니지먼트소프트웨어 전공)" />
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default Intro;
