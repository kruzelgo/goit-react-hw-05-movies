// .movieListSection {
//   padding: 20px;
//   background-color: #f8f9fa;
//   border-radius: 8px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// }

// .movieListTitle {
//   font-size: 24px;
//   font-weight: bold;
//   margin-bottom: 20px;
//   text-align: center;
//   color: #333;
// }

// .movieList {
//   list-style-type: none;
//   padding: 0;
// }

// .movieListItem {
//   margin-bottom: 10px;
// }

// .movieListLink {
//   text-decoration: none;
//   color: #007bff;
//   font-size: 18px;
// }

// .movieListLink:hover {
//   text-decoration: underline;
// }
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
`;

export const List = styled.ul`
  list-style: disc;
  color: #0d57aa;
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 20px;
  color: #0d57aa;
  transition: color 0.2s ease-in-out, border-bottom 0.2s ease-in-out;

  &:hover,
  &:focus {
    color: #1c85ff;
    border-bottom: 2px solid #1c85ff;
  }
`;
