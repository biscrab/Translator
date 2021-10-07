import styled from 'styled-components'

export const Body = styled.div`
    padding-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TextDiv = styled.div`
    border: 2px solid #eeeeee;
    width: 500px;

    margin: 10px;
    padding: 0;
`

export const Text = styled.textarea`
    padding: 10px;
    resize: none;
    height: 250px;
    width: 480px;
    font-size: 20px;
    border: 0;
    outline: 0;
`

export const Top = styled.div`
    height: 50px;
    border-bottom: 2px solid #eeeeee;
`

export const Bottom = styled.div`
    display: flex;
    flex-direction: row-reverse;
    border-top: 2px solid #eeeeee;
    height: 50px;
`

export const Button = styled.button`
    background-color: royalblue;
    color: white;
    height: 100%;
    width: 100px;
    border: 0;
    outline: 0;
    position: relative;
    border-radius: 2px;
`

export const Header = styled.nav`
    height: 60px;
    border-bottom: 2px solid #eeeeee;
`