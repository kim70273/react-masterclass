import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

// 위에 Box의 스타일을 그대로 가져와서 확장하게 됨.
const Circle = styled(Box)`
  border-radius: 50px;
`;

const Text = styled.span`
  color: white;
`;

// props에 as를 넘겨주면 스타일은 유지하면서 html 태그만을 바꿀 수도 있다.
const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

// attrs를 통해서 Input으로 전달될 속성 오브젝트를 담아 줄 수 있다
//  ex. 이렇게 하면 컴포넌트 하나하나에 required를 적어 주지 않아도 됨.
const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: tomato;
`;

function App() {
  return (
    <Father>
      <Box bgColor="teal" />
      <Circle bgColor="tomato" />
      <Btn>Login</Btn>
      <Btn as="a" href="/">
        Login
      </Btn>
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default App;
