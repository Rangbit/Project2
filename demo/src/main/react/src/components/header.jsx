import { Link } from "react-router-dom";
import styled from "styled-components"
import searchLogo from "../assets/search-logo.svg";
import newssummary from '../assets/news-summary-logo.png';

const Wrapper = styled.div`
    width: 100%;
    height: 90px;
    background-color: rgba(255,255,255,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    backdrop-filter: blur(10px);
    box-shadow: 5px 5px 50px 5px #99999944;
    z-index: 99;
`;

const WrapperBox = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Menu = styled.div`
    width: 70%;
    height: 90px;
    display: flex;
    align-items: center;
`;

const UserMenu = styled.div`
    width: 100%;
    max-width: 1200px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 150px;
`;

const ContentMenu = styled.div`
    width: 100%;
    max-width: 1200px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 0 50px;
    `;

const SubMenu = styled.div`
    width: 20%;
    height: 90px;
    `;

const LoginButton = styled.div`
        width: 100px;
        height: 30px;
        padding: 2px 20px;
        margin-top: 8px;
        color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        cursor: pointer;
    `;

const Logo = styled.div`
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 50px;
`;

const MainLogo = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 60px;
`;

const NewsCategori = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 20px;
`;

const MenuItem = styled.div`
    width: 300%;
    max-width: 200px;
    min-width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    white-space: nowrap;
    cursor: pointer;
`;

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
            <WrapperBox>
            <Logo>
                <Link to="/" style={{ textDecoration: "none", width: "10%" }}>
                    <MainLogo src={newssummary}></MainLogo>
                </Link>
            </Logo>
            <Menu>
                <ContentMenu>
                    <NewsCategori>
                        <Link to="/" style={{ textDecoration: "none", width: "20%" }}>
                            <MenuItem>Daily</MenuItem>
                        </Link>
                        <Link to="/" style={{ textDecoration: "none", width: "20%" }}>
                            <MenuItem>News</MenuItem>
                        </Link>
                        <Link to="/" style={{ textDecoration: "none", width: "20%" }}>
                            <MenuItem>Board</MenuItem>
                        </Link>
                    </NewsCategori>
                </ContentMenu>
            </Menu>
            <SubMenu>
                <UserMenu>
                    <Link to="/" style={{ textDecoration: "none", width: "100px" }}>
                        <LoginButton>Log In</LoginButton>
                    </Link>
                    <Link to="/" style={{ textDecoration: "none", width: "100px" }}>
                        <LoginButton>Sign Up</LoginButton>
                    </Link>
                </UserMenu>
                <SearchForm>
                    <SearchInput></SearchInput>
                    <SearchLogo src={searchLogo}></SearchLogo>
                </SearchForm>
            </SubMenu>
            </WrapperBox>
        </Wrapper>
    )
}