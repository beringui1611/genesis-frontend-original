import styled from "styled-components";




export const Container = styled.div`
background-color: rgba(41, 41, 41, 1);
height: 130vh;
max-width: 100vw;
overflow-x:hidden;


.buy-title{
    display: flex;
    flex-direction: column;
    width: 930px;
    height: 200px;
    margin-left: 100px;
    margin-top: 40px;

    h1{
        color: #FF54A6;
        font-size: 40px;
    }

    p{
        color: #ffff;
        font-size: 20px;
        width: 800px;
        margin-top: 5px;
        margin-bottom: 15px;
    }

    a{
        color: #FF54A6;
        font-size: 20px;
    }
}

.buy-containers{
display: flex;
justify-content: center;
flex-direction: column;
align-items:center ;
gap: 10px;
margin-bottom: 200px;
margin-top: 30px;

.itens-buy-container{
    background: #42414199;
    width: 800px;
    height: 210px;
    border: 2px solid #FF3395;
    border-radius: 43px;
}

img{
    background-color: #ff3395;
    padding: 5px;
    border-radius: 30px;
    padding-left: 8px;
    padding-right: 8px;
    margin-top: -20px;
    margin-bottom: -20px;
    z-index: 2;
}

#btn-wallet{
    margin-top: 25px;
    width: 800px;
    height: 70px;
    border-radius: 15px;
    border: none;
    background: #FC72FF63;
    color: #FC72FF;
    font-weight: 700;
    font-size: 20px;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.6;
    }
}


}

.input-buy{
    margin-left: 30px;
    margin-top: 20px;
    width: 300px;
    height: 70px;
    padding-top: 20px;
    color: #ffffff;
    font-size: 40px;
    font-weight: 600;
    padding-top: 10px;
    border: 0;
    background: transparent;
    &::-webkit-inner-spin-button{
        -webkit-appearance: none;
    }
    &:hover{
        overflow-y: hidden;
    }
    &:focus{
        color: #ffffff;
        font-size: 40px;
        font-weight: 600;
    }
    &::placeholder{
        color: #ffffff;
        font-size: 40px;
        font-weight: 600;
        padding-top: 10px;
    }
    }
    
textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
}

.input-buy-two{
    margin-left: 30px;
    margin-top: 20px;
    width: 200px;
    height: 70px;
    padding-top: 20px;
    color: #ffffff;
    font-size: 40px;
    font-weight: 600;
    padding-top: 10px;
    border: 0;
    background: transparent;
    &::-webkit-inner-spin-button{
        -webkit-appearance: none;
    }
    &:hover{
        overflow-y: hidden;
    }
    &:focus{
        color: #ffffff;
        font-size: 40px;
        font-weight: 600;
    }
    &::placeholder{
        color: #ffffff;
        font-size: 40px;
        font-weight: 600;
        padding-top: 10px;
    }
}

h2{
    margin-top: 30px;
    margin-left: 30px;
    color: #ffffff;
    font-weight: 500;
    font-size: 20px;
}

.div-coins{
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 3;
    margin-top:-700px;
    margin-left: 1150px;
    gap: 180px;
    

    div{
        display: flex;
        justify-content: center;
        color: rgba(255, 255, 255, 1);
        background: rgba(0, 0, 0, 0.52);
        border-radius: 10px;
        width: 120px;
        height: 44px;
        padding: 10px;
        gap: 15px;

        h3{
            margin-right: 7px;
            margin-top: 2px;
            font-size: 16px;
            font-weight: 600;
        }

        img{
       
        }
    }

    .img-blocks{
        background-color: rgba(255,255,255, 1);
        height: 21px;
        border-radius: 30px;
        padding-right: 3px;
        margin-top: 1px;
    }
}

#value-usdt-amount{
    margin-left: 30px;
    margin-top: 20px;
    width: 200px;
    height: 70px;
    padding-top: 20px;
    color: #ffffff;
    font-size: 40px;
    font-weight: 600;
    padding-top: 10px;
    border: 0;
    background: transparent;
}

#change-value{
    background-color:transparent;
    padding: 5px;
    border-radius: 30px;
    padding-left: 8px;
    padding-right: 8px;
    margin-top: -140px;
    margin-bottom: -20px;
    z-index: 2;
    position: absolute;
    border: none;
    cursor: pointer;
}




`