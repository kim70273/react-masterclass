import { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  // 타입스크립트에게 event가 어떤 이벤트인지 설명을 해줘야한다.
  // 그리고 <> 안에 어떤 종류의 element가 onChange 이벤트를 발생시키는지 특정할 수 있다.
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    // 리액트js의 타입스크립트 사람들은 currentTarget 사용을 택했다.
    // 평소 우리가 알고있는 target과 같음<div className=""></div>
    console.log(event.currentTarget.value);

    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };

  // 어딴관련이벤트인지 작성하고, 어떤 element에 의해서 발생되는지 작성하는 것이 일종의 패턴이다.
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`hello ${value}`);
    setValue("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="username"
        />
        <button>Log In</button>
      </form>
    </div>
  );
}

export default App;
