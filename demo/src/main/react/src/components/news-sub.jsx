import styled from 'styled-components';
import newsImage from '../assets/news2.png';

const Wrapper = styled.div`
    width:250px;
    height:300px;
    border: 1px solid #00000018;
`;
const ImageBox = styled.div`
    width:250px;
    height:150px;
    overflow:hidden;
    margin:0 auto;
`;
const TextBox = styled.div`
    width:250px;
    height:150px;
    padding-top: 30px;
    `;
const NewsImage = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
`;
const NewsCategori = styled.span`
    height: 30px;
    padding: 6px 16px;
    margin-left: 10px;
    font-size: 14px;
    background-color: #F4FFD5;
`;
const NewsText = styled.div`
    color: black;
    padding: 30px 20px 0 20px;
    font-size: 16px;
    line-height: 20px;
`;

export default function NewsSub() {
    return (
        <Wrapper>
            <ImageBox>
                <NewsImage src={newsImage}></NewsImage>
            </ImageBox>
            <TextBox>
                <NewsCategori>Business</NewsCategori>
                <NewsText>소주값 싸질까? 세법 바꿔 출고가 최대 20% 낮춘다</NewsText>
            </TextBox>
        </Wrapper>
    )
}