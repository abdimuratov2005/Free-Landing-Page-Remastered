import styled from 'styled-components';

export const HeaderSect = styled.header `
    height: 90px;
    padding: 33px 0;
    @media (max-width:768px){
        height: 0;
        padding: 20px;
    }
    @media (max-width: 574.98px){
        padding: 0px;
    }
`
export const HeaderContainer = styled.header `
`
export const CloseBurgerIcon = styled.div `
    width: 100%;
    display: none;
    justify-content: flex-end;
    & svg {
        width: 60px;
        height: 60px;
    }
`
export const NavbarList = styled.ul `
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    @media (max-width: 574.98px){
        display: none;
    }
`
export const NavbarLink = styled.a `
    cursor: pointer;
    text-decoration: none;
    font-weight: 700;
    color: #828282;
    font-size: 18px;
    white-space: nowrap;
    &:hover{
        color: #070707;
    }
`