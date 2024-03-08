import styled from "styled-components";

export const Container = styled.div`
background-color: rgba(41, 41, 41, 1);
height: 120vh;
max-width: 100vw;
overflow-x:hidden;


.whitepaper-title{
    display: flex;
    justify-content: center;
    margin-top: 70px;
    margin-bottom: 80px;
    h1{
        color: #ffffff;
    }
}

.containers-pdf{
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
    margin-bottom: 300px;
    gap: 30px;
    
    div{
        display: flex;
        background-color:rgba(66, 65, 65, 0.5);
        border:3px solid rgba(203, 203, 203, 8);
        border-radius: 43px ;
        width: 494px;
        height: 212px;
        justify-content: center;
        align-items: center;
        &:hover{
        opacity:0.5;
        cursor: pointer;
    }
        a{
            display: flex;
            gap: 10px;
            text-decoration: none;
            color: rgba(255, 255, 255, 1);
            font-weight: 500;
            font-size: 20px;
        }
    }

}
`