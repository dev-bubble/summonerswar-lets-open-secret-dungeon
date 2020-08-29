import React from "react";
import { Link } from "react-router-dom";

export class HeaderInfo {
  constructor({ name, path, letters, active }) {
    this.name = name;
    this.path = path;
    this.letter = letters;
    this.isActive = active;
  }
}

export function Header({ info }) {
  return (
    <header className="appHeader">
      <Link to="/">{/* <div className="logo">비던 열자</div> */}</Link>
      <div className="headerWrapper">
        <div className="headerContents">
          {info.map((ele, key) => {
            return ele.isActive ? (
              <div key={key} className={"headerContent active l" + ele.letter}>
                {ele.name}
              </div>
            ) : (
              <Link to={ele.path} key={key}>
                <div className={"headerContent l" + ele.letter}>{ele.name}</div>
              </Link>
            );
          })}
        </div>
        <div className="headerOthers"> 비던 열자▼</div>
      </div>
      <div className="bar"> </div>
    </header>
  );
}
