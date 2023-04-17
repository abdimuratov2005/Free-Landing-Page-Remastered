import { NavbarList, NavbarLink  } from '../styles/styles'

const Navbar = () => {
  return (
    <>
      <NavbarList>
        <li className="nav_item">
          <NavbarLink href='#home'>Home</NavbarLink>
        </li>
        <li className="nav_item">
          <NavbarLink href='#about'>About me</NavbarLink>
        </li>
        <li className="nav_item">
          <NavbarLink href='#skills'>Skills</NavbarLink>
        </li>
        <li className="nav_item">
          <NavbarLink href='#portfolio'>Portfolio</NavbarLink>
        </li>
        <li className="nav_item">
          <NavbarLink href='#contacts'>Contacts</NavbarLink>
        </li>
      </NavbarList>
    </>
  );
};

export default Navbar;
