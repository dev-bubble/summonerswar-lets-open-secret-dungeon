import React from "react";
import { Link } from "react-router-dom";

export function Writing() {
  return (
    <div className="App">
      <header className="settingHeader">
        <Link to="/">
          <div>Back/</div>
        </Link>
        <div>글 작성</div>
      </header>
      <body className="settingBody">
        <div>
          <body className="contents">작성 내용</body>
        </div>
      </body>
      <footer>만든이</footer>
    </div>
  );
}

export default Writing;
