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
height:400vh;
overflow-x: hidden;
overflow-y: hidden;

#text-big-two{
    font-size: 24px;
    margin-top: 10px;
    margin-bottom: 10px;
}

@media only screen and (min-width: 1439px) and (max-width: 1441px){
    #text-big-two{
    font-size: 24px;
    margin-top: 70px;
    margin-bottom: 10px;    
    }

    .title{
        margin-left: 35px;
        #title-text{
            font-size: 30px;
            width: 1200px;
        }
    }
}

#button-menu{
    @media only screen and (max-width: 320px){
        background: transparent;
        border: none;
        z-index: 99;
        position: fixed;
        margin-top:30px;
        margin-left: 20px;

        img{
            height: 17px;
        }
    }

    @media only screen and (min-width:321px) and (max-width:340px){
        background: transparent;
        border: none;
        z-index: 99;
        position: fixed;
        margin-top:30px;
        margin-left: 20px;

        img{
            height: 17px;
        }
    }

    @media only screen and (min-width:341px) and (max-width:380px){
        background: transparent;
        border: none;
        z-index: 99;
        position: fixed;
        margin-top:30px;
        margin-left: 20px;

        img{
            height: 19px;
        }
    }

    @media only screen and (min-width:403px) and (max-width:430px){
        background: transparent;
        border: none;
        z-index: 99;
        position: fixed;
        margin-top:30px;
        margin-left: 20px;

        img{
            height: 21px;
        }
    }

    @media only screen and (min-width:381px) and (max-width:402px){
        background: transparent;
        border: none;
        z-index: 99;
        position: fixed;
        margin-top:30px;
        margin-left: 20px;

        img{
            height: 23px;
        }
    }


    @media only screen and (min-width: 768px) {
        display: none;
    }
}


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
width: 540px;
height: 356px;
border:3px solid rgba(203, 203, 203, 0.8);
border-radius: 43px ;
}

#girl-picture{
    width:534px;
    height:350px;
    border-radius:43px;
}

#man-image{
    width:616px;
    height:442px;
    border-radius:40px;
}

#predios{
    width:616px;
    height:442px;
    border-radius:40px;

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

@media only screen and (max-width: 320px){
    height: 560vh;

    

    .big-container-one{
        margin-left: 0%;
        margin-top: 27%;
    }

    #girl-picture{
    width:254px;
    height:298px;
    border-radius:43px;
}


    .container-one{
        width: 20.0rem;
        height: 10rem;
        border-radius:15px;

        h1{
            margin-top: 12%;
            font-size: 20px;

            a{
                margin-left: -13%;
            }

            img{
                height: 0.5rem;
            }
        }

        h2{
            width: 16rem;
            font-size: 13px;
            margin-left: 7%;
            
        }
    }

    .container-two{
     background-color:rgba(66, 65, 65, 0.5);
     width: 16.2rem;
     height: 19rem;
     border:3px solid rgba(203, 203, 203, 0.8);
     border-radius: 43px ;
    }

    .big-container-two{
    display: flex;
    flex-direction: column;
    margin-left: 9%;
    margin-top: 13%;
    gap: 80px;

    #text-big-two{
     width:300px;
     text-align: center;
     font-size: 15px;
     margin-left: -7%;
     margin-top: -14%;
     color: rgba(255, 255, 255, 1);
     font-weight: 300;
     span{
       font-size:15px ;
       font-weight: 700;
     }
    }
   }

}

@media only screen and (min-width:321px) and (max-width:340px){
    height: 560vh;


    .big-container-one{
        margin-left: 9.5%;
        margin-top: 27%;
    }

    #girl-picture{
    width:254px;
    height:298px;
    border-radius:43px;
}

    .container-one{
        width: 16.2rem;
        height: 10rem;

        h1{
            margin-top: 12%;
            font-size: 20px;

            a{
                margin-left: -13%;
            }

            img{
                height: 0.5rem;
            }
        }

        h2{
            width: 10rem;
            font-size: 14px;
            margin-left: 10%;
        }
    }

    .container-two{
     background-color:rgba(66, 65, 65, 0.5);
     width: 16.2rem;
     height: 19rem;
     border:3px solid rgba(203, 203, 203, 0.8);
     border-radius: 43px ;
    }

    .big-container-two{
    display: flex;
    flex-direction: column;
    margin-left: 9%;
    margin-top: 13%;
    gap: 80px;

    #text-big-two{
     width:19rem;
     font-size: 18px;
     text-align: center;
     margin-left: -7%;
     margin-top: -14%;
     color: rgba(255, 255, 255, 1);
     font-weight: 300;
     span{
       font-size:18px ;
       font-weight: 500;
     }
    }
   }
}

