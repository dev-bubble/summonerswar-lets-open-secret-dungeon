import React from "react";
import { Header, HeaderInfo } from "./Common/Header";

export function SignUp() {
  const SignUpHeaderInfos = [
    new HeaderInfo({
      name: "회원 가입",
      path: "/writing",
      letters: 4,
      active: true,
    }),
    new HeaderInfo({ name: "목록", path: "/", letters: 2, active: false }),
    new HeaderInfo({
      name: "로그인",
      path: "/signin",
      letters: 3,
      active: false,
    }),
  ];
  return (
    <div className="App">
      <Header info={SignUpHeaderInfos} />
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
