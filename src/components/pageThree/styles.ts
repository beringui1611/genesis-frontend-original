import styled, { keyframes } from "styled-components";


const rainbow = keyframes`
    0%{background-position:0% 51%}
    50%{background-position:100% 50%}
    100%{background-position:0% 51%}
`



export const ContainerThree = styled.div`
#box-midias{
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
        width: 150px;
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
    margin-left: 282px;
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
        padding-left: 280px;
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




@media screen and (min-width: 342px) and (max-width:365px) {
       flex-direction: column-reverse;
       
       #box-midias{
       display: none;
       }
       
       .container-phone{
        margin-left: -260px;
       }

       #cellphone{
        width:600px;
        margin-top:750px;
       }

    .notification{
    position: relative;
    z-index: 89;
    bottom: 640px;
    left: 385px;
    width:180px;
}

    .qr-code{
    position: relative;
    bottom: 400px;
    left: 180px;
    z-index: 90;
    width: 180px;
}

#btn-join{
    position:absolute;
    top:2090px;
    margin-left:80px;
    width:120px;
    height:30px;
}



.buttons-containers{
  flex-direction: column;
  position:absolute;
  margin-top:1350px;
  margin-left:30px;
  gap:20px;
  button{
    width:300px;
    height:80px;
    h1{
        margin-left:-180px;
    }
  }
 }
}

    
    @media screen and (min-width:320px) and (max-width:341px){
       
         #box-midias{
         display:none;
         }
         .container-phone{
           margin-left:-500px;
         }
       #cellphone{
        width:600px;
        margin-top:700px;
        margin-left:216px;
       }

       .notification{
        position: relative;
        z-index: 89;
        bottom: 600px;
        left: 595px;
        width:180px;
        }
       .qr-code{
        margin-right:100px;
        width:100px;
        position: relative;
        bottom: 400px;
        left: 410px;
        z-index: 90;
        width: 150px;
       }

    #btn-join{
        
        position:absolute;
        top:2040px;
        margin-left:50px;
        width:120px;
        height:30px;
    }
       .buttons-containers{
  flex-direction: column;
  position:absolute;
  margin-top:1275px;
  margin-left:60px;
  gap:20px;
  button{
    width:200px;
    height:70px;
    h1{
        margin-left:-236px;
    }
  }
 }
}


@media screen and (min-width: 366px) and (max-width:385px) {
       flex-direction: column-reverse;
       
       #box-midias{
       display: none;
       }
       
       .container-phone{
        margin-left: -260px;
       }

       #cellphone{
        width:600px;
        margin-top:750px;
       }

    .notification{
    position: relative;
    z-index: 89;
    bottom: 640px;
    left: 385px;
    width:180px;
}

    .qr-code{
    position: relative;
    bottom: 400px;
    left: 180px;
    z-index: 90;
    width: 180px;
}

#btn-join{
    position:absolute;
    top:2070px;
    margin-left:80px;
    width:120px;
    height:30px;
}



.buttons-containers{
  flex-direction: column;
  position:absolute;
  margin-top:1350px;
  margin-left:30px;
  gap:20px;
  button{
    width:300px;
    height:80px;
    h1{
        margin-left:-180px;
    }
  }
 }
}


@media screen and (min-width: 386px) and (max-width:402px) {
       flex-direction: column-reverse;
       
       #box-midias{
       display: none;
       }
       
       .container-phone{
        margin-left: -260px;
       }

       #cellphone{
        width:600px;
        margin-top:750px;
       }

    .notification{
    position: relative;
    z-index: 89;
    bottom: 640px;
    left: 385px;
    width:180px;
}

    .qr-code{
    position: relative;
    bottom: 400px;
    left: 180px;
    z-index: 90;
    width: 180px;
}

#btn-join{
    position:absolute;
    top:2150px;
    margin-left:80px;
    width:120px;
    height:30px;
}



.buttons-containers{
  flex-direction: column;
  position:absolute;
  margin-top:1350px;
  margin-left:30px;
  gap:20px;
  button{
    width:300px;
    height:80px;
    h1{
        margin-left:-180px;
    }
  }
 }
}

@media screen and (min-width: 403px) and (max-width:442px) {
       flex-direction: column-reverse;
       
       #box-midias{
       display: none;
       }
       
       .container-phone{
        margin-left: -260px;
       }

       #cellphone{
        width:600px;
        margin-top:750px;
       }

    .notification{
    position: relative;
    z-index: 89;
    bottom: 640px;
    left: 385px;
    width:180px;
}

    .qr-code{
    position: relative;
    bottom: 400px;
    left: 180px;
    z-index: 90;
    width: 180px;
}

#btn-join{
    position:absolute;
    top:2065px;
    margin-left:80px;
    width:120px;
    height:30px;
}



.buttons-containers{
  flex-direction: column;
  position:absolute;
  margin-top:1350px;
  margin-left:60px;
  gap:20px;
  button{
    width:300px;
    height:80px;
    h1{
        margin-left:-180px;
    }
  }
 }
}



`