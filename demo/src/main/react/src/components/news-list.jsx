import styled from 'styled-components';

const Wrapper = styled.div``;
const ImageBox = styled.div``;
const TextBox = styled.div``;
const NewsImage = styled.img``;
const NewsCategori = styled.div``;
const NewsText = styled.div``;

export default function Newslist() {
    return (
        <Wrapper>
            <ImageBox>
                <NewsImage></NewsImage>
            </ImageBox>
            <TextBox>
                <NewsCategori></NewsCategori>
                <NewsText></NewsText>
            </TextBox>
        </Wrapper>
    )
}