import React, { createContext, useReducer } from "react";

const initialArticle = {
  id: null,
  nickname: null,
  monsterId: null,
  remainingMinutes: null,
  serverId: null,
  channel: null,
  screenshotId: null,
};

const articleReducer (state,action)=>{
  console.log(state.map((article)=> article))  
  switch(action.type){
      case 'new' : 
      return {count:}
    }
} 

export const articleContext = createContext(initialArticle);

export const articleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(articleReducer, initialArticle);

  return (
    <articleContext.Provider value={dispatch}>
      <articleContext.Provider value={state}>
        {children}
      </articleContext.Provider>
    </articleContext.Provider>
  );
};
