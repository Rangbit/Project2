import styled from "styled-components"

const Wrapper = styled.div`
    width: 100%;
    height: 70px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: right;
`;

const Menu = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

const MenuItem = styled.div`
    width: 100%;
    cursor: pointer;
    color: white;
    font-size: 22px;
`;


export default function Header() {

    return (
    <Wrapper>
        <Menu>
            <MenuItem>test1</MenuItem>
            <MenuItem>test2</MenuItem>
            <MenuItem>test3</MenuItem>
        </Menu>
    </Wrapper>
    )
}