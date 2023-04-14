import styled from "styled-components";

export const HeroWrapper = styled.div`
  padding: 20px 30px;
  max-width: 1022px;
  margin: 0 auto;
  @media (max-width: 1110px){
    padding: 15px 0;
  }
`;
export const HeroTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const HeroTitleName = styled.h1`
  font-size: 47.34px;
  @media (max-width: 574.98px){
    font-size: 40px;
  }
`;
export const HeroTitleSkill = styled.h4`
  position: relative;
  z-index: -1;
  font-size: 18px;
  color: #070707;
  font-weight: 400;
  margin: 35px 0 0;
  @media (max-width: 574.98px){
    font-size: 16px;
    margin: 15px 0 0;
  }
`;
export const HeroBurger = styled.img`
  width: 60px;
  display: none;
  height: 60px;
  cursor: pointer;
`;
export const HeroLangChange = styled.div`
  rotate: -90deg;
  display: inline-flex;
  justify-content: space-between;
  position: relative;
  left: 20px;
`;
export const HeroLangChangeLine = styled.div`
  height: 15px;
  margin: 0 5px;
  border-left: 2.5px solid #070707;
`;
export const HeroImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 10px 0 0;
  & > img {
    @media (max-width: 991.98px) {
      width: 100%;
    }
  }
`;
export const HeroImg768 = styled.img`
  display: none;
  @media (max-width: 767.98px) {
    display: block;
  }
`;
export const HeroImg1440 = styled.img`
  display: none;
  @media (min-width: 767.98px) {
    display: block;
  }
`;
