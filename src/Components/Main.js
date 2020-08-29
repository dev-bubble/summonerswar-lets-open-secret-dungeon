import React from "react";
import { Header, HeaderInfo } from "./Common/Header";

export function Main() {
  const MainHeaderInfos = [
    new HeaderInfo({ name: "목록", path: "/", letters: 2, active: true }),
    new HeaderInfo({
      name: "글작성",
      path: "/writing",
      letters: 3,
      active: false,
    }),
    new HeaderInfo({
      name: "조합 정보",
      path: "/combination",
      letters: 4,
      active: false,
    }),
    new HeaderInfo({
      name: "설정",
      path: "/settings",
      letters: 2,
      active: false,
    }),
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
