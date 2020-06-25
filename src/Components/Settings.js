import React from "react";
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
