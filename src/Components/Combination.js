import React from "react";
import { Header, HeaderInfo } from "./Common/Header";

export function Combination() {
  const WritingHeaderInfos = [
    new HeaderInfo({
      name: "조합 정보",
      path: "/combination",
      letters: 4,
      active: false,
    }),
    new HeaderInfo({ name: "목록", path: "/", letters: 2, active: true }),
    new HeaderInfo({
      name: "로그인",
      path: "/signin",
      letters: 3,
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
    <div className="App">
      <Header info={WritingHeaderInfos} />
      <header className="settingHeader">
        <div>조합 정보</div>
      </header>
      <div className="settingBody">
        <div>
          <div className="contents">작성 내용</div>
        </div>
      </div>
      <footer>만든이</footer>
    </div>
  );
}

export default Combination;
