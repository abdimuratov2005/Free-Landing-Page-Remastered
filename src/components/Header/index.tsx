import Navbar from './components/Navbar';
import Language from './components/Language';
import { HeaderSect, HeaderContainer } from './styles/styles';

const Header = () => {
    return (
        <>
            <HeaderSect>
                <HeaderContainer>
                    <div className="navbar_body">
                        <nav className="navbar">
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