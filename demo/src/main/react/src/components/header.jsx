import { Link } from "react-router-dom";
import styled from "styled-components"
import searchLogo from "../assets/search-logo.svg";

const Wrapper = styled.div`
    width: 100%;
    height: 110px;
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
    height: 30px;
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
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const MenuBox = styled.div`
    width: 100%;
    max-width: 1100px;
    height: 30px;
    padding-right: 20px;
    display: flex;
    align-items: center;
    justify-content: left;
`;

const MenuItem = styled.div`
    width: 25%;
    max-width: 200px;
    min-width: 100px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: aqua;
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
`;

// const Menu = styled.div`
//     width: 70%;
//     height: 90px;
//     display: flex;
//     align-items: center;
// `;

// const UserMenu = styled.div`
//     width: 100%;
//     max-width: 1200px;
//     height: 20px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     padding-right: 150px;
// `;

// const ContentMenu = styled.div`
//     width: 100%;
//     max-width: 1200px;
//     height: 70px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 10px;
//     padding: 0 50px;
//     `;

// const SubMenu = styled.div`
//     width: 20%;
//     height: 90px;
//     `;

// const LoginButton = styled.div`
//         width: 100px;
//         height: 30px;
//         padding: 2px 20px;
//         margin-top: 8px;
//         color: black;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         font-size: 14px;
//         cursor: pointer;
//     `;

// const Logo = styled.div`
//     width: 10%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 0 50px;
// `;

// const MainLogo = styled.img`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 120px;
//     height: 60px;
// `;

// const NewsCategori = styled.div`
//     width: 70%;
//     display: flex;
//     align-items: center;
//     justify-content: left;
//     gap: 20px;
// `;

// const MenuItem = styled.div`
//     width: 300%;
//     max-width: 200px;
//     min-width: 100px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     color: black;
//     white-space: nowrap;
//     cursor: pointer;
// `;

const SearchForm = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding-right: 150px;
    padding-top: 10px;
`;

const SearchInput = styled.input`
    width: 200px;
    height: 20px;
    border-radius: 5px;
    border: 1px solid #999999;
`;

const SearchLogo = styled.img`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;


export default function Header() {

    return (
        <Wrapper>
            <WrapperTop>
                <Title>News Summary</Title>
                <LoginBox>
                    <UserButton>Log In</UserButton>
                    <UserButton>Sign Up</UserButton>
                </LoginBox>
            </WrapperTop>
            <WrapperBottom>
                <MenuBox>
                    <MenuItem>News</MenuItem>
                    <MenuItem>Category</MenuItem>
                    <MenuItem>Board</MenuItem>
                    <MenuItem>Mypage</MenuItem>
                </MenuBox>
                <InputBox>
                    <InputItem />
                </InputBox>
                {/* <SearchForm>
                    <SearchInput />
                    <SearchLogo src={searchLogo}></SearchLogo>
                </SearchForm> */}
            </WrapperBottom>
        </Wrapper>
    )
}