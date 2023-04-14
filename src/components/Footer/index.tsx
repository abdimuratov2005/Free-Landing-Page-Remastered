import footerIcons from "./components/SocIcons";
import { FooterContainer, FooterLikeMe, FooterLink, FooterLinkBtn, FooterSect, FooterSocItem, FooterSocLink, FooterSocList, FooterSubTitle, FooterTitle } from "./styles/styles";
import { SocIconsType } from "./types/SocIconsTypes";

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
                    { footerIcons.map((icon: SocIconsType) => (
                        <FooterSocItem key={icon.id}>
                            <FooterSocLink>
                                <img
                                    src={icon.src} 
                                    alt={icon.alt} 
                                />
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