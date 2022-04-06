import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
// import한 자바스크립트 라이브러리가 무엇인지 타립스크립트에게 설명해주기 위해
// npm i --save-dev @types/styled-components 를 설치 하였다.
import App from "./App";

// darkTheme과 lightTheme은 프로퍼티 이름들이 같아야 한다.
// 그렇게해야 다른 하나로 교체했을때 문제되지 않음.
const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};

const lightTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
