import Styled from 'styled-components';

export const Container = Styled.div `
    display: flex;
    width: 100%;
    height: 100vh;
    background: black;
    justify-content: center;
    align-items: center;
    color: #fff;

    h1{
       
        margin-bottom: 5px
    }
    .form-wrapper{
        display: grid;
        text-align: center;
        .card{
            background: pink;
            padding: 22px;
            border-radius: 10px;
        }
        form{
            border-radius: 10px;
            text-align: center;
            display: grid;
        }
        input{
            margin: 5px 0;
            height: 30px;
            border-radius: 22px;
            text-align: center;
            
        }
        .submit{
            margin-top: 40px;
            background: pink;
            border: solid 2px black;
            font-size: 20px;
            transition: all 0.50s;
        
        }
        .submit:hover{
            transform: scale(1.1)
        }

    }
     
    .link {
       text-decoration: none;
       font-size: 22px;
       margin-top: 20px;
       border: solid 1px #fff;
       text-align: center;
       color: #fff;
       padding: 10px
    }

`
