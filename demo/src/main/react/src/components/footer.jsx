import styled from "styled-components"

const Wrapper = styled.div`
    width: 100%;
    height: 70px;
    background-color: #100F0F;
    display: flex;
    align-items: center;
    justify-content: right;
    position: relative;
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


export default function Footer() {

    return (
    <Wrapper>
        <Menu>
            <MenuItem>footer</MenuItem>
        </Menu>
    </Wrapper>
    )
}