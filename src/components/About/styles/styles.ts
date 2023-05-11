import styled from 'styled-components';

export const AboutSect = styled.section `
  background-color: #f6f6f6;
`
export const AboutContainer = styled.div `
  padding: 120px 0 107px;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  @media (max-width: 767.98px){
    padding: 50px 0;
  }
`
export const AboutTitle = styled.h1 `
  font-size: 34px;
  font-weight: 800;
`
export const AboutText = styled.p `
  font-size: 18px;
  line-height: 21px;
`