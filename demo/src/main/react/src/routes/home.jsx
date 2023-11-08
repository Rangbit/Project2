import { useEffect, useState } from 'react';
import Header from "../components/header"
import axios from 'axios';
import styled from 'styled-components';
import Footer from '../components/footer';
import NewsHead from '../components/news-head';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  gap: 50px;
  /* overflow-y: auto; */
  `;

const Content = styled.div`
  width: 100%;
  min-height: 1200px;
  padding: 180px 15% 0 15%;
  /* background-color: gray; */
  display: grid;
  justify-items: center;
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
  background-color: aqua;
  gap: 30px;
  position: absolute;
  top: 120px;
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
  max-width: 1000px;
  height: 500px;
  /* padding: 20px;
  border: 1px solid #999999;
  border-radius: 10px; */
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, minmax(250px, auto));
  grid-template-rows: repeat(4, minmax(150px, auto));
  row-gap: 10px;
  column-gap: 20px;
  grid-template-areas: 
    "main main main list"
    "main main main list"
    "main main main list"
    "subs subs subs list";
    .main-news { grid-area: main; }
    .sub-news { grid-area: subs; }
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
          <TrendHeader>TrendNews</TrendHeader>
          <TrendNews>test news Title Here</TrendNews>
        </Trend>
        <MainNews>
          <NewsHead className="main-news">1</NewsHead>
          {/* <NewsSub className="sub-news">2</NewsSub>
          <Newslist className="list-news">3</Newslist>
          <Newslist className="list-news">3</Newslist>
          <Newslist className="list-news">3</Newslist>
          <Newslist className="list-news">3</Newslist> */}
        </MainNews>
      </Content>
      <Footer></Footer>
    </Wrapper>
  )
}