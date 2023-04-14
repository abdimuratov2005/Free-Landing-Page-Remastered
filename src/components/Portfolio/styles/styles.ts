import styled from "styled-components";

export const PortfolioSect = styled.section`
  background: #f6f6f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  @media (max-width: 1445px){
    padding: 113px 30px 96px;
  }
  @media (max-width: 767.98px){
    padding: 50px 0px;
  }
`;
export const PortfolioTitle = styled.h1`
  margin: 0 0 47px;
  font-size: 34px;
  @media (max-width: 767.98px){
    margin: 0;
  }
`;
export const PortfolioImg = styled.img`
  margin: 40px 0;
  @media (max-width: 991.98px) {
    width: 100%;
  }
  @media (max-width:767.98px) {
    margin: 20px 0;
  }
`;
export const PortfolioName = styled.h3`
  text-decoration: underline;
  font-size: 18px;
`;
export const PortfolioList = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0;
`;
