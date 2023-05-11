import projectList, { IProjectsList } from "./components/ProjectList";
import { PortfolioSect, PortfolioTitle, PortfolioName, PortfolioList } from "./styles/styles";

const Portfolio = () => {
  return (
    <>
      <PortfolioSect>
        <PortfolioTitle>
          Portfolio
        </PortfolioTitle>
        <PortfolioList>
          {
            projectList.map((project: IProjectsList) => (
              <div key={project.id}>
                { project.img }
                <PortfolioName>
                  { project.name }
                </PortfolioName>
              </div>
            ))
          }
        </PortfolioList>
      </PortfolioSect>
    </>
  );
};

export default Portfolio;
