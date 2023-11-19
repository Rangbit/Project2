import { useEffect, useState } from 'react';
import Header from "../components/header"
import axios from 'axios';
import styled from 'styled-components';
import Footer from '../components/footer';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 120px;
  gap: 50px;
`;

const WrapperBox = styled.div`
  width: 100%;
  max-width: 1400px;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 200px;
  padding: 100px 50px 200px 50px;
  /* padding-bottom: 200px; */
  margin: auto;
  `;

const LeftMenu = styled.div`
    width: 100%;
    max-width: 300px;
    height: 100vh;
    background-color: aqua;
  `;

const Content = styled.div`
  width: 100%;
  max-width: 1000px;
  height: auto;
  display: flex;
  justify-content: center;
`;

const SecessionBox = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 100px;
  padding-bottom: 50px;
  display: flex;
  justify-content: right;
  align-items: center;
`;

const SecessionBtn = styled.div`
  width: 100px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #99999944;
  background-color: #fa4f4f;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Profile() {
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
        <LeftMenu></LeftMenu>
        <Content>
          <SecessionBox>
            <SecessionBtn>회원탈퇴</SecessionBtn>
          </SecessionBox>
        </Content>
      </WrapperBox>
        <Footer></Footer>
    </Wrapper>
  )
}