import styled from 'styled-components';

export default function Main() {
  let greeting = process.env.TEST_VAR || 'Hello World from component';
  return <Greeting>{greeting}</Greeting>;
}

const Greeting = styled.h1`
  font-size: 22px;
  font-weight: 700;
`;
