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
import styled, { keyframes } from 'styled-components';

export const StyledHeader = styled.header`
  padding: 20px 30px;
  text-align: center;
  box-shadow: 0px 4px 4px #d3d3d3;
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  font-size: 24px;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  color: #000000;

  &:not(:last-child) {
    margin-right: 40px;
  }

  &.active,
  &:hover,
  &:focus {
    color: #1c85ff;
    text-decoration: underline;
  }
`;

const bounce = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`;

export const LoadingDots = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Dot = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: #dc143c;
  animation: ${bounce} 1s infinite ease-in-out;
  animation-delay: ${({ delay }) => delay};
`;
