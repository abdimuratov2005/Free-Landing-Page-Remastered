import ImgLoader from "../../app/ui/ImgLoader";
import footerIcons, { ISocIcons } from "./components/SocIcons";
import { FooterContainer, FooterLikeMe, FooterLink, FooterLinkBtn, FooterSect, FooterSocItem, FooterSocLink, FooterSocList, FooterSubTitle, FooterTitle } from "./styles/styles";

const Footer = () => {
    
    return(
        <>
           <FooterSect>
            <FooterContainer>
                <FooterTitle>
                    Contacts
                </FooterTitle>
                <FooterSubTitle>
                    Want to know more or just chat?<br />You are welcome!
                </FooterSubTitle>
                <FooterLink>
                    <FooterLinkBtn>
                        Send message
                    </FooterLinkBtn>
                </FooterLink>
                <FooterSocList>
                    { footerIcons.map((icon: ISocIcons) => (
                        <FooterSocItem key={icon.id}>
                            <FooterSocLink>
                                <ImgLoader img={icon.src}/>
                            </FooterSocLink>
                        </FooterSocItem>
                    ))}
                </FooterSocList>
                <FooterLikeMe>
                    Like me on<br/>LinkedIn, Instagram, Behance, Dribble
                </FooterLikeMe>
            </FooterContainer>
        </FooterSect> 
        </>
    )
}

export default Footer;