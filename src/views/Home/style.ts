import Styled from 'styled-components';

export const Container = Styled.div `
    display: flex;
    width: 100%;
    height: 100vh;
    background: pink;

    .link {
        border: solid 2px #fff;
        position: absolute;
        text-decoration: none;
        margin-top: 50px;
        padding: 10px;
        text-transform: uppercase
    }
`
