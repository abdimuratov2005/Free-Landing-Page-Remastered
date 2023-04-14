import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 10px 30px;
  max-width: 945px;
  margin: 0 auto;
  @media (max-width: 1445px) {
    padding: 0 30px;
    max-width: 1300px;
  }
  @media (max-width: 992px) {
    max-width: 960px;
  }
  @media (max-width: 767.98px) {
    max-width: 720px;
  }
  @media (max-width: 574.98px) {
    padding: 10px 26px;
    max-width: 540px;
  }
`;

export const Line = styled.hr`
  @media (max-width: 767.98px) {
    display: none;
  }
`;
