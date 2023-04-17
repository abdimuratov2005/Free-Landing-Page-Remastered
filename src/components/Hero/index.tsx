import hero_768 from './assets/hero-768.webp';
import hero_1445 from './assets/hero-1445.webp';
import menu_icon from './assets/menu-icon.svg';
import { HeroWrapper,
    HeroTitle,
    HeroTitleName, 
    HeroTitleSkill,
    HeroBurger,
    HeroImg,
    HeroImg1440,
    HeroImg768
} from './styles/styles';
import Language from './components/Language';
const Hero = () => {
    return (
        <>
            <HeroWrapper>
                <HeroTitle>
                    <HeroTitleName>Denis<br />Novik</HeroTitleName>
                    <HeroTitleSkill>UX | UI designer<br />24 years old, Minsk</HeroTitleSkill>
                    <Language/>
                </HeroTitle>
                <HeroImg>
                    <HeroImg1440 loading='lazy' src={hero_1445} alt='Hero Image'/>
                    <HeroImg768 loading='lazy' src={hero_768} alt='Hero Image'/>
                </HeroImg>
            </HeroWrapper>
        </>
    )
}

export default Hero;