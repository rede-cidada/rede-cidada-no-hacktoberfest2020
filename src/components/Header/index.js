import React, { useState } from 'react';

import logo from '../../assets/images/logo.svg';

import {
  HeaderSection,
  List,
  ListItem,
  ListItemLink,
  Logo,
  MenuToggle,
  Navigation,
  ToggleOne,
  ToggleTwo,
  ToggleThree,
} from './Header.styled';

const Header = () => {
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  const menu = ['home', 'participantes', 'contato'];

  return (
    <HeaderSection menuVisibility={menuVisibility}>
      <Logo src={logo} alt="Logo Hacktoberfest" />

      <MenuToggle
        rule="button"
        aria-label="Abrir menu"
        onClick={() => setMenuVisibility(!menuVisibility)}
      >
        <ToggleOne menuVisibility={menuVisibility} />
        <ToggleTwo menuVisibility={menuVisibility} />
        <ToggleThree menuVisibility={menuVisibility} />
      </MenuToggle>

      <Navigation menuVisibility={menuVisibility}>
        <List menuVisibility={menuVisibility}>
          {menu.map(item => (
            <ListItem key={item} onClick={() => setActiveSection(`#${item}`)}>
              <ListItemLink
                onClick={() => setMenuVisibility(false)}
                menuVisibility={menuVisibility}
                activeSection={activeSection === `#${item}`}
                rel="noopener noreferrer"
                href={`#${item}`}
              >
                {item}
              </ListItemLink>
            </ListItem>
          ))}
        </List>
      </Navigation>
    </HeaderSection>
  );
};

export default Header;
