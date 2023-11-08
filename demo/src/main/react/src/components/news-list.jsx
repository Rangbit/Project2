import styled from 'styled-components';

const Wrapper = styled.div`
    width:350px;
    height:770px;
    position: relative;
    grid-area: list;
    `;
const NewsBox = styled.div`
    width:350px;
    height: 154px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 0;
`;

const ImageBox = styled.div`
    width:100px;
    height:100px;
    overflow:hidden;
    margin:0 auto;
    background-color: aqua;
    `;
const TextBox = styled.div`
    width: 250px;
    height: 100px;
    background-color: gray;

`;
const NewsImage = styled.img``;
const NewsCategori = styled.div``;
const NewsText = styled.div``;

export default function Newslist() {
    return (
        <Wrapper>
            <NewsBox>
            <ImageBox>
                <NewsImage></NewsImage>
            </ImageBox>
            <TextBox>
                <NewsCategori></NewsCategori>
                <NewsText></NewsText>
            </TextBox>
            </NewsBox>
        </Wrapper>
    )
}