import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";

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

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 10px;

  a {
    padding: 20px;
    transition: color 0.2s ease-in;
    display: flex;
    align-items: center;
  }

  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const Coins = () => {
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);
  // react query를 이용해서 아래의 긴 코드를 한줄로 만들었다.
  // useQuery의 첫번째 파라미터로는 키가 필요하고 두번째 파라미터로는 fetcher 함수가 필요하다.

  // 리액트 쿼리가 데이터를 캐시에 저장해두기때문에 코인을 클릭하고 뒤로가기를 클릭시에 로딩이 표사되지 않게 된다.

  //   const [coins, setCoins] = useState<CoinInterface[]>([]);
  //   const [loading, setLoading] = useState(true);
  //   useEffect(() => {
  //     (async () => {
  //       const response = await fetch("https://api.coinpaprika.com/v1/coins");
  //       const json = await response.json();
  //       setCoins(json.slice(0, 100));
  //       setLoading(false);
  //     })();
  //   }, []);

  return (
    <Container>
      <Header>
        <Title>코인</Title>
      </Header>
      {isLoading ? (
        <Loader>로딩 중...</Loader>
      ) : (
        <CoinsList>
          {data?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              {/*원한다면 link를 통해서 다른화면에 정보를 보내줄 수도 있다. */}
              <Link to={`/${coin.id}`} state={{ name: coin.name }}>
                <Img
                  src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png
                `}
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
};

export default Coins;
