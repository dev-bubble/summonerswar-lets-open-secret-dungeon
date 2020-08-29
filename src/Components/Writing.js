import React from "react";
import { Link } from "react-router-dom";
import { Header, HeaderInfo } from "./Common/Header";
import { SelectSD } from "./Common/SelectSD";

export function Writing() {
  const WritingHeaderInfos = [
    new HeaderInfo("글작성", "/writing", 3, true),
    new HeaderInfo("목록", "/", 2, false),
    // new HeaderInfo("로그인", "/signin", 3, false),
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
    </div>
  );
}
export function Writing() {
  const WritingHeaderInfos = [
    new HeaderInfo("글작성", "/writing", 3, true),
    new HeaderInfo("목록", "/", 2, false),
    // new HeaderInfo("로그인", "/signin", 3, false),
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
