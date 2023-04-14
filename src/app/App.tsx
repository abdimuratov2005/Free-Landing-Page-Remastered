import './style/global.scss';
import { Wrapper, Line } from "./style/style";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from '../components/About';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';

const App = () => {
  return(
    <>
      <Wrapper>
          <Header />
          <Line />
          <main className="main">
            <Hero />
          </main>
        </Wrapper>
        <About />
        <Wrapper>
          <Skills />
        </Wrapper>
        <Portfolio/>
        <Wrapper>
          <Footer />
        </Wrapper>
    </>
  )
}

export default App;