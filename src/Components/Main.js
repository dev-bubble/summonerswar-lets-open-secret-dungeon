import React from "react";
import { Header, HeaderInfo } from "./Common/Header";

export function Main() {
  const MainHeaderInfos = [
    new HeaderInfo("목록", "/", 2, true),
    // new HeaderInfo("조합 정보", "/combination", 4, false),
    new HeaderInfo("글작성", "/writing", 3, false),
    new HeaderInfo("설정", "/settings", 2, false),
  ];
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
        <Header info={MainHeaderInfos} />
        <div className="appBody">
          <div className="notice">
            [공지] 조작 된 내용이 있을 수 있으나, 이에 대한 책임은 지지 않음을
            밝힙니다.
          </div>
        </div>
      </body>
      <footer>만든이</footer>
    </div>
  );
}

export default Main;
