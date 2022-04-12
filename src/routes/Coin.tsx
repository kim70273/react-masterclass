import React from "react";
import { useParams } from "react-router-dom";

const Coin = () => {
  // url의 파라미터 부분을 잡아내고 싶을 때, 사용하는 Hook
  // react-router-dom에 포함된 Hook이다.
  const params = useParams();
  // console.log로 확인해보면 ulr의 파라미터를 우리에게 줄것이다.
  console.log(params);

  // interface를 만들어서 <>안에 넣고 타입을 알려줘도 되고,
  // react-router-dom v6아상에서는 <>를 따로 작성하지 않아도 된다. (useParams를 쓰는 순간 타입이
  // string or undefined로 된다.)
  const { coinId } = useParams<{ coinId: string }>();
  return <h1>`Coin: {coinId}`</h1>;
};

export default Coin;
