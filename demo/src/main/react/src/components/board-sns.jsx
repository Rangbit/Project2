import styled from "styled-components"

const Wrapper = styled.div`
    width: 275px;
    height: 300px;
    border: 1px solid #99999999;
    border-radius: 10px;
`;

const TitleBox = styled.div`
    width: 275px;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    border-bottom: 1px solid #99999999;
`;
const UserBox = styled.div`
    width: 275px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: right;
    padding: 0 20px;
    gap: 10px;
    border-bottom: 1px solid #99999999;
`;
const ContentBox = styled.div`
    width: 275px;
    height: 220px;
    padding: 10px 20px;
`;
const BoardTitle = styled.div``;
const UserImage = styled.img`
    width: 20px;
    height: 20px;
`;
const UserName = styled.div`
    font-size: 14px;
    color: #999999;
    `;
const BoardContent = styled.div`
    font-size: 14px;
`;

export default function BoardSNS() {

    return(
        <Wrapper>
            <TitleBox>
                <BoardTitle>BoardTitle</BoardTitle>
            </TitleBox>
            <UserBox>
                <UserImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/2048px-Windows_10_Default_Profile_Picture.svg.png"></UserImage>
                <UserName>UserName</UserName>
            </UserBox>
            <ContentBox>
                <BoardContent>BoardContent</BoardContent>
            </ContentBox>
        </Wrapper>
    )
}