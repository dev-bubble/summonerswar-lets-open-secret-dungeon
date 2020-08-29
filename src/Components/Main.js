import React from "react";
import { Header, HeaderInfo } from "./Common/Header";

export function Main() {
  const MainHeaderInfos = [
    new HeaderInfo("목록", "/", 2, true),
    // new HeaderInfo("조합 정보", "/combination", 4, false),
    new HeaderInfo("글작성", "/writing", 3, false),
    new HeaderInfo("설정", "/settings", 2, false),
  ];
  return (
    <>
      <div className="App">
        <Header info={MainHeaderInfos} />
        <div className="appBody">
          <div className="notice">
            [공지] 조작 된 내용이 있을 수 있으나, 이에 대한 책임은 지지 않음을
            밝힙니다.
          </div>
        </div>
        <footer>만든이</footer>
      </div>
    </>
  );
}

export default Main;
