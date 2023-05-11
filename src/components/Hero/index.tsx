import { 
    HeroWrapper,
    HeroTitle,
    HeroTitleName, 
    HeroTitleSkill,
    HeroImg
} from './styles/styles';
import Language from './components/Language';
import ImgLoader from '../../app/ui/ImgLoader';
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
                {
                    window.innerWidth <= 768
                        ?
                    <ImgLoader img='hero_768'/>
                        :
                    <ImgLoader img='hero_1445'/>
                }
                </HeroImg>
            </HeroWrapper>
        </>
    )
}

export default Hero;