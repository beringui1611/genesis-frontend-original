import styled, { keyframes } from "styled-components";



const rotateAnimate = keyframes`
from{
    transform: translateX(0);
}
to{
    transform: translateX(40px);
}
`


export const Container = styled.div`


background-color:rgba(41, 41, 41, 1);
height:400vh;
overflow-x: hidden;
overflow-y: hidden;

@media only screen and (min-width: 800px) and (max-width: 1280px){
    height:450vh;
}

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
        @media only screen and (min-width: 800px) and (max-width: 1280px){
            display:flex;
            justify-content:center;
            align-items:center;

        }
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
     font-size: 18px;
     margin-top: 55px;
     color: rgba(255, 255, 255, 1);
     font-weight: 300;
     span{
       font-size:18px ;
       font-weight: 500;
     }
    }
}

@media only screen and (max-width: 320px){
    height: 600vh;

    

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
    height: 480vh;

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

        #buy-h1{
            margin-top: 7%;
            font-size: 24px;

            a{
                margin-left: -7%;
            }

            img{
                height: 0.7rem;
            }
        }

        #buy-h2{
            width: 23rem;
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
    height: 380vh;

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
            width: 18rem;
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

@media only screen and (min-width:1012px) and (max-width:1800px){
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


    @media only screen and (min-width:1012px) and (max-width:1281px){
        margin-top:60%;
        margin-left:2%;
        #title-text{
            font-size:20px;
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

@media only screen and (min-width: 800px) and (max-width: 1281px){ 
     
#man-image{
    width:35vw;
    margin-right:5px
    
    
}
#predios{
    width:35vw;
    margin-left:5px
}

.two-containers{
    width:480px;
    padding-left:75px;
   
}

.three-containers{
    width:1180px;
    padding-left:60px;
}


#title-text{
    margin-left:190px;
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
@media only screen and (min-width:1012px) and (max-width:1800px){
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

@media only screen and (min-width:1012px) and (max-width:1800px){
    display: none;
}
`

 
