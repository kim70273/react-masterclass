import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

interface RouterState {
  state: {
    name: string;
  };
}

const Coin = () => {
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const { coinId } = useParams<{ coinId: string }>();

  // Link의 state로 보내준 정보를 받는 hook.
  //   const location = useLocation();
  //   console.log(location);

  // 받은 state를 이용해서 사용하기때문에
  // API가 줄때까지 기다릴 필요가 없어진다.

  // 하지만 이것의 정보를 받으려면 Home화면이 먼저 열려야한다.
  const { state } = useLocation() as RouterState;

  // Link에 state를 통해 정보를 보내고 얻는 부분 하면 됨.
  return (
    <Container>
      <Header>{state?.name || "Loading.."}</Header>
      {loading ? <Loader>로딩 중...</Loader> : null}
    </Container>
  );
};

export default Coin;
