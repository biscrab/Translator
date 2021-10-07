import styled from 'styled-components'

export const Body = styled.div`
    padding-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const IDiv = styled.div`
    position: absolute;
    top: 0;
    z-index: -1;
    filter: brightness(50%);
    width: 100%;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
`

export const TextDiv = styled.div`
    width: 600px;
    background-color: rgba(255, 255, 255, 0.5);
    margin: 40px;
    padding: 0;
    display: flex;
    flex-direction: column;
`

export const Text = styled.textarea`
    padding: 10px;
    resize: none;
    height: 250px;
    width: 580px;
    font-size: 23px;
    border: 0;
    outline: 0;
    margin: 0;
    background-color: rgba(0, 0, 0, 0);
    font-family: 'Noto Sans KR', sans-serif;
`

export const Top = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.3);
`

export const DropDown = styled.div`
    padding-left: 20px;
    :hover{
        color: royalblue;
    }
`

export const DDiv = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
`

export const Change = styled.span`
    position: relative;
    left: 550px;
    font-size: 30px;
`

export const Select = styled.div`
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    position: absolute;
    height: 230px;
    width: 560px;
    top: 36px;
    list-style: none;
    padding: 20px;

    li{
        width: 33%;
        :hover{
            color: royalblue;
        }
    }
`

export const Bottom = styled.div`
    display: flex;
    flex-direction: row-reverse;
    height: 50px;
    background-color: rgba(255, 255, 255, 0.3);
`

export const Button = styled.button`
    background-color: royalblue;
    color: white;
    height: 100%;
    width: 100px;
    border: 0;
    outline: 0;
    position: relative;
`

export const Header = styled.nav`
    height: 60px;
    border-bottom: 2px solid #eeeeee;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    h2{
        margin: 0;
    }
`