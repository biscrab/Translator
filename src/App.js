import React, { useState } from 'react';
import * as S from './styled/App'
import Header from './contents/Header'
import axios from 'axios';
import './App.css'

function App() {

  const [text, setText] = useState();

  function translate(){
    axios.post()
  }

  return (
    <>
    <Header />
    <S.Body>
    <S.TextDiv>
      <S.Text value={text} onChange={(e)=>setText(e.target.value)} placeholder="번역할 내용을 입력해 주세요">
  
      </S.Text>
      <S.Bottom>
        <S.Button>번역하기</S.Button>
      </S.Bottom>
    </S.TextDiv>
    <S.TextDiv>
      <S.Text>
      
      </S.Text>
    </S.TextDiv>
    </S.Body>
    </>
  );
}

export default App;
