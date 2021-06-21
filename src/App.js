import styled from "styled-components";

import Serche from "./components/serche"
import Weather from "./components/weather"

const Container = styled.div `
  display:flex;
  flex-direction:column;
`;

function App() {
  return (
    <Container>
      Hello
      <Serche />
      <Weather />
    </Container>
  );
}

export default App;
