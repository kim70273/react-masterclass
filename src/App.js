import styled, { keyframes } from "styled-components";

// const Father = styled.div`
//   display: flex;
// `;

// const Box = styled.div`
//   background-color: ${(props) => props.bgColor};
//   width: 100px;
//   height: 100px;
// `;

// // 위에 Box의 스타일을 그대로 가져와서 확장하게 됨.
// const Circle = styled(Box)`
//   border-radius: 50px;
// `;

// const Text = styled.span`
//   color: white;
// `;

// // props에 as를 넘겨주면 스타일은 유지하면서 html 태그만을 바꿀 수도 있다.
// const Btn = styled.button`
//   color: white;
//   background-color: tomato;
//   border: 0;
//   border-radius: 15px;
// `;

// // attrs를 통해서 Input으로 전달될 속성 오브젝트를 담아 줄 수 있다
// //  ex. 이렇게 하면 컴포넌트 하나하나에 required를 적어 주지 않아도 됨.
// const Input = styled.input.attrs({ required: true, minLength: 10 })`
//   background-color: tomato;
// `;

const Wrapper = styled.div`
  display: flex;
`;

//Box 컴포넌트안에 있는 html태그에 의존적이지 않게 하려면
// 또 다시 새로운 스타일 컴포넌트를 만들어서 추가하면 된다
const Emoji = styled.span`
  font-size: 36px;
`;

// styled component에서 애니메이션 효과를 주는 방법은
// helper function을 import 해주는것이다.
const animation = keyframes`
0% {
  transform: rotate(0deg);
  border-radius: 0px;
}
50% {
  border-radius: 100px;
}
100% {
  transform: rotate(360deg);
  border-radius: 0px;
}
`;
// Box 컴포넌트안에서 span등 다른 태그를 선택 할 수 있다.
// Box 컴포넌트안에 html태그에 의존적인 span을 지우고, 새로운 스타일 컴포넌트 Emoji를 만들어서 추가 하였음.
// 이제 이모지를 표시하는 태그가 as로 변경이 되어도 스타일이 작동을 하지않는것을 막을 수 있다.
const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: felx;
  justify-content: center;
  align-items: center;
  animation: ${animation} 1s linear infinite;
  ${Emoji} {
    &:hover {
      font-size: 98px;
    }
  }
`;

function App() {
  return (
    // <Father>
    //   <Box bgColor="teal" />
    //   <Circle bgColor="tomato" />
    //   <Btn>Login</Btn>
    //   <Btn as="a" href="/">
    //     Login
    //   </Btn>
    //   <Input />
    //   <Input />
    //   <Input />
    //   <Input />
    // </Father>
    <Wrapper>
      <Box>
        <Emoji>😀</Emoji>
      </Box>
      <Emoji>🎃</Emoji>
    </Wrapper>
  );
}

export default App;
