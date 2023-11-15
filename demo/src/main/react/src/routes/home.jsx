import { useEffect, useState } from 'react';
import Header from "../components/header"
import axios from 'axios';
import styled from 'styled-components';
import Footer from '../components/footer';
import { NewsHead, NewsSub, Newslist } from '../components/news';
import BoardSNS from '../components/board-sns';
import WordcloudResult from '../components/wordcloud';
import { Entertainments, Positive } from '../components/category-badge';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 220px;
  gap: 50px;
  `;

const WrapperBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1400px;
  height: 100vh;
  display: flex;
  justify-content: center;
  gap: 200px;
  `;

const MainBox = styled.div`
  width: 100%;
  max-width: 1400px;
  height: 600px;
  padding: 0 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const MainNewsImage = styled.div`
  width: 100%;
  max-width: 850px;
  height: 600px;
  background-image: url('https://cdn.spotvnews.co.kr/news/photo/202311/643707_950816_2934.jpg');
  position: absolute;
  right: 0;
`;

const MainNewsBox = styled.div`
  width: 100%;
  max-width: 650px;
  height: 100%;
  max-height: 450px;
  padding: 30px;
  position: absolute;
  left: 0;
  z-index: 10;
  background-color: #ffffff;
  box-shadow: 5px 5px 5px 5px #99999944;
`;

const NewsBoxTop = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TopText = styled.div`
  width: 100%;
  max-width: 370px;
  height: 25px;
  display: flex;
  align-items: center;
`;

const TopBadge = styled.div`
  width: 100%;
  width: 200px;
  height: 25px;
  display: flex;
  align-items: center;
`;

const TopMedia = styled.div`
  width: auto;
  height: 25px;
  font-size: 16px;
  color: #999999;
  display: flex;
  align-items: center;
`;

const TopDate = styled.div`
  width: auto;
  height: 25px;
  font-size: 14px;
  padding-left: 30px;
  color: #999999;
  display: flex;
  align-items: center;
`;
  
const MainNewsTitle = styled.div`
  width: 100%;
  max-width: 570px;
  font-size: 32px;
  margin: 20px 0;
  `;

const MainNewsContent = styled.div`
  width: 100%;
  max-width: 570px;
  line-height: 1.8;
`;

const TrendBox = styled.div`
  width: 100%;
  max-width: 1400px;
`;

export default function Home() {
  const [data, setData] = useState('');
  useEffect(() => {
    //java에서 데이터 가져오기
    axios.get('/api/data')
      .then(res => setData(res.data))
      .catch(error => {
        if (error.response) {
          // 서버에서 응답이 왔으나 응답 코드가 2xx가 아닌 경우
          console.error('에러 응답:', error.response.data);
          console.error('에러 상태 코드:', error.response.status);
        } else if (error.request) {
          // 요청이 서버에 도달하지 않은 경우
          console.error('요청이 서버에 도달하지 않음:', error.request);
        } else {
          // 요청을 보내기 전에 발생한 에러
          console.error('에러 설정:', error.config);
        }
      })
  }, []);
  return (
    <Wrapper>
      <Header></Header>
      <WrapperBox>
        <Content>
          <MainBox>
            <MainNewsImage></MainNewsImage>
            <MainNewsBox>
              <NewsBoxTop>
                <TopText>
                  <TopMedia>SPOTVNEWS</TopMedia>
                  <TopDate>2023.11.14 15:34</TopDate>
                </TopText>
                <TopBadge>
                  <Entertainments></Entertainments>
                  <Positive></Positive>
                </TopBadge>
              </NewsBoxTop>
              <MainNewsTitle>곽튜브, 1000만원 걸고 빠니보틀 찾는다…'나는 솔로' 찍은 사연('서치미')</MainNewsTitle>
              <MainNewsContent>
                16일 방송되는 U+모바일tv, KBS2 '서치미'에서는 곽튜브가 자신의 '찐친'인 여행 크리에이터 빠니보틀(박재한) 찾기에 도전한다.<br /><br />

                MC 전현무는 곽튜브에게 전화로 "5명의 빠니보틀이 있다. 이 중 1명만이 진짜 빠니보틀"이라고 룰을 설명한다. 곽튜브가 진짜 빠니보틀을 찾아내면 1000만 원은 곽튜브의 것이 된다.<br /><br />

                곽튜브를 속이기 위해 두 사람의 또 다른 지인 채코제(박재일)와 '시치미단' 이은지, 곽범, 손동표가 나선다.<br /><br />
              </MainNewsContent>
            </MainNewsBox>
          </MainBox>
        </Content>
      </WrapperBox>
      <Footer></Footer>
    </Wrapper>
  )
}