@media only screen and (min-width:341px) and (max-width:380px){
    height: 400vh;

    .big-container-one{
        margin-left: 2.5%;
        margin-top: 27%;
    }

    #girl-picture{
    width:268px;
    height:298px;
    border-radius:43px;
}

    .container-one{
        width: 22.2rem;
        height: 11rem;
        border-radius:20px;
        h1{
            margin-top: 13%;
            font-size: 22px;

            a{
                margin-left: -13%;
            }

            img{
                height: 0.6rem;
            }
        }

        h2{
            width: 18rem;
            font-size: 14px;
            margin-left: 4%;
        }
    }

    .container-two{
     background-color:rgba(66, 65, 65, 0.5);
     width: 17.2rem;
     height: 19rem;
     border:3px solid rgba(203, 203, 203, 0.8);
     border-radius: 43px ;
    }

    .big-container-two{
    display: flex;
    flex-direction: column;
    margin-left: 9.5%;
    margin-top: 13%;
    gap: 80px;

    #text-big-two{
     width:19rem;
     font-size: 18px;
     text-align: center;
     margin-left: -5%;
     margin-top: -14%;
     color: rgba(255, 255, 255, 1);
     font-weight: 300;
     span{
       font-size:18px ;
       font-weight: 700;
     }
    }
   }
}

@media only screen and (min-width:403px) and (max-width:430px){
    height: 420vh;

    .big-container-one{
        margin-left: 1.5%;
        margin-top: 27%;
    }

    #girl-picture{
    width:318px;
    height:330px;
    border-radius:43px;
}

    .container-one{
        border-radius: 25px;
        width: 25.2rem;
        height: 12rem;

        h1{
            margin-top: 10%;
            font-size: 24px;

            a{
                margin-left: -7%;
            }

            img{
                height: 0.7rem;
            }
        }

        h2{
            width: 20rem;
            font-size: 16px;
            margin-left:6.5%;
        }
    }

    .container-two{
     background-color:rgba(66, 65, 65, 0.5);
     width: 20.2rem;
     height: 21rem;
     border:3px solid rgba(203, 203, 203, 0.8);
     border-radius: 43px ;
    }

    .big-container-two{
    display: flex;
    flex-direction: column;
    margin-left: 9.5%;
    margin-top: 13%;
    gap: 80px;

    #text-big-two{
     width:19rem;
     font-size: 18px;
     text-align: center;
     margin-left: 3%;
     margin-top: -14%;
     color: rgba(255, 255, 255, 1);
     font-weight: 300;
     span{
       font-size:18px ;
       font-weight: 700;
     }
    }
   }
}

@media only screen and (min-width:381px) and (max-width:402px){
    height: 410vh;

    .big-container-one{
        margin-left: 9.5%;
        margin-top: 27%;
    }

    #girl-picture{
    width:318px;
    height:330px;
    border-radius:43px;
}

    .container-one{
        width: 20.2rem;
        height: 12rem;

        h1{
            margin-top: 16%;
            font-size: 24px;

            a{
                margin-left: -7%;
            }

            img{
                height: 0.7rem;
            }
        }

        h2{
            width: 15rem;
            font-size: 16px;
            margin-left:10.5%;
        }
    }

    .container-two{
     background-color:rgba(66, 65, 65, 0.5);
     width: 20.2rem;
     height: 21rem;
     border:3px solid rgba(203, 203, 203, 0.8);
     border-radius: 43px ;
    }

    .big-container-two{
    display: flex;
    flex-direction: column;
    margin-left: 9.5%;
    margin-top: 13%;
    gap: 80px;

    h1{
     width:19rem;
     font-size: 18px;
     text-align: center;
     margin-left: 3%;
     margin-top: -14%;
     color: rgba(255, 255, 255, 1);
     font-weight: 300;
     span{
       font-size:34px ;
       font-weight: 500;
     }
    }
   }
}

@media only screen and (min-width:1012px) and (max-width:1900px){
    .big-container-one{
        margin-left: 2%;
        margin-top: 10%;
        width:96%;
    }

    .big-container-two{
       margin-left:2%;
       gap:2%;
    }

    #text-big-two{
        font-size:110%;
    }
}
`

export const ContainerTwo = styled.div`
    margin-left: 250px;
    margin-top: 150px;


    @media only screen and (min-width:1012px) and (max-width:1900px){
        margin-top:60%;
        margin-left:2%;
        #title-text{
            font-size:120%;
            width:60%;
            margin-left:4%;
        
        }
    }


    


    #carousel{
        @media only screen and (min-width: 769px) {
        display: none;
        }
    }
    .vertical-line{
        border: none;
        border-left: 1px solid rgba(255, 255, 255, 1); /* largura e cor da linha */
        height: 450px;
    }

