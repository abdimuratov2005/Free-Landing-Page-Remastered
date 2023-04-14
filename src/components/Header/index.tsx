import Navbar from './components/Navbar';
import Language from './components/Language';
import { CloseBurgerIcon, HeaderSect, HeaderContainer } from './styles/styles';

const Header = () => {
    return (
        <>
            <HeaderSect>
                <HeaderContainer>
                    <div className="navbar_body">
                        <nav className="navbar">
                            <CloseBurgerIcon />
                            <Navbar />
                            <Language/>
                        </nav>
                    </div>
                </HeaderContainer>
            </HeaderSect>
        </>
    )
}

export default Header;