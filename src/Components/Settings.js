import React from "react";
import { Header, HeaderInfo } from "./Common/Header";
import { Link } from "react-router-dom";

export function Setting() {
  const SettingHeaderInfos = [
    new HeaderInfo({
      name: "설정",
      path: "/settings",
      letters: 2,
      active: true,
    }),
    new HeaderInfo({ name: "목록", path: "/", letters: 2, active: false }),
    new HeaderInfo({
      name: "회원 가입",
      path: "/writing",
      letters: 4,
      active: false,
    }),
    new HeaderInfo({
      name: "로그인",
      path: "/signin",
      letters: 3,
      active: false,
    }),
  ];
  return (
    <div className="App">
      <Header info={SettingHeaderInfos} />
      <header className="settingHeader">
        <div>설정</div>
      </header>
      <div className="settingBody">
        <div>
          <header className="contentsHeader">
            <div>세팅 카테고리</div>
          </header>
          <div className="contents">세팅 내용</div>
        </div>
      </div>
      <footer>만든이</footer>
    </div>
  );
}

export default Setting;
