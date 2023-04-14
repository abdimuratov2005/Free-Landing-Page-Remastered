import { NavbarList, NavbarLink  } from '../styles/styles'

const Navbar = () => {
  return (
    <>
      <NavbarList>
        <li className="nav_item">
          <NavbarLink>Home</NavbarLink>
        </li>
        <li className="nav_item">
          <NavbarLink>About me</NavbarLink>
        </li>
        <li className="nav_item">
          <NavbarLink>Skills</NavbarLink>
        </li>
        <li className="nav_item">
          <NavbarLink>Portfolio</NavbarLink>
        </li>
        <li className="nav_item">
          <NavbarLink>Contacts</NavbarLink>
        </li>
      </NavbarList>
    </>
  );
};

export default Navbar;
