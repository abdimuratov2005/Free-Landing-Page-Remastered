import {
  Program,
  SkillsPrograms,
  SkillsProgramsName,
  SkillsSect,
  SkillsSubTitle,
  SkillsTitle,
} from "./styles/styles";
import skillsPrograms, { IPrograms } from "./components/Programs";
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
                  {program.iconSrc}
                  <SkillsProgramsName>{program.name}</SkillsProgramsName>
                  {program.rateSrc}
              </Program>
            ))
          }
        </SkillsPrograms>
      </SkillsSect>
    </>
  );
};

export default Skills;
