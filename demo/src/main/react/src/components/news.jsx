import styled from 'styled-components';
import newsImage1 from '../assets/news1.jpg';
import newsImage2 from '../assets/news2.png';

const WrapperHead = styled.div`
    width:100%;
    height:100%;
    position: relative;
    grid-area: main;
`;
const ImageBoxHead = styled.div`
    width:790px;
    height:450px;
    overflow:hidden;
    margin:0 auto;
`;

const TextBoxHead = styled.div`
    width: 600px;
    height: 100px;
    align-items: center;
    position: absolute;
    top: 320px;
    left: 40px;
`;

const NewsImageHead = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
`;

const NewsCategoriHead = styled.span`
    height: 30px;
    padding: 6px 16px;
    background-color: #FFE7E6;
`;
const NewsTextHead = styled.div`
    color: white;
    margin-top: 20px;
    padding: 0 20px;
    font-size: 22px;
    font-weight: 600;
    line-height: 30px;
`;

const WrapperSub = styled.div`
    width:250px;
    height:300px;
    border: 1px solid #00000018;
`;

const ImageBoxSub = styled.div`
    width:250px;
    height:150px;
    overflow:hidden;
    margin:0 auto;
`;

const TextBoxSub = styled.div`
    width:250px;
    height:150px;
    padding-top: 30px;
    `;

const NewsImageSub = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
`;

const NewsCategoriSub = styled.span`
    height: 30px;
    padding: 6px 16px;
    margin-left: 10px;
    font-size: 14px;
    background-color: #F4FFD5;
`;

const NewsTextSub = styled.div`
    color: black;
    padding: 30px 20px 0 20px;
    font-size: 16px;
    line-height: 20px;
`;

const WrapperList = styled.div`
    width:350px;
    height:770px;
    position: relative;
    grid-area: list;
    `;
const NewsBoxList = styled.div`
    width:350px;
    height: 154px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid #99999999;
`;

const ImageBoxList = styled.div`
    width:100px;
    height:100px;
    overflow:hidden;
    margin:0 auto;
    `;

const TextBoxList = styled.div`
    width: 250px;
    height: 100px;
    padding: 5px 20px;
`;

const NewsImageList = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
    border-radius: 10px;
`;

const NewsCategoriList = styled.span`
    height: 30px;
    padding: 2px 16px;
    font-size: 14px;
    background-color: #F4FFD5;
`;

const NewsTextList = styled.div`
    color: black;
    font-size: 16px;
    line-height: 20px;
    padding-top: 14px;
`;

export function NewsHead() {
    return (
        <WrapperHead>
            <ImageBoxHead>
                <NewsImageHead src={newsImage1}></NewsImageHead>
                <TextBoxHead>
                    <NewsCategoriHead>Entertainment</NewsCategoriHead>
                    <NewsTextHead>[공식] SM "레드벨벳 해체설 사실무근, '해피엔딩' 계정명 변경=신보 콘셉트"</NewsTextHead>
                </TextBoxHead>
            </ImageBoxHead>
        </WrapperHead>
    )
}

export function NewsSub() {
    return (
        <WrapperSub>
            <ImageBoxSub>
                <NewsImageSub src={newsImage2}></NewsImageSub>
            </ImageBoxSub>
            <TextBoxSub>
                <NewsCategoriSub>Business</NewsCategoriSub>
                <NewsTextSub>소주값 싸질까? 세법 바꿔 출고가 최대 20% 낮춘다</NewsTextSub>
            </TextBoxSub>
        </WrapperSub>
    )
}

export function Newslist() {
    return (
        <WrapperList>
            <NewsBoxList>
                <ImageBoxList>
                    <NewsImageList src='https://imgnews.pstatic.net/image/052/2023/11/09/202311090855015333_t_20231109085707127.jpg?type=w647'></NewsImageList>
                </ImageBoxList>
                <TextBoxList>
                    <NewsCategoriList>Business</NewsCategoriList>
                    <NewsTextList>"왜 세금 안 내"...에어비앤비, 이탈리아서 탈세 혐의로 1조 원 압류</NewsTextList>
                </TextBoxList>
            </NewsBoxList>
            <NewsBoxList>
                <ImageBoxList>
                    <NewsImageList src='https://imgnews.pstatic.net/image/660/2023/11/08/0000048836_001_20231108225801744.jpg?type=w647'></NewsImageList>
                </ImageBoxList>
                <TextBoxList>
                    <NewsCategoriList>Business</NewsCategoriList>
                    <NewsTextList>"한전, 2026년까지 1,200명 감축..인재개발원 부지도 매각"</NewsTextList>
                </TextBoxList>
            </NewsBoxList>
            <NewsBoxList>
                <ImageBoxList>
                    <NewsImageList src='https://mimgnews.pstatic.net/image/117/2023/11/09/0003786196_001_20231109081301193.jpg?type=w540'></NewsImageList>
                </ImageBoxList>
                <TextBoxList>
                    <NewsCategoriList>Entertainment</NewsCategoriList>
                    <NewsTextList>'더 마블스', 개봉 첫날 박스오피스 1위…관객 호평 이어져</NewsTextList>
                </TextBoxList>
            </NewsBoxList>
            <NewsBoxList>
                <ImageBoxList>
                    <NewsImageList src='https://imgnews.pstatic.net/image/081/2023/11/09/0003407187_001_20231109091805224.jpg?type=w647'></NewsImageList>
                </ImageBoxList>
                <TextBoxList>
                    <NewsCategoriList>Sports</NewsCategoriList>
                    <NewsTextList>김민재, ‘13경기 연속’ 풀타임…뮌헨 UCL 4전 전승</NewsTextList>
                </TextBoxList>
            </NewsBoxList>
            <NewsBoxList style={{ borderBottom: 'none' }}>
                <ImageBoxList>
                    <NewsImageList src='https://imgnews.pstatic.net/image/094/2023/11/08/0000011324_001_20231108075601221.jpg?type=w647'></NewsImageList>
                </ImageBoxList>
                <TextBoxList>
                    <NewsCategoriList>Travel</NewsCategoriList>
                    <NewsTextList>[제주, 어디까지 아세요 손지오름] 한라산의 손자뻘 억새가 은하수처럼 빛난다</NewsTextList>
                </TextBoxList>
            </NewsBoxList>
        </WrapperList>
    )
}