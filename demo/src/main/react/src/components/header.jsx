import { Link } from "react-router-dom";
import styled, { css } from "styled-components"
import searchLogo from "../assets/search-logo.svg";

const Wrapper = styled.div`
    width: 100%;
    height: 120px;
    background-color: rgba(255,255,255,0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    position: fixed;
    top: 0;
    backdrop-filter: blur(10px);
    box-shadow: 5px 5px 50px 5px #99999944;
    z-index: 99;
`;

const WrapperTop = styled.div`
    width: 100%;
    height: 80px;
    max-width: 1400px;
    padding: 0 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const WrapperBottom = styled.div`
    width: 100%;
    height: 40px;
    max-width: 1400px;
    padding: 0 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.div`
    width: 300px;
    height: 80px;
    display: flex;
    align-items: center;
    font-size: 32px;
    font-weight: 600;
    cursor: pointer;
`;

const LoginBox = styled.div`
    width: 300px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const UserButton = styled.div`
    width: 100px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
    background: #F0BE4D;
    color: white;
    transition: 0.5s;
  }
`;

const MenuBox = styled.div`
    width: 100%;
    max-width: 1100px;
    height: 40px;
    padding-right: 50px;
    display: flex;
    align-items: center;
    justify-content: left;
`;

const MenuItem = styled.div`
    width: 25%;
    max-width: 200px;
    min-width: 100px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: ${(props) => props.color || "#000000"};
    background-color: ${(props) => props.background || "#ffffff"};
    &:hover {
    background: #F0BE4D;
    color: white;
    transition: 0.5s;
    }
    ${(props) => 
        props.onPage && 
        css`
            background: #F0BE4D;
            color: white;
        `
    }
`;

const InputBox = styled.form`
    width: 100%;
    max-width: 300px;
    height: 30px;
    padding-bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: right;
`;

const InputItem = styled.input`
    width: 100%;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #999999;
    &:focus{
        border: 1px solid #F0BE4D;
    }
`;


export default function Header({...props}) {

    return (
        <Wrapper>
            <WrapperTop>
                <Title>News Summary</Title>
                <LoginBox>
                    <UserButton>로그인</UserButton>
                    <UserButton>회원가입</UserButton>
                </LoginBox>
            </WrapperTop>
            <WrapperBottom>
                <MenuBox>
                    <MenuItem {...props} onPage>메인화면</MenuItem>
                    <MenuItem>일간뉴스</MenuItem>
                    <MenuItem>카테고리</MenuItem>
                    <MenuItem>커뮤니티</MenuItem>
                </MenuBox>
                <InputBox>
                    <InputItem />
                </InputBox>
            </WrapperBottom>
        </Wrapper>
    )
}