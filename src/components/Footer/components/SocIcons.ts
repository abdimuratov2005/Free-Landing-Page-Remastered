import ImgLoader from '../../../app/ui/ImgLoader';

export interface ISocIcons {
    id: number
    src: any
}

const footerIcons: ISocIcons[] = [
    { id: 1, src: ImgLoader({img: "footer_soc_btn_1"}) },
    { id: 2, src: ImgLoader({img: "footer_soc_btn_2"}) },
    { id: 3, src: ImgLoader({img: "footer_soc_btn_3"}) },
    { id: 4, src: ImgLoader({img: "footer_soc_btn_4"}) },
];


export default footerIcons;