.title{
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 90rem;
    color:rgba(255, 255, 255, 1);
    margin-top: -50%;

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

    @media only screen and (min-width:1012px) and (max-width:1900px){
    .txt-column{
        font-size:120%;
    }
    }
}

@media only screen and (max-width: 320px){
    margin-top: 1000px;
    margin-left: -30px;

    .vertical-line{
        display: none;
    }

    .title{
     display: flex;
     flex-direction: column;
     text-align: center;
     width: 19rem;
     color:rgba(255, 255, 255, 1);
     margin-top: -220%;
     margin-left: 11%;
 
     h1{
         font-size: 22px;
         font-weight: 400;
     }
    }

    .two-containers{
    display: none;
    display: flex;
    gap: 90px;
    margin-left: -5%;
    margin-top: 10%;
        
    div{
        display: none;
        background-color:rgba(66, 65, 65, 0.5);
        width: 624px;
        height: 450px;
        border:4px solid rgba(203, 203, 203, 0.8);
        border-radius: 43px ;
    }
    }

.three-containers{
    display: none;
    display: flex;
    gap: 220px;
    margin-left: -10px;
    margin-top: 30px;

    h2{
        display: none;
        color:rgba(255, 255, 255, 1);
        width: 400px;
        text-align: center;
        font-weight: 400;
        font-size: 20px;
    }
}
}

@media only screen and (min-width:321px) and (max-width:340px){
    margin-top: 1000px;
    margin-left: -30px;

    .vertical-line{
        display: none;
    }

    .title{
     display: flex;
     flex-direction: column;
     text-align: center;
     width: 19rem;
     color:rgba(255, 255, 255, 1);
     margin-top: -220%;
     margin-left: 11%;
 
     h1{
         font-size: 22px;
         font-weight: 400;
     }
    }

    .two-containers{
    display: none;
    display: flex;
    gap: 90px;
    margin-left: -5%;
    margin-top: 10%;
        
    div{
        display: none;
        background-color:rgba(66, 65, 65, 0.5);
        width: 624px;
        height: 450px;
        border:4px solid rgba(203, 203, 203, 0.8);
        border-radius: 43px ;
    }
    }

.three-containers{
    display: none;
    display: flex;
    gap: 220px;
    margin-left: -10px;
    margin-top: 30px;

    h2{
        display: none;
        color:rgba(255, 255, 255, 1);
        width: 400px;
        text-align: center;
        font-weight: 400;
        font-size: 20px;
    }
}
}

@media only screen and (min-width:341px) and (max-width:380px){
    margin-top: 1000px;
    margin-left: -30px;

    .vertical-line{
        display: none;
    }

    .title{
     display: flex;
     flex-direction: column;
     text-align: center;
     width: 19rem;
     color:rgba(255, 255, 255, 1);
     margin-top: -220%;
     margin-left: 14.5%;
 
     h1{
         font-size: 22px;
         font-weight: 400;
     }
    }

    .two-containers{
    display: none;
    display: flex;
    gap: 90px;
    margin-left: -5%;
    margin-top: 10%;
        
    div{
        display: none;
        background-color:rgba(66, 65, 65, 0.5);
        width: 624px;
        height: 450px;
        border:4px solid rgba(203, 203, 203, 0.8);
        border-radius: 43px ;
    }
    }

.three-containers{
    display: none;
    display: flex;
    gap: 220px;
    margin-left: -10px;
    margin-top: 30px;

    h2{
        display: none;
        color:rgba(255, 255, 255, 1);
        width: 400px;
        text-align: center;
        font-weight: 400;
        font-size: 20px;
    }
}
}

@media only screen and (min-width:403px) and (max-width:430px){
    margin-top: 1000px;
    margin-left: -30px;

    .vertical-line{
        display: none;
    }

    .title{
     display: flex;
     flex-direction: column;
     text-align: center;
     width: 22rem;
     color:rgba(255, 255, 255, 1);
     margin-top: -200%;
     margin-left: 13.5%;
 
     h1{
         font-size: 22px;
         font-weight: 400;
     }
    }

    .two-containers{
    display: none;
    display: flex;
    gap: 90px;
    margin-left: -5%;
    margin-top: 10%;
        
    div{
        display: none;
        background-color:rgba(66, 65, 65, 0.5);
        width: 624px;
        height: 450px;
        border:4px solid rgba(203, 203, 203, 0.8);
        border-radius: 43px ;
    }
    }

.three-containers{
    display: none;
    display: flex;
    gap: 220px;
    margin-left: -10px;
    margin-top: 30px;

    h2{
        display: none;
        color:rgba(255, 255, 255, 1);
        width: 400px;
        text-align: center;
        font-weight: 400;
        font-size: 20px;
    }
}
}

