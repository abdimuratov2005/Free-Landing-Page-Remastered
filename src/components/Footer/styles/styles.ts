import styled from "styled-components";

export const FooterSect = styled.footer`
`;
export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 114px 30px 123px;
  @media (max-width: 767.98px){
    padding: 50px 0;
  }
`;
export const FooterTitle = styled.h1`
  font-size: 34px;
  margin: 0 0 20px;
`;
export const FooterSubTitle = styled.p`
  margin: 0 0 30px;
  white-space: nowrap;
  font-size: 18px;
  line-height: 21px;
  @media (max-width: 574.98px){
    white-space: normal;
  }
`;
export const FooterLink = styled.a`
  margin: 0 0 86px;
  @media (max-width: 767.98px){
    margin: 0 0 46px;
  }
`;
export const FooterLinkBtn = styled.a`
  font-size: 18px;
  color: #fff;
  white-space: nowrap;
  border-radius: 20px;
  font-weight: 800;
  text-decoration: none;
  background-color: #070707;
  padding: 13px 30px 6px 28px;
  transition: 0.2s;
  &:hover {
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
    color: #000;
    background-color: rgba(0, 0, 0, 0.5);
  }
  &:active,
  &:focus {
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
  }
`;
export const FooterSocList = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const FooterSocItem = styled.li`
  list-style: none;
  &:not(:last-child){
    margin: 0 50px 0 0;
  }
  @media (max-width: 574.98px){
    &:not(:last-child){
      margin: 0 20px 0 0;
    }
  }
`;
export const FooterSocLink = styled.a`
  cursor: pointer;
`;
export const FooterLikeMe = styled.p`
  font-size: 18px;
  white-space: nowrap;
  line-height: 22px;
  color: #828282;
  @media (max-width: 574.98px){
    white-space: normal;
  }
`;