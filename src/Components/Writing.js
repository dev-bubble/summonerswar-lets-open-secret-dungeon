import React from "react";
import { Link } from "react-router-dom";
import { Header, HeaderInfo } from "./Common/Header";
import { SelectSD } from "./Common/SelectSD";

export function Writing() {
  const WritingHeaderInfos = [
    new HeaderInfo({
      name: "글작성",
      path: "/writing",
      letters: 3,
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
      <Header info={WritingHeaderInfos} />
      <header className="settingHeader">
        <div>글 작성</div>
      </header>
      <div className="settingBody">
        <div>
          <SelectSD />
          <div className="contents">
            <Link to="/">
              <div className="buttons">작성</div>
            </Link>
          </div>
        </div>
      </div>
      <footer>만든이</footer>
    </div>
  );
}

export default Writing;
