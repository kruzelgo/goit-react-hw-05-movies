// .movieCardContainer {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 20px;
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   margin: 10px;
//   max-width: 400px;
// }

// .img {
//   width: 100%;
//   height: auto;
//   border-radius: 8px;
// }

// .movieInfo {
//   padding: 16px;
// }

// .movieName {
//   font-size: 1.5em;
//   margin: 10px 0;
// }

// .movieInfoText {
//   margin: 8px 0;
// }

// .movieInfoTextBold {
//   font-weight: bold;
// }

// .moreInfoWrapper {
//   margin-top: 20px;
// }

// .moreInfoHeader {
//   font-size: 1.2em;
//   margin-bottom: 10px;
// }

// .list {
//   list-style: none;
//   padding: 0;
// }

// .listItem {
//   margin: 5px 0;
// }

// .styledLink {
//   text-decoration: none;
//   color: #007bff;

import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieCardContainer = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 20px;
`;

export const Img = styled.img`
  height: 600px;
  width: 400px;
  border-radius: 30px;
`;

export const MovieInfo = styled.div`
  padding-top: 20px;
  max-width: 1100px;
`;

export const MovieName = styled.h2`
  margin-bottom: 20px;
`;

export const MovieInfoText = styled.p`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const MovieInfoTextBold = styled.span`
  display: block;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 500;
`;

export const MoreInfoWrapper = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;
`;

export const MoreInfoHeader = styled.h3`
  font-size: 25px;
  font-weight: 500;
`;

export const List = styled.ul`
  margin-top: 20px;
  display: flex;
  gap: 20px;
  font-size: 18px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  // font-size: 16px;
  // margin-right: 5px;
  // padding: 5px 15px;
  // border: 1px solid #0d57aa;
  // border-radius: 6px;
  // background-color: #b5d1f2;
  // box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  // transition: all 0.2s ease-in-out;
  // text-decoration: none;
  // color: #0d57aa;
  font-size: 1rem;
  padding: 10px 20px;
  margin: 0;
  background: hsl(190, 83%, 30%);
  color: hsl(190deg, 10%, 95%);
  font-variant: small-caps;
  box-shadow: 0 0px 0px hsla(190deg, 15%, 5%, 0.2);
  transform: translateY(0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;

  --dur: 0.15s;
  --delay: 0.15s;
  --radius: 16px;

  transition: border-top-left-radius var(--dur) var(--delay) ease-out,
    border-top-right-radius var(--dur) calc(var(--delay) * 2) ease-out,
    border-bottom-right-radius var(--dur) calc(var(--delay) * 3) ease-out,
    border-bottom-left-radius var(--dur) calc(var(--delay) * 4) ease-out,
    box-shadow calc(var(--dur) * 4) ease-out,
    transform calc(var(--dur) * 4) ease-out,
    background calc(var(--dur) * 4) steps(4, jump-end);

  &:hover,
  &:focus {
    box-shadow: 0 4px 8px hsla(190deg, 15%, 5%, 0.2);
    transform: translateY(-4px);
    background: hsl(89, 82%, 46%);
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
`;
