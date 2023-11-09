import { useEffect, useState } from 'react';
import Header from "../components/header"
import axios from 'axios';
import styled from 'styled-components';
import Footer from '../components/footer';
import { NewsHead, NewsSub, Newslist } from '../components/news';
import BoardSNS from '../components/board-sns';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 180px;
  gap: 50px;
  `;

const Content = styled.div`
  width: 100%;
  padding: 0 15%;
  margin-bottom: 200px;
  display: flex;
  justify-content: center;
  gap: 100px;
`;

const Trend = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 30px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  padding: 0 30px;
  color: white;
  gap: 30px;
  position: absolute;
  top: 120px;
  white-space: nowrap;
`;

const TrendHeader = styled.div`
  width: 120px;
  height: 30px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FF0B0B;
`;


const TrendNews = styled.div`
  color: black;
`;

const MainNews = styled.div`
  width: 100%;
  height: 690px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, minmax(250px, auto));
  grid-template-rows: repeat(4, minmax(50px, auto));
  row-gap: 10px;
  column-gap: 20px;
  grid-template-areas: 
    "main main main list"
    "main main main list"
    "main main main list"
    "subs subs subs list";
`;

const MainBoard = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  gap: 20px;
  /* background-color: aqua; */
`;

const HeadTitle = styled.div`
  width: 100%;
  height: 50px;
  padding: 60px 16%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  font-weight: 600;
`;

const HeadTitleText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeadTitleMore = styled.div`
  padding: 4px 10px;
  font-size: 16px;
  border: 1px solid #99999999;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
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
      <Content>
        <Trend>
          <TrendHeader>Trend News</TrendHeader>
          <TrendNews>연합뉴스 · 서울지하철 내일 오전 9시부터 파업 돌입…노사 교섭 결렬</TrendNews>
        </Trend>
        <MainNews>
          <NewsHead></NewsHead>
          <Newslist></Newslist>
          <NewsSub></NewsSub>
          <NewsSub></NewsSub>
          <NewsSub></NewsSub>
        </MainNews>
      </Content>
      <HeadTitle>
        <HeadTitleText>Board</HeadTitleText>
        <HeadTitleMore>more &rsaquo;</HeadTitleMore>
      </HeadTitle>
      <Content>
        <MainBoard>
          <BoardSNS></BoardSNS>
          <BoardSNS></BoardSNS>
          <BoardSNS></BoardSNS>
          <BoardSNS></BoardSNS>
        </MainBoard>
      </Content>
      <Footer></Footer>
    </Wrapper>
  )
}