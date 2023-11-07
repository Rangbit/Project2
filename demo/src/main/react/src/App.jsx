import { useEffect, useState } from 'react';
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
  const [isLoading, setLoading] = useState(true);
  const init = () => {
    setLoading(false);
  }
  useEffect(() => {
    init();
  }, []);
  return (
    <>
      <GlobalStyles />
      {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
    </>
  )
}

export default App
