import {
  Program,
  SkillsPrograms,
  SkillsProgramsIcon,
  SkillsProgramsName,
  SkillsProgramsRate,
  SkillsSect,
  SkillsSubTitle,
  SkillsTitle,
} from "./styles/styles";
import skillsPrograms from "./components/Programs";
import { ProgramsType } from "./types/ProgramsType";
const Skills = () => {
  return (
    <>
      <SkillsSect id="#skills">
        <SkillsTitle>Skills</SkillsTitle>
        <SkillsSubTitle>I work in such programs as</SkillsSubTitle>
        <SkillsPrograms>
          {
            skillsPrograms.map((program: ProgramsType) => (
                <Program key={program.id}>
                    <SkillsProgramsIcon src={program.iconSrc} alt="skill-1" />
                    <SkillsProgramsName>{program.name}</SkillsProgramsName>
                    <SkillsProgramsRate src={program.rateSrc} alt="rate-1" />
                </Program>
            ))
          }
        </SkillsPrograms>
      </SkillsSect>
    </>
  );
};

export default Skills;
