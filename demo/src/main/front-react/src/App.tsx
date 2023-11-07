import { useEffect, useState } from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './routes/home';
import LoadingScreen from './components/loading-screen';
import reset from "styled-reset";
import { createGlobalStyle } from 'styled-components';

// 초기 시작페이지를 잡아주기
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
])

// reset css
const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

function App() {
  // const [data, setData] = useState('');
  const [isLoading, setLoading] = useState(true);
  const init = () => {
    setLoading(false);
  }
  useEffect(() => {
    init();

    // //java에서 데이터 가져오기
    // axios.get('/api/data')
    //   .then(res => setData(res.data))
    //   .catch(error => {
    //     if (error.response) {
    //       // 서버에서 응답이 왔으나 응답 코드가 2xx가 아닌 경우
    //       console.error('에러 응답:', error.response.data);
    //       console.error('에러 상태 코드:', error.response.status);
    //     } else if (error.request) {
    //       // 요청이 서버에 도달하지 않은 경우
    //       console.error('요청이 서버에 도달하지 않음:', error.request);
    //     } else {
    //       // 요청을 보내기 전에 발생한 에러
    //       console.error('에러 설정:', error.config);
    //     }
    //     console.log(data);
    //   })
  }, []);
  return (
    <>
      <GlobalStyles />
      {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
      {/* <div>받아온 값 : {data}</div> */}
    </>
  )
}

export default App
