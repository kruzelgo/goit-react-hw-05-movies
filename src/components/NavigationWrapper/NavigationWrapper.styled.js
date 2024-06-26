/* .navigationWrapper {
  background-color: #ffffff;
  /* padding: 10px; */
// }

/* .navigationWrapper header {
  color: #fff;
  margin-bottom: 20px;
}

.navigationWrapper nav {
  display: flex;
  justify-content: center;
}

.navigationWrapper .navLink {
  color: #366478;
  padding: 20px;

  text-decoration: none;
  text-shadow: 1px 1px #558abb;
  font-variant: small-caps;
  transition: color 0.3s ease, text-shadow 0.3s ease, transform 0.3s ease;
}

.navigationWrapper .navLink:hover,
.navigationWrapper .navLink:focus {
  color: #558abb;
  text-shadow: 1px 1px #366478;
  transform: scale(1.05);
} */

// .header {
//   padding: 20px 30px 0px 30px;
//   text-align: center;
//   border-bottom: thick double #558abb;
// }
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  color: #fff;
  margin-bottom: 50px;
  padding: 20px 30px 0px 30px;
  text-align: center;
  border-bottom: thick double #558abb;
`;

export const StyledNavLink = styled(NavLink)`
  color: #366478;
  padding: 20px;
  margin-bottom: 50px;
  text-decoration: none;
  text-shadow: 1px 1px #558abb;
  font-variant: small-caps;
  transition: color 0.3s ease, text-shadow 0.3s ease, text-decoration 0.3s ease;

  &.active,
  &:hover,
  &:focus {
    color: hsl(89, 82%, 46%);
    text-shadow: 1px 1px #366478;
    text-decoration: underline;
    text-decoration-style: dotted;
  }
`;
