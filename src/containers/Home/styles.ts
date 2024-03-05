import styled, { keyframes } from "styled-components";



const rotateAnimate = keyframes`
from{
    transform: translateX(0);
}
to{
    transform: translateX(40px);
}
`

const rainbow = keyframes`
    0%{background-position:0% 51%}
    50%{background-position:100% 50%}
    100%{background-position:0% 51%}
`


export const Container = styled.div`
background-color:rgba(41, 41, 41, 1);
height: 365vh;
max-width: 100vw;
overflow-x:hidden;

.big-container-one{
display: flex;
margin-left: 300px;
margin-top: -690px;
}

.container-one{
background-color:rgba(66, 65, 65, 0.5);
border:3px solid rgba(203, 203, 203, 8);
border-radius: 43px ;
width: 1294px;
height: 412px;

h1{
    margin-top: 180px;
    margin-left: 50px;
    font-size: 40px;
    font-weight: 500;

    &:hover{
        
    }

    a{
        color: rgba(255, 255, 255, 1);
        img{
         margin-bottom: 3px;
         margin-left: 20px;
         &:hover{animation: ${rotateAnimate} 0.5s ease-in-out infinite;}
        }
    }
}

h2{
    margin-top: 11px;
    margin-left: 50px;
    width: 580px;
    font-size: 27px;
    font-weight: 300;
    color: rgba(255, 255, 255, 1)
}
}

.container-two{
    background-color:rgba(66, 65, 65, 0.5);
width: 634px;
height: 312px;
border:3px solid rgba(203, 203, 203, 0.8);
border-radius: 43px ;

}

.big-container-two{
    display: flex;
    margin-left: 300px;
    margin-top: 55px;
    gap: 80px;
h1{
    width:570px;
    font-size: 28px;
    margin-top: 55px;
    color: rgba(255, 255, 255, 1);
    font-weight: 300;
    span{
       font-size:42px ;
       font-weight: 500;
    }
}
}
`

export const ContainerTwo = styled.div`
    margin-left: 250px;
    margin-top: 150px;



    .vertical-line{
        border: none;
    border-left: 1px solid rgba(255, 255, 255, 1); /* largura e cor da linha */
    height: 450px;
    }

.title{
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 1400px;
    color:rgba(255, 255, 255, 1);
    margin-top: -790px;

    h1{
        font-size: 32px;
        font-weight: 400;
    }
}

.two-containers{
    display: flex;
    gap: 90px;
    margin-left: -12px;
    margin-top: 60px;
        
    div{
        background-color:rgba(66, 65, 65, 0.5);
        width: 624px;
        height: 450px;
        border:4px solid rgba(203, 203, 203, 0.8);
        border-radius: 43px ;
    }
}

.three-containers{
    display: flex;
    gap: 220px;
    margin-left: -10px;
    margin-top: 30px;

    h2{
        color:rgba(255, 255, 255, 1);
        width: 600px;
        text-align: center;
        font-weight: 400;
        font-size: 28px;
    }
}
`



export const Blocks = styled.img`
width: 1930px;
height: 740px;
margin-top: -20px;
margin-left: -10px;
`

export const BlocksTwo = styled.img`
width: 1930px;
height: 740px;
margin-top: 40px;
margin-left: -255px;
`



export const ContainerThree = styled.div`


.four-containers{
    margin-left: 270px;
    margin-top: 180px;
    background-color:rgba(66, 65, 65, 0.5);
    width: 879px;
    height: 500px;
    border:3px solid rgba(203, 203, 203, 0.8);
    border-radius: 43px ;
}

.container-phone{
    margin-left: 850px;
    margin-top: -780px;
    button{
        position: relative;
        z-index: 90;
        bottom: 460px;
        left: 30px;
        width: 160px;
        height: 35px;
        font-size: 14px;
        font-weight: 800;
        color: rgba(255, 255, 255, 1);
        background: rgba(255, 51, 149, 1);
        box-shadow: 0px 1px 11.399999618530273px 8px rgba(255, 51, 149, 0.6);
        border-radius: 26px;
        border:none;
        rotate: 8.57deg;
        cursor: pointer;
    }
}

.notification{
    position: relative;
    z-index: 90;
    bottom: 990px;
    left: 598px;
}

.qr-code{
    position: relative;
    bottom: 600px;
    left: 270px;
    z-index: 90;
    width: 270px;
}

.buttons-containers{
    display: flex;
    gap: 75px;
    margin-left: 272px;
    margin-top: 60px;
    button{
        width: 400px;
        height: 100px;
        position: relative;
        border: none;
        z-index: 1;
        outline: none;
        border-radius: 28px;
        background: linear-gradient(90deg, rgba(255, 51, 149, 1) 0%, rgba(82, 0, 255, 1) 48.06%, rgba(255, 51, 149, 1) 97.52%);
        cursor: pointer;
        &:before{
        content: "";
        position: absolute;
        top: 2px;
        right: 2px;
        bottom: 2px;
        left: 2px;
        background-color:rgba(66, 65, 65, 1);
        border-radius: 28px;
        z-index: -1;
        }
        &:hover{
            background:linear-gradient(90deg, rgba(255, 51, 149, 1) 0%, rgba(82, 0, 255, 1) 48.06%, rgba(255, 51, 149, 1) 97.52%) ;
            background-size: 600% 600%;
            -webkit-animation: ${rainbow} 1.5s ease-in-out infinite;
            -moz-animation: ${rainbow} 1.5s ease-in-out infinite;
            -o-animation: ${rainbow} 1.5s ease-in-out infinite;
            animation: ${rainbow} 1.5s ease-in-out infinite;
        }

        h1{
        padding-left: 150px;
        padding-right: 141px;
        padding-top: 25px;
        padding-bottom: 25px;
        margin-top: -40px;
        margin-left: -5px;
        position: absolute;
        background:linear-gradient(90deg, rgba(255, 51, 149, 1) 0%, rgba(82, 0, 255, 1) 48.06%, rgba(255, 51, 149, 1) 97.52%);
        color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        &:hover{
            background-size: 600% 600%;
            -webkit-animation: ${rainbow} 1.5s ease-in-out infinite;
            -moz-animation: ${rainbow} 1.5s ease-in-out infinite;
            -o-animation: ${rainbow} 1.5s ease-in-out infinite;
            animation: ${rainbow} 1.5s ease-in-out infinite;
        }
        }
    }
}
`
