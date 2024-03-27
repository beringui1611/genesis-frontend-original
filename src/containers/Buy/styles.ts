import styled from "styled-components";




export const Container = styled.div`
background-color: rgba(41, 41, 41, 1);
height: 160vh;
max-width: 100vw;
overflow-x:hidden;

#button-menu-buy{
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
}

@media only screen and (min-width:320px) and (max-width:374px) {
    height: 210vh;

     .buy-title{
        margin-left: 10px;

        h1{
        color: #FF54A6;
        font-size: 30px;
        }

        p{
        color: #ffff;
        font-size: 15px;
        width: 300px;
        margin-top: 5px;
        margin-bottom: 15px;
        }

        a{
            color: #FF54A6;
            font-size: 15px;

            img{
                height: 10px;
            }
        }
     }


        .buy-containers{        
            #btn-wallet{
          margin-top: 15px;
          width: 240px;
          height: 60px;
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

        .itens-buy-container{
         width: 300px;
         height: 140px;

         h2{
             margin-top: 15px;
             font-size: 14px;
         }

            .input-buy{
                margin-top: -1px;

                &:focus{
                 color: #ffffff;
                 font-size: 30px;
                 font-weight: 600;
                 padding-top: 19px;
                }

                &::placeholder{
                 color: #ffffff;
                 font-size: 30px;
                 font-weight: 600;
                }
            }
        }
    }

    #change-value{
        margin-top: -125px;
        img{

        }
    }

    #value-usdt-amount{
        font-size: 30px;
    }

    .div-coins{
        margin-left: 190px;
        margin-top: -560px;
        gap: 110px;

         div{
         display: flex;
         justify-content: center;
         color: rgba(255, 255, 255, 1);
         background: rgba(0, 0, 0, 0.52);
         border-radius: 10px;
         width: 100px;
         height: 40px;
         padding: 10px;
         gap: 15px;

         h3{
             margin-right: 7px;
             margin-top: 1px;
             font-size: 16px;
             font-weight: 600;
         }

        }
    }

    
}

@media only screen and (min-width:375px) and (max-width:425px){
    height: 180vh;

     .buy-title{
        margin-left: 10px;
        margin-top:60px;
        h1{
        color: #FF54A6;
        font-size: 30px;
        }

        p{
        color: #ffff;
        font-size: 15px;
        width: 300px;
        margin-top: 5px;
        margin-bottom: 15px;
        }

        a{
            color: #FF54A6;
            font-size: 15px;

            img{
                height: 10px;
            }
        }
     }


        .buy-containers{        
            #btn-wallet{
          margin-top: 15px;
          width: 240px;
          height: 60px;
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

        .itens-buy-container{
         width: 350px;
         height: 140px;

         h2{
             margin-top: 15px;
             font-size: 14px;
         }

            .input-buy{
                margin-top: -1px;

                &:focus{
                 color: #ffffff;
                 font-size: 30px;
                 font-weight: 600;
                 padding-top: 19px;
                }

                &::placeholder{
                 color: #ffffff;
                 font-size: 30px;
                 font-weight: 600;
                }
            }
        }
    }

    #change-value{
        margin-top: -125px;
        img{

        }
    }

    #value-usdt-amount{
        font-size: 30px;
    }

    .div-coins{
        margin-left: 240px;
        margin-top: -560px;
        gap: 110px;

         div{
         display: flex;
         justify-content: center;
         color: rgba(255, 255, 255, 1);
         background: rgba(0, 0, 0, 0.52);
         border-radius: 10px;
         width: 100px;
         height: 40px;
         padding: 10px;
         gap: 15px;

         h3{
             margin-right: 7px;
             margin-top: 1px;
             font-size: 16px;
             font-weight: 600;
         }

        }
    }
}

@media only screen and (min-width:426px) and (max-width:767px){
    height: 160vh;

.buy-title{
   margin-left: 10px;

   h1{
   color: #FF54A6;
   font-size: 30px;
   }

   p{
   color: #ffff;
   font-size: 17px;
   width: 400px;
   margin-top: 5px;
   margin-bottom: 15px;
   }

   a{
       color: #FF54A6;
       font-size: 18px;

       img{
           height: 10px;
       }
   }
}


   .buy-containers{        
       #btn-wallet{
     margin-top: 15px;
     width: 240px;
     height: 60px;
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

   .itens-buy-container{
    width: 400px;
    height: 145px;

    h2{
        margin-top: 15px;
        font-size: 14px;
    }

       .input-buy{
           margin-top: 10px;

           &:focus{
            color: #ffffff;
            font-size: 35px;
            font-weight: 600;
            padding-top: 19px;
           }

           &::placeholder{
            color: #ffffff;
            font-size: 35px;
            font-weight: 600;
           }
       }
   }
}

#change-value{
   margin-top: -125px;
   img{

   }
}

#value-usdt-amount{
   font-size: 40px;
}

.div-coins{
   margin-left: 290px;
   margin-top: -575px;
   gap: 115px;

    div{
    display: flex;
    justify-content: center;
    color: rgba(255, 255, 255, 1);
    background: rgba(0, 0, 0, 0.52);
    border-radius: 10px;
    width: 100px;
    height: 40px;
    padding: 10px;
    gap: 15px;

    h3{
        margin-right: 7px;
        margin-top: 1px;
        font-size: 16px;
        font-weight: 600;
    }

   }
}
}

@media only screen and (min-width:768px) and (max-width:1023px){
    height: 150vh;

.buy-title{
   margin-left: 20px;

   h1{
   color: #FF54A6;
   font-size: 30px;
   }

   p{
   color: #ffff;
   font-size: 18px;
   width: 500px;
   margin-top: 5px;
   margin-bottom: 15px;
   }

   a{
       color: #FF54A6;
       font-size: 18px;

       img{
           height: 10px;
       }
   }
}


   .buy-containers{        
       #btn-wallet{
     margin-top: 15px;
     width: 300px;
     height: 65px;
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

   .itens-buy-container{
    width: 600px;
    height: 160px;

    h2{
        margin-top: 15px;
        font-size: 14px;
    }

       .input-buy{
           margin-top: 10px;

           &:focus{
            color: #ffffff;
            font-size: 40px;
            font-weight: 600;
           }

           &::placeholder{
            color: #ffffff;
            font-size: 35px;
            font-weight: 600;
           }
       }
   }
}

#change-value{
   margin-top: -125px;
   img{

   }
}

#value-usdt-amount{
   font-size: 40px;
}

.div-coins{
   margin-left: 560px;
   margin-top: -600px;
   gap: 130px;

    div{
    display: flex;
    justify-content: center;
    color: rgba(255, 255, 255, 1);
    background: rgba(0, 0, 0, 0.52);
    border-radius: 10px;
    width: 100px;
    height: 40px;
    padding: 10px;
    gap: 15px;

    h3{
        margin-right: 7px;
        margin-top: 1px;
        font-size: 16px;
        font-weight: 600;
    }

   }
}
}

@media only screen and (min-width:1024px) and (max-width:1200px){
    height: 140vh;

.buy-title{
   margin-left: 40px;

   h1{
   color: #FF54A6;
   font-size: 30px;
   }

   p{
   color: #ffff;
   font-size: 18px;
   width: 500px;
   margin-top: 5px;
   margin-bottom: 15px;
   }

   a{
       color: #FF54A6;
       font-size: 18px;

       img{
           height: 10px;
       }
   }
}


   .buy-containers{        
       #btn-wallet{
     margin-top: 15px;
     width: 300px;
     height: 65px;
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

   .itens-buy-container{
    width: 600px;
    height: 160px;

    h2{
        margin-top: 15px;
        font-size: 14px;
    }

       .input-buy{
           margin-top: 10px;

           &:focus{
            color: #ffffff;
            font-size: 40px;
            font-weight: 600;
           }

           &::placeholder{
            color: #ffffff;
            font-size: 35px;
            font-weight: 600;
           }
       }
   }
}

#change-value{
   margin-top: -125px;
   img{

   }
}

#value-usdt-amount{
   font-size: 40px;
}

.div-coins{
   margin-left: 690px;
   margin-top: -600px;
   gap: 130px;

    div{
    display: flex;
    justify-content: center;
    color: rgba(255, 255, 255, 1);
    background: rgba(0, 0, 0, 0.52);
    border-radius: 10px;
    width: 100px;
    height: 40px;
    padding: 10px;
    gap: 15px;

    h3{
        margin-right: 7px;
        margin-top: 1px;
        font-size: 16px;
        font-weight: 600;
    }

   }
}
}

@media only screen and (min-width:1201px) and (max-width:1300px){
    height: 140vh;

.buy-title{
   margin-left: 40px;

   h1{
   color: #FF54A6;
   font-size: 30px;
   }

   p{
   color: #ffff;
   font-size: 18px;
   width: 500px;
   margin-top: 5px;
   margin-bottom: 15px;
   }

   a{
       color: #FF54A6;
       font-size: 18px;

       img{
           height: 10px;
       }
   }
}


   .buy-containers{        
       #btn-wallet{
     margin-top: 15px;
     width: 400px;
     height: 65px;
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

   .itens-buy-container{
    width: 600px;
    height: 180px;

    h2{
        margin-top: 25px;
        font-size: 17px;
    }

       .input-buy{
           margin-top: 15px;

           &:focus{
            color: #ffffff;
            font-size: 40px;
            font-weight: 600;
           }

           &::placeholder{
            color: #ffffff;
            font-size: 35px;
            font-weight: 600;
           }
       }
   }
}

#change-value{
   margin-top: -125px;
   img{

   }
}

#value-usdt-amount{
   font-size: 40px;
}

.div-coins{
   margin-left: 770px;
   margin-top: -640px;
   gap: 150px;

    div{
    display: flex;
    justify-content: center;
    color: rgba(255, 255, 255, 1);
    background: rgba(0, 0, 0, 0.52);
    border-radius: 10px;
    width: 100px;
    height: 40px;
    padding: 10px;
    gap: 15px;

    h3{
        margin-right: 7px;
        margin-top: 1px;
        font-size: 16px;
        font-weight: 600;
    }

   }
}
}

@media only screen and (min-width:1301px) and (max-width:1439px){
    height: 180vh;

.buy-title{
   margin-left: 40px;

   h1{
   color: #FF54A6;
   font-size: 30px;
   }

   p{
   color: #ffff;
   font-size: 18px;
   width: 500px;
   margin-top: 5px;
   margin-bottom: 15px;
   }

   a{
       color: #FF54A6;
       font-size: 18px;

       img{
           height: 10px;
       }
   }
}


   .buy-containers{        
       #btn-wallet{
     margin-top: 15px;
     width: 400px;
     height: 65px;
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

   .itens-buy-container{
    width: 600px;
    height: 200px;

    h2{
        margin-top: 25px;
        font-size: 17px;
    }

       .input-buy{
           margin-top: 15px;

           &:focus{
            color: #ffffff;
            font-size: 40px;
            font-weight: 600;
           }

           &::placeholder{
            color: #ffffff;
            font-size: 35px;
            font-weight: 600;
           }
       }
   }
}

#change-value{
   margin-top: -125px;
   img{

   }
}

#value-usdt-amount{
   font-size: 40px;
}

.div-coins{
   margin-left: 830px;
   margin-top: -640px;
   gap: 150px;

    div{
    display: flex;
    justify-content: center;
    color: rgba(255, 255, 255, 1);
    background: rgba(0, 0, 0, 0.52);
    border-radius: 10px;
    width: 100px;
    height: 40px;
    padding: 10px;
    gap: 15px;

    h3{
        margin-right: 7px;
        margin-top: 1px;
        font-size: 16px;
        font-weight: 600;
    }

   }
}
}

@media only screen and (min-width:1440px) and (max-width:1900px){
    height: 205vh;

    .buy-containers{        
       #btn-wallet{
     margin-top: 15px;
     width: 700px;
     height: 75px;
     border-radius: 15px;
     border: none;
     background: #FC72FF63;
     color: #FC72FF;
     font-weight: 700;
     font-size: 23px;
     cursor: pointer;        
     &:hover{
         opacity: 0.8;
     }
     &:active{
         opacity: 0.6;
     }
   }

}
    .div-coins{
   margin-left: 970px;
   margin-top: -710px;
   gap: 175px;

    div{
    display: flex;
    justify-content: center;
    color: rgba(255, 255, 255, 1);
    background: rgba(0, 0, 0, 0.52);
    border-radius: 10px;
    width: 120px;
    height: 50px;
    padding: 10px;
    gap: 15px;

    .img-plg{
        height: 30px;
        margin-left: -10px;
    }

    h3{
        margin-right: 7px;
        margin-top: 5px;
        font-size: 16px;
        font-weight: 600;
    }

   }
}
}


`