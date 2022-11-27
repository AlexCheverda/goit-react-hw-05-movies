import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const Container = styled.div`
  padding: 0px 20px;
  margin: 0 auto;
  min-height: 100vh;
  background: linear-gradient(
    65deg,
    #bebf00 0%,
    #ebe212 29%,
    #337eef 56%,
    #05a3ff 74%,
    #090093 100%
  );
`;
export const Header = styled.header`
  padding: 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 13px 3px rgba(0, 0, 0, 0.78);
`;

export const Nav = styled.nav`
  display: flex;
  column-gap: 20px;
`;

export const Link = styled(NavLink)`
  padding: 8px 26px;
  border-radius: 4px;
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