@media only screen and (min-width:381px) and (max-width:402px){
    margin-top: 1000px;
    margin-left: -30px;

    .vertical-line{
        display: none;
    }

    .title{
     display: flex;
     flex-direction: column;
     text-align: center;
     width: 22rem;
     color:rgba(255, 255, 255, 1);
     margin-top: -200%;
     margin-left: 11%;
 
     h1{
         font-size: 22px;
         font-weight: 400;
     }
    }

    .two-containers{
    display: none;
    display: flex;
    gap: 90px;
    margin-left: -5%;
    margin-top: 10%;
        
    div{
        display: none;
        background-color:rgba(66, 65, 65, 0.5);
        width: 624px;
        height: 450px;
        border:4px solid rgba(203, 203, 203, 0.8);
        border-radius: 43px ;
    }
    }

.three-containers{
    display: none;
    display: flex;
    gap: 220px;
    margin-left: -10px;
    margin-top: 30px;

    h2{
        display: none;
        color:rgba(255, 255, 255, 1);
        width: 400px;
        text-align: center;
        font-weight: 400;
        font-size: 20px;
    }
}
}
`



export const Blocks = styled.img`
width: 1930px;
height: 740px;
margin-top: -20px;
margin-left: -10px;

@media only screen and (max-width: 320px){
    display: none;
}

@media only screen and (min-width:321px) and (max-width:340px){
    display: none;
}

@media only screen and (min-width:341px) and (max-width:380px){
    display: none;
}

@media only screen and (min-width:403px) and (max-width:430px){
    display: none;
}

@media only screen and (min-width:381px) and (max-width:402px){
    display: none;
}
@media only screen and (min-width:1012px) and (max-width:1900px){
    display: none;
}
`

export const BlocksTwo = styled.img`
width: 1930px;
height: 740px;
margin-top: 40px;
margin-left: -255px;

@media only screen and (max-width: 320px){
    display: none;
}

@media only screen and (min-width:321px) and (max-width:340px){
    display: none;
}

@media only screen and (min-width:341px) and (max-width:380px){
    display: none;
}

@media only screen and (min-width:403px) and (max-width:430px){
    display: none;
}

@media only screen and (min-width:381px) and (max-width:402px){
    display: none;
}

@media only screen and (min-width:1012px) and (max-width:1900px){
    display: none;
}
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
    z-index: 89;
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

@media only screen and (max-width: 320px){
   margin-left: -360%;
   margin-top: 200%;

   .four-containers{
    display: none;
   }

   #cellphone{
    height: 37.5rem;
   }

   .container-phone{
    margin-top: -55%;

    button{
        width: 9.3rem;
        top: -290px;
        left: 10px;
    }
   }

   .qr-code{
     position: relative;
     bottom: 390px;
     left: 185px;
     z-index: 90;
     width: 10.5rem;
    }

    .notification{
     position: relative;
     z-index: 90;
     bottom: 638px;
     left: 390px;
     height: 2.5rem;
     }

   .buttons-containers{
    display: flex;
    flex-direction: column;
    gap:40px;
    margin-left: 1190px;
    margin-top: 30%;
    button{
        width: 250px;
        height: 80px;
        
        h1{
            margin-left: -75px;
            font-size:20px;
        }
    }
   }
}

@media only screen and (min-width:321px) and (max-width:340px){
    margin-left: -360%;
   margin-top: 200%;

   .four-containers{
    display: none;
   }

   #cellphone{
    height: 37.5rem;
   }

   .container-phone{
    margin-top: -55%;

    button{
        width: 9.3rem;
        top: -290px;
        left: 10px;
    }
   }

   .qr-code{
     position: relative;
     bottom: 390px;
     left: 185px;
     z-index: 90;
     width: 10.5rem;
    }

    .notification{
     position: relative;
     z-index: 90;
     bottom: 638px;
     left: 390px;
     height: 2.5rem;
     }

   .buttons-containers{
    display: flex;
    flex-direction: column;
    gap:40px;
    margin-left: 1190px;
    margin-top: 30%;
    button{
        width: 250px;
        height: 80px;
        
        h1{
            margin-left: -75px;
            font-size:20px;
        }
    }
   }
}

