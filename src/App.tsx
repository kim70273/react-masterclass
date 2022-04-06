import styled, { keyframes } from "styled-components";

// App 컴포넌트가 ThemeProvider안에 있으므로
// props로 넘겨받은 theme을 이용할 수 있다.
const Title = styled.div`
  color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello</Title>
    </Wrapper>
  );
}

export default App;
