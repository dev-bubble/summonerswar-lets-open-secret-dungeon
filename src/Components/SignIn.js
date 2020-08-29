import React from "react";
import { Header, HeaderInfo } from "./Common/Header";

export function SignIn() {
  const SignInHeaderInfos = [
    new HeaderInfo({
      name: "로그인",
      path: "/signin",
      letters: 3,
      active: true,
    }),
    new HeaderInfo({ name: "목록", path: "/", letters: 2, active: false }),
    new HeaderInfo({
      name: "회원 가입",
      path: "/writing",
      letters: 4,
      active: false,
    }),
  ];
  return (
    <div className="App">
      <Header info={SignInHeaderInfos} />
      <header className="settingHeader">
        <div>로그인</div>
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

export default SignIn;
