import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 40px;
`;

export const Button = styled.button`
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
