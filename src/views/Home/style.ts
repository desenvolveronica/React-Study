import Styled from 'styled-components';

export const Container = Styled.div `
    display: flex;
    width: 100%;
    height: 100vh;
    background: pink;
    justify-content: center;
    align-items: center;

    .button-container {
        display: block;
        margin: 100px;
        border: solid 1px white;


    }
    .button-container button{
        color: blue;
        font-size: 20px;
        padding: 10px
    }




`  