import React from "react";
import styled from "styled-components";

// 타입스크립트가 봤을때 Container은 div일 뿐이므로
// props를 받을 수 있게 interface를 이용해서 알려줘야 한다.
interface ContainerProps {
  bgColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
`;

// interface는 객체의 모양을 타입스크립트에게 설명해준다.
// 어떤 형태의 객체를 받아야하는지 코드가 실행되기전에 알려준다.
interface CircleProps {
  bgColor: string;
}

const Circle = ({ bgColor }: CircleProps) => {
  return <Container bgColor={bgColor} />;
};

export default Circle;
