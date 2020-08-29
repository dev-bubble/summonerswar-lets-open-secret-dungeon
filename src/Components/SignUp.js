import React from "react";
import { Header, HeaderInfo } from "./Common/Header";

export function SignUp() {
  const WritingHeaderInfos = [
    // new HeaderInfo("회원 가입", "/writing", 4, true),
    new HeaderInfo("목록", "/", 2, false),
    // new HeaderInfo("로그인", "/signin", 3, false),
    new HeaderInfo("설정", "/settings", 2, false),
  ];
  return (
    <div className="App">
      <Header info={WritingHeaderInfos} />
      <header className="settingHeader">
        <div>회원 가입</div>
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

export default SignUp;
