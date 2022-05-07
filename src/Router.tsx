import { BrowserRouter, Route, Routes } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
//react-router-dom의 버전 6부터는 @types/react-router-dom를 설치 하지 않아도 됨.

interface IRouterProps {}

const Router = ({}: IRouterProps) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:coinId/*" element={<Coin />} />
        <Route path="/" element={<Coins />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
