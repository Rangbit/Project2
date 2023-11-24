// NewsDataList.js

import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

// React 컨텍스트 생성
const NewsListContext = createContext();

// 데이터 프로바이더 컴포넌트
export function NewsDataList({ children }) {
    // 데이터 상태 및 업데이트 함수
    const [newsData, setNewsData] = useState([]);

    // 컴포넌트가 마운트될 때 데이터를 가져오는 useEffect
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/NewsTestData.json');
                setNewsData(response.data);
            } catch (error) {
                console.error('JSON 데이터를 불러오는 중 오류 발생:', error);
            }
        };

        fetchData();
    }, []); // 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때만 실행

    // 컨텍스트 프로바이더 제공
    return (
        <NewsListContext.Provider value={newsData}>
            {children}
        </NewsListContext.Provider>
    );
}

// 커스텀 훅 생성
export function useNewsData() {
    return useContext(NewsListContext);
}
