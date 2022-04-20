// react query를 위해서 fetcher 함수를 만들어야함.
// 이 함수는 Promise를 리턴해야한다. (json data)
export function fetchCoins() {
  return fetch("https://api.coinpaprika.com/v1/coins").then((response) =>
    response.json()
  );
}
