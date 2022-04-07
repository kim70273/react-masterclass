import React, { useState } from "react";
import styled from "styled-components";

// 타입스크립트가 봤을때 Container은 div일 뿐이므로
// props를 받을 수 있게 interface를 이용해서 알려줘야 한다.
interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

// interface는 객체의 모양을 타입스크립트에게 설명해준다.
// 어떤 형태의 객체를 받아야하는지 코드가 실행되기전에 알려준다.
// props 중에 ? 가 적혀있는 것은 optional으로 필수로 들어오는 것이 아니다.
interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

const Circle = ({
  bgColor,
  borderColor,
  text = "default text",
}: CircleProps) => {
  //<..>안에 상태가 가질수 있는 값이 어떤 타입인지 작성해준다.
  const [value, setValue] = useState<number | string>(0);
  setValue(2);
  setValue("hello");

  // ??를 톨해서 만약 borderColor가 undefined 상태라면 bgColor 값이 들어가게된다. (디폴트값을 주는 또 하나의 방법)
  // 이렇게 사용할 수 있는 이유는 bgColor는 required로 항상 string이기 때문이다.
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
};

export default Circle;
