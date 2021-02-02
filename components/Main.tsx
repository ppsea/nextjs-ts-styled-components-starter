import styled from 'styled-components';

export default function Main() {
  let greeting = process.env.TEST_VAR || 'Hello World from component';
  return <Greeting>{greeting}</Greeting>;
}

const Greeting = styled.h1`
  font-size: 22px;
  font-weight: 700;
  ${props => props.theme.medias.mobile} {
    color: red;
  }
  ${props => props.theme.medias.pad} {
    color: green;
  }
  ${props => props.theme.medias.desktop} {
    color: blue;
  }
`;
