import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const Container = styled.div`
  padding: 0px 30px;
  margin: 0 auto;
  min-height: 100vh;
  background: linear-gradient(
    65deg,
    #bebf00 0%,
    #ebe212 29%,
    #337eef 56%,
    #090093 74%,
    #05a3ff 100%
  );
`;
export const Header = styled.header`
  padding: 30px;
  border-radius: 5px;
  box-shadow: 2px 3px 15px 5px rgba(0, 0, 0, 0.74);
`;

export const Nav = styled.nav`
  display: flex;
  column-gap: 30px;
`;

export const Link = styled(NavLink)`
  padding: 8px 26px;
  border-radius: 15px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  width: fit-content;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.78);
  &.active {
    color: white;
    background-color: #05a3ff;
  }
  &:hover {
    background-color: #05a3ff;
    opacity: 0.4;
    color: white;
  }
`;