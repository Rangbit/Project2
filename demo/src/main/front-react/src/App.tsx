import { useEffect, useState } from 'react'
import axios from 'axios';

function App() {
  const [data, setData] = useState('');
  
  useEffect(() => {
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
      console.log(data);
    })
  }, []);
  return (
    <>
      <div>
        받아온 값 : {data}
      </div>
    </>
  )
}

export default App
