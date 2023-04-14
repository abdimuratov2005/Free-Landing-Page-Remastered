import {
  AboutSect,
  AboutContainer,
  AboutText,
  AboutTitle,
} from "./styles/styles";

const About = () => {
  return (
    <>
      <AboutSect>
        <AboutContainer>
          <AboutTitle>About me</AboutTitle>
          <AboutText>
            <br />
            Hi, I'm Denis – UX/UI designer from Minsk.
            <br />
            I'm interested in design and everything connected with it.
            <br />
            <br />
            I'm studying at courses "Web and mobile design
            <br />
            interfaces" in IT-Academy.
            <br />
            <br />
            Ready to implement excellent projects
            <br />
            with wonderful people.
          </AboutText>
        </AboutContainer>
      </AboutSect>
    </>
  );
};

export default About;