import styled from 'styled-components';
import newsImage from '../assets/news1.jpg';


const Wrapper = styled.div`
    position: relative;

`;
const ImageBox = styled.div`
    width:780px;
    height:400px;
    overflow:hidden;
    margin:0 auto;
`;

const TextBox = styled.div`
    width: 600px;
    height: 100px;
    /* background-color: gray; */
    align-items: center;
    position: absolute;
    top: 260px;
    left: 40px;
`;

const NewsImage = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
`;

const NewsCategori = styled.span`
    height: 30px;
    padding: 6px 16px;
    background-color: #FFE7E6;
`;
const NewsText = styled.div`
    color: white;
    margin-top: 20px;
    padding: 0 20px;
    font-size: 22px;
    font-weight: 600;
    line-height: 30px;
`;

export default function NewsHead() {
    return (
        <Wrapper>
            <ImageBox>
                <NewsImage src={newsImage}></NewsImage>
            <TextBox>
                <NewsCategori>Entertainment</NewsCategori>
                <NewsText>[공식] SM "레드벨벳 해체설 사실무근, '해피엔딩' 계정명 변경=신보 콘셉트"</NewsText>
            </TextBox>
            </ImageBox>
        </Wrapper>
    )
}