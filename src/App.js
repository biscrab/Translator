import React, { useState } from 'react';
import * as S from './styled/App'
import Header from './contents/Header'
import axios from 'axios';
import './App.css'
import america from './images/america.png'

function App() {

  const [v, setV] = useState({source: "ko", target: "en", text: ""});
  const [t, setT] = useState();
  const [select, setSelect] = useState({source: false, target: false});
  const [name, setName] = useState({source: "한국어", target: "영어"});

  axios.defaults.withCredentials = "*";

  function translate(){
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'X-Naver-Client-Id': "Bhep0ILS5ymb1onqI6st",
        'X-Naver-Client-Secret': "W27O8Gyva2",
      }
    }
    axios.post('https://openapi.naver.com/v1/papago/n2mt', v, config)
      .then(response => {
        setT(response.data.message.result.translatedText);
      })
      .catch(err => console.log(err));
  }

  const lang = [{name: "한국어", lang: "ko"},{name: "영어", lang: "en"},{name: "일본어", lang: "ja"},{name: "중국어(간체)", lang: "zh-CN"},{name: "중국어(번체)", lang: "zh-TW"},{name: "스페인어", lang: "es"},{name: "프랑스어", lang: "fr"},{name: "독일어", lang: "vi"},{name: "러시아", lang: "ru"},{name: "포르투갈어", lang: "po"},{name: "이탈리아어", lang: "it"},{name: "베트남어", lang: "vi"},{name: "태국어", lang: "th"},{name: "인도네시아어", lang: "id"},{name: "힌디어", lang: "hi"}]

  const Select = ({n}) => {

    const Sli = ({item}) => {

      function Schange(){
        setName({...name, [n]: item.name});
        setV({...v, [n]: item.lang});
        if(n === "source"){
          setSelect({...select, source:!select.source});
        }
        else if(n === "target"){
          setSelect({...select, target:!select.target});
        }
      }

      return(
        <li onClick={()=>Schange()}>{item.name}</li>
      )
    }

    return(
      <>
        <S.Select>
          {lang.map(item => {
            return(
              <Sli item={item}>{item.name}</Sli>
            )
          }) 
          }
        </S.Select>
      </>
    )
  }

  return (
    <>
    <Header />
    <S.Body>
    <S.TextDiv>
      <S.Top>
        <S.DDiv>
        <S.DropDown onClick={()=>setSelect({...select, source:!select.source})}>
          {name.source}▼
        </S.DropDown>
        {select.source === true ?
        <Select n="source" />
        :
        <></>
        }
      </S.DDiv>
      </S.Top>
      <S.Text value={v.text} onChange={(e)=>setV({...v, text: e.target.value})} placeholder="번역할 내용을 입력해 주세요">
      </S.Text>
      <S.Bottom>
        <S.Button onClick={()=>translate()}>번역하기</S.Button>
      </S.Bottom>
    </S.TextDiv>
    <S.TextDiv>
      <S.Top>
      <S.DDiv>
        <S.DropDown onClick={()=>setSelect({...select, target:!select.target})}>
          {name.target}▼
        </S.DropDown>
        {select.target === true ?
        <Select n="target" />
        :
        <></>
        }
      </S.DDiv>
      </S.Top>
      <S.Text value={t} onChange={(e)=>setT(e.target.value)}>
      </S.Text>
      <S.Bottom>
      </S.Bottom>
    </S.TextDiv>
    </S.Body>
    <S.IDiv>
      <S.Img src={america} />
    </S.IDiv>
    </>
  );
}

export default App;
