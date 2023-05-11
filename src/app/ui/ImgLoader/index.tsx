import { FC } from 'react'
import footer_soc_btn_1 from './assets/soc-1.svg';
import footer_soc_btn_2 from './assets/soc-2.svg';
import footer_soc_btn_3 from './assets/soc-3.svg';
import footer_soc_btn_4 from './assets/soc-4.svg';
import hero_768 from './assets/hero-768.webp';
import hero_1445 from './assets/hero-1445.webp';
import project_1 from "./assets/portfolio-pic-1.webp";
import project_2 from "./assets/portfolio-pic-2.webp";
import project_3 from "./assets/portfolio-pic-3.webp";
import skill_1 from './assets/icon-1.svg';
import skill_2 from './assets/icon-2.svg';
import skill_3 from './assets/icon-3.svg';
import skill_4 from './assets/icon-4.svg';
import rate_1 from './assets/rate-1.svg';
import rate_2 from './assets/rate-2.svg';

type TMenuImg = 
  "footer_soc_btn_1" | 
  "footer_soc_btn_2" | 
  "footer_soc_btn_3" | 
  "footer_soc_btn_4" |
  "hero_768" |
  "hero_1445" |
  "project_1" |
  "project_2" |
  "project_3" |
  "skill_1" |
  "skill_2" |
  "skill_3" |
  "skill_4" |
  "rate_1" |
  "rate_2"

interface IProps {
  img: TMenuImg
}

const ImgLoader:FC<IProps> = (props) => {
  const { img } = props

  const images = {
    footer_soc_btn_1: footer_soc_btn_1,
    footer_soc_btn_2: footer_soc_btn_2,
    footer_soc_btn_3: footer_soc_btn_3,
    footer_soc_btn_4: footer_soc_btn_4,
    hero_768: hero_768,
    hero_1445: hero_1445,
    project_1: project_1,
    project_2: project_2,
    project_3: project_3,
    skill_1: skill_1,
    skill_2: skill_2,
    skill_3: skill_3,
    skill_4: skill_4,
    rate_1: rate_1,
    rate_2: rate_2
  }

  return <img src={images[img]}/>
}

export default ImgLoader;