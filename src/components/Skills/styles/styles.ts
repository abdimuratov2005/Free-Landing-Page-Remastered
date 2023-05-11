import styled from "styled-components";

export const SkillsSect = styled.section`
  padding: 91px 0 110px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 767.98px) {
    padding: 50px 0;
  }
`;
export const SkillsTitle = styled.h1`
  margin-bottom: 69px;
  font-size: 34px;
  font-weight: 800;
  @media (max-width: 767.98px) {
    margin-bottom: 30px;
  }
`;
export const SkillsSubTitle = styled.h4`
  font-size: 18px;
  margin-bottom: 32px;
  @media (max-width: 767.98px) {
    margin-bottom: 15px;
  }
`;
export const SkillsPrograms = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-left: 80px;
  @media (max-width: 1023.98px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 1023.98px) {
    grid-template-columns: 100%;
  }
  @media (max-width: 330px) {
    margin-left: 60px;
    position: relative;
    left: 7px;
  }
`;
export const Program = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 90px 0 0;
  width: 166px;
  height: 206px;
  &:last-child {
    margin: 10px 70px 0 0;
  }
  @media (max-width: 991.98px) {
    flex: 0 0 30%;
    margin: 10px 70px 0 0;
  }
  & > img:first-child {
    margin-bottom: 24px;
    @media (max-width: 767.98px) {
      margin-bottom: 15px;
    }
  }
`;
export const SkillsProgramsName = styled.p`
  margin-bottom: 40.4px;
  color: #828282;
  font-size: 14px;
  @media (max-width: 1023.98px) {
    margin-bottom: 20px;
  }
`;
