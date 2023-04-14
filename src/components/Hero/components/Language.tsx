import styled from 'styled-components';

const LangChange = styled.div `
    rotate: 90deg;
    display: none;
    justify-content: space-between;
    position: relative;
    left: 70%;
    top: 100px;
    font-size: 34px;
`
const LangChangeLine = styled.div `
    height: 40px;
    margin: 0 5px;
    border-left: 3px solid #070707;
`
const LangChangeLink = styled.a `
    text-decoration: none;
    font-weight: 600;
    color: #828282;
    &:hover {
        color: #000;
        text-decoration: underline;
    }
`

const Language = () => {
  return (
    <>
      <LangChange>
        <LangChangeLink>RU</LangChangeLink>
        <LangChangeLine />
        <LangChangeLink>ENG</LangChangeLink>
      </LangChange>
    </>
  );
};

export default Language;