@media only screen and (min-width:341px) and (max-width:380px){
   margin-left: -360%;
   margin-top: 200%;

   .four-containers{
    display: none;
   }

   #cellphone{
    height: 37.5rem;
   }

   .container-phone{
    margin-top: -55%;
    margin-left: 62%;

    button{
        width: 9.3rem;
        top: -290px;
        left: 10px;
    }
   }

   .qr-code{
     position: relative;
     bottom: 390px;
     left: 185px;
     z-index: 90;
     width: 10.5rem;
    }

    .notification{
     position: relative;
     z-index: 90;
     bottom: 638px;
     left: 390px;
     height: 2.5rem;
    }

   .buttons-containers{
    display: flex;
    flex-direction: column;
    gap:40px;
    margin-left: 81.5%;
    margin-top: -5%;
    margin-bottom: 7%;
    button{
        width: 16rem;
        height: 5rem;
        
        h1{
            margin-left: -75px;
            font-size:20px;
        }
    }
   }
}

@media only screen and (min-width:403px) and (max-width:430px){
   margin-left: -330%;
   margin-top: 200%;

   .four-containers{
    display: none;
   }

   #cellphone{
    height: 37.5rem;
   }

   .container-phone{
    margin-top: -55%;
    margin-left: 62%;

    button{
        width: 9.3rem;
        top: -290px;
        left: 10px;
    }
   }

   .qr-code{
     position: relative;
     bottom: 390px;
     left: 185px;
     z-index: 90;
     width: 10.5rem;
    }

    .notification{
     position: relative;
     z-index: 90;
     bottom: 638px;
     left: 390px;
     height: 2.5rem;
    }

   .buttons-containers{
    display: flex;
    flex-direction: column;
    gap:40px;
    margin-left: 81.5%;
    margin-top: -5%;
    margin-bottom: 10%;
    button{
        width: 16rem;
        height: 5rem;
        
        h1{
            margin-left: -75px;
            font-size:20px;
        }
    }
   }
}

@media only screen and (min-width:381px) and (max-width:402px){
    margin-left: -340%;
   margin-top: 200%;

   .four-containers{
    display: none;
   }

   #cellphone{
    height: 37.5rem;
   }

   .container-phone{
    margin-top: -55%;
    margin-left: 62%;

    button{
        width: 9.3rem;
        top: -290px;
        left: 10px;
    }
   }

   .qr-code{
     position: relative;
     bottom: 390px;
     left: 185px;
     z-index: 89;
     width: 10.5rem;
    }

    .notification{
     position: relative;
     z-index: 90;
     bottom: 638px;
     left: 390px;
     height: 2.5rem;
    }

   .buttons-containers{
    display: flex;
    flex-direction: column;
    gap:40px;
    margin-left: 81.5%;
    margin-top: -5%;
    margin-bottom: 8%;
    button{
        width: 16rem;
        height: 5rem;
        
        h1{
            margin-left: -75px;
            font-size:20px;

        }
     }
   }
}

@media only screen and (min-width:1000px) and (max-width:1900px){
   margin-left:-20%;
   
  .four-containers{
    width:50%;   
  }

  .buttons-containers{
    width:50%;
    font-size:100%;
    display:flex;
    align-items: center;
    margin-bottom:200px;
    button{
        width:60%;
        height:80px;
        h1{
            margin-left:-25%;
        }
    }
  }

  .container-phone{
  margin-left:52%;
  }

  #cellphone{
    height:35rem;
   margin-top:-50px;
   
  }
  .notification{
    width:150px;
    left: 64%;
    bottom:800px;
  }

  .qr-code{
    width:160px;
    margin-top:190px;
    margin-left:-11%;
  }

  #btn-join{
    margin-left:80px;
    margin-top:20px;
    width:120px;
    height:20px;
  }
}

@media only screen and (min-width: 1439px) and (max-width: 1460px){
    margin-left:-10%;
   
  .four-containers{
    width:50%;   
  }

  .buttons-containers{
    width:50%;
    font-size:100%;
    display:flex;
    align-items: center;
    margin-bottom:200px;
    button{
        width:60%;
        height:80px;
        h1{
            margin-left:-7%;
        }
    }
  }

  .container-phone{
  margin-left:52%;
  }

  #cellphone{
    height:35rem;
   margin-top:-50px;
   
  }
  .notification{
    width:190px;
    left: 47.5%;
    bottom:790px;
  }

  .qr-code{
    width:160px;
    margin-top:190px;
    margin-left:-13.5%;
  }

  #btn-join{
    margin-left:80px;
    margin-top:20px;
    width:120px;
    height:20px;
  }
}


`
