import React from "react";
import { Header, HeaderInfo } from "./Common/Header";

export function Setting() {
  const SettingHeaderInfos = [
    new HeaderInfo("설정", "/settings", 2, true),
    new HeaderInfo("목록", "/", 2, false),
    // new HeaderInfo("회원 가입", "/signup", 4, false),
    // new HeaderInfo("로그인", "/signin", 3, false),
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
import { Link } from "react-router-dom";

export function Setting() {
  return (
    <div className="App">
      <header className="settingHeader">
        <Link to="/">
          <div>Back/</div>
        </Link>
        <div>설정</div>
      </header>
      <body className="settingBody">
        <div>
          <header className="contentsHeader">
            <div>Back</div>
            <div>세팅 카테고리</div>
          </header>
          <body className="contents">세팅 내용</body>
        </div>
      </body>
      <footer>만든이</footer>
    </div>
  );
}

export default Setting;
