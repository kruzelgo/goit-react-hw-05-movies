import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledSection = styled.section`
  padding-right: 50px;
  padding-left: 50px;
`;

export const SectionTitle = styled.h2`
  margin-top: 30px;
  margin-bottom: 30px;
  padding-left: 5px;
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  font-variant: small-caps;
`;

export const List = styled.ul`
  list-style: none;
  color: #0d57aa;
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 1px;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 20px;

  color: hsl(190, 83%, 30%);
  transition: color 0.2s ease-in-out, border-bottom 0.2s ease-in-out;
  font-variant: small-caps;

  &:hover,
  &:focus {
    color: hsl(89, 82%, 46%);
    border-bottom: 2px dotted hsl(89, 82%, 46%);
  }
`;
