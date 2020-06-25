import React from "react";
import { Link } from "react-router-dom";

export function Main() {
  return (
    <div className="App">
      <header className="appHeader">
        <div>비던열자</div>
        <div>조합정보/</div>
        <Link to="writing">
          <div>글쓰기/</div>
        </Link>
        <div>로그인/</div>
        <Link to="settings">
          <div>설정</div>
        </Link>
      </header>
      <div className="appBody">
        <div>
          <header className="contentsHeader">필터링 및 정렬</header>
          <div className="contents">내용</div>
        </div>
      </div>
      <footer>만든이</footer>
    </div>
  );
}

export default Main;
