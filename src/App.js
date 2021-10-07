import React, { useState } from 'react';
import * as S from './styled/App'
import Header from './contents/Header'
import axios from 'axios';
import './App.css'

function App() {

  const [text, setText] = useState();
  const [t, setT] = useState();

  function translate(){
    const config = {
      headers: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'X-Naver-Client-Id': "Bhep0ILS5ymb1onqI6st",
        'X-Naver-Client-Secret': "W27O8Gyva2",
      }
    }
    axios.post('https://openapi.naver.com/v1/papago/n2mt', {source: "ko", target: "en", text: text}, config)
      .then(responese => {
        console.log(responese);
      })
      .catch(err => console.log(err));
  }

  return (
    <>
    <Header />
    <S.Body>
    <S.TextDiv>
      <S.Top>
      </S.Top>
      <S.Text value={text} onChange={(e)=>setText(e.target.value)} placeholder="번역할 내용을 입력해 주세요">
  
      </S.Text>
      <S.Bottom>
        <S.Button onClick={()=>translate()}>번역하기</S.Button>
      </S.Bottom>
    </S.TextDiv>
    <S.TextDiv>
      <S.Top>
      </S.Top>
      <S.Text>
      
      </S.Text>
      <S.Bottom>
      </S.Bottom>
    </S.TextDiv>
    </S.Body>
    </>
  );
}

export default App;
