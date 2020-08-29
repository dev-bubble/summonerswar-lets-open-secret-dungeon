import React from "react";

function Monster({ id }) {
  // id 로 몬스터를 조회하는 Code
  return (
    <div className="monster">
      @{/*(속성)*/} Monster{/*몬스터명*/}
    </div>
  );
}

export function Article({ info }) {
  /*
  id
  nickname
  monsterId
  remainingMinutes
  serverId
  channel
  screenshotId
  */
  return (
    <div className="contentsWrapper">
      <div className="contents">
        NickName1 님이 <Monster id={info.monsterId} /> 던전을 발견하였습니다.
        <i className="fas fa-image"></i>
      </div>
      <div className="contentDetail">
        [NickName1] 13 Minute Left / 한국서버 112 채널 / 친추 2명 가능.
      </div>
    </div>
  );
}
