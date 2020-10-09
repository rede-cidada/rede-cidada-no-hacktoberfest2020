import styled from 'styled-components/macro';

import { colors } from '../../assets/styles/styles';
import { FlexBox } from '../../shared-ui/Containers';

export const HeaderSection = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 2rem;
  background: ${colors?.primaryDark};

  height: auto;
  z-index: 0;

  ${({ menuVisibility }) =>
    menuVisibility &&
    ` 
      height: 100%;
      z-index: 1;
    `}
`;

export const Logo = styled.img`
  width: 100%;
  max-width: 13rem;
`;

export const MenuToggle = styled(FlexBox)`
  width: 40px;

  @media (min-width: 40rem) {
    display: none;
  }
`;

const ToggleLine = styled.div`
  height: 0.3rem;
  width: 100%;
  margin: 0.3rem auto;
  transition-duration: 0.3s;
  background-color: ${colors.neutral};
`;

export const ToggleOne = styled(ToggleLine)`
  ${({ menuVisibility }) =>
    menuVisibility && `transform: rotate(45deg) translate(7px, 7px)`};
`;

export const ToggleTwo = styled(ToggleLine)`
  opacity: 1;

  ${({ menuVisibility }) => menuVisibility && `opacity: 0`};
`;

export const ToggleThree = styled(ToggleLine)`
  ${({ menuVisibility }) =>
    menuVisibility && `transform: rotate(-45deg) translate(5px, -7px)`};
`;

export const Navigation = styled.nav`
  display: none;

  ${({ menuVisibility }) =>
    menuVisibility &&
    `
      display: flex; 
      position: absolute;
      bottom: 25vh;
      width: 100%;
      left: 0;
      height: 50%;
      align-items: center;
      justify-content: center;
    `}

  @media (min-width: 40rem) {
    display: flex;
  }
`;

export const List = styled.ul`
  padding: 0;
  list-style: none;

  display: flex;
  justify-content: space-between;

  ${({ menuVisibility }) =>
    menuVisibility &&
    `
      flex-direction: column;
      Justify-conten: center;
    `}
`;

export const ListItem = styled.li`
  margin-bottom: 1rem;
`;

export const ListItemLink = styled.a`
  font-size: 1.5rem;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  color: white;
  display: inline-block;
  width: inherit;
  font-weight: 900;
  line-height: 1.5;

  margin-left: 3rem;
  padding: 0.3rem 0.2rem 0.3rem;

  ${({ menuVisibility }) =>
    menuVisibility &&
    `
      margin-left: 0; 
      width: 100%; 
      margin-bottom: 1rem
    `}

  ${({ activeSection }) =>
    activeSection &&
    `
      box-shadow: ${colors.neutral} 0 -.1rem 0 0 inset;
      color: ${colors.primaryHighLighter};
    `};
`;
