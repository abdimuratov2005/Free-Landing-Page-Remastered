import { NavbarList, NavbarLink  } from '../styles/styles'

interface INavbarItems {
  id: number;
  value: string
}

const navbarItems:INavbarItems[] = [
  { id: 1, value: 'Home' },
  { id: 2, value: 'About me' },
  { id: 3, value: 'Skills' },
  { id: 4, value: 'Portfolio' },
  { id: 5, value: 'Contacts' }
]

const Navbar = () => {

  return (
    <>
      <NavbarList>
        { navbarItems.map((nav_item: INavbarItems) => (
          <li className="nav_item" key={nav_item.id}>
            <NavbarLink href='#'>
              {nav_item.value}
            </NavbarLink>
         </li>
        ))}
      </NavbarList>
    </>
  );
};

export default Navbar;
