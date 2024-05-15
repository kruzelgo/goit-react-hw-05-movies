import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import-normalize; /* bring in normalize.css styles */

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
      font-variant: small-caps;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
    font-variant: small-caps;
  }

  h2 {
    font-size: 0.7em;
    font-variant: small-caps;
  }

  h3{
    font-size: 0.4em;
  }

  p {
    font-size: 0.5em;
  }

  ul,
  ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  button {
    cursor: pointer;
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
  }

  a {
    text-decoration: none;
  }
`;
