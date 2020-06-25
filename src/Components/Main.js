import React from "react";
import { Link } from "react-router-dom";

export function Main() {
  return (
    <div className="App">
      <header className="appHeader">
        <div>로고/</div>
        <div>조합정보/</div>
        <Link to="writing">
          <div>글쓰기/</div>
        </Link>
        <div>로그인/</div>
        <Link to="settings">
          <div>설정</div>
        </Link>
      </header>
      <body className="appBody">
        <div>
          <header className="contentsHeader">필터링 및 정렬</header>
          <body className="contents">내용</body>
        </div>
      </body>
      <footer>만든이</footer>
    </div>
  );
}

export default Main;
