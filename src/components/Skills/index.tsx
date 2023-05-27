import {
  Program,
  SkillsPrograms,
  SkillsProgramsName,
  SkillsSect,
  SkillsSubTitle,
  SkillsTitle,
} from "./styles/styles";
import skillsPrograms, { IPrograms } from "./components/Programs";
import ImgLoader from "../../app/ui/ImgLoader";
const Skills = () => {
  return (
    <>
      <SkillsSect id="#skills">
        <SkillsTitle>Skills</SkillsTitle>
        <SkillsSubTitle>I work in such programs as</SkillsSubTitle>
        <SkillsPrograms>
          {
            skillsPrograms.map((program: IPrograms) => (
              <Program key={program.id}>
                  <ImgLoader img={program.iconSrc}/>
                  <SkillsProgramsName>{program.name}</SkillsProgramsName>
                  <ImgLoader img={program.rateSrc}/>
              </Program>
            ))
          }
        </SkillsPrograms>
      </SkillsSect>
    </>
  );
};

export default Skills;
