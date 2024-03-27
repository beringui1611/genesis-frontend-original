import styled from "styled-components";

export const Container = styled.div`
background-color: rgba(41, 41, 41, 1);
height: 130vh;
overflow-x:hidden;


#button-whitepaper{
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

@media only screen and (max-width: 320px){
    height: 350vh;
    .containers-pdf{
        overflow-y:hidden;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 200px;
    margin-left: 15px;
    gap: 30px;
    
    div{
        display: flex;
        background-color:rgba(66, 65, 65, 0.5);
        border:3px solid rgba(203, 203, 203, 8);
        border-radius: 43px ;
        width: 294px;
        height: 172px;
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
}

@media only screen and (min-width:321px) and (max-width:340px){
    height: 300vh;
    .containers-pdf{
    overflow-y:hidden;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 200px;
    margin-left: 15px;
    gap: 30px;
    
    div{
        display: flex;
        background-color:rgba(66, 65, 65, 0.5);
        border:3px solid rgba(203, 203, 203, 8);
        border-radius: 43px ;
        width: 294px;
        height: 172px;
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
}

@media only screen and (min-width:341px) and (max-width:380px){
    height: 300vh;
    .containers-pdf{
    overflow-y:hidden;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 200px;
    margin-left: 15px;
    gap: 30px;
    
    div{
        display: flex;
        background-color:rgba(66, 65, 65, 0.5);
        border:3px solid rgba(203, 203, 203, 8);
        border-radius: 43px ;
        width: 19.7rem;
        height: 172px;
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
}

@media only screen and (min-width:381px) and (max-width:402px){
    height: 250vh;
    .containers-pdf{
        overflow-y:hidden;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 200px;
    margin-left: 15px;
    gap: 30px;
    
    div{
        display: flex;
        background-color:rgba(66, 65, 65, 0.5);
        border:3px solid rgba(203, 203, 203, 8);
        border-radius: 43px ;
        width: 22rem;
        height: 172px;
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
}

@media only screen and (min-width:403px) and (max-width:430px){
    height: 230vh;
    .containers-pdf{
        overflow-y:hidden;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 200px;
    margin-left: 15px;
    gap: 30px;
    
    div{
        display: flex;
        background-color:rgba(66, 65, 65, 0.5);
        border:3px solid rgba(203, 203, 203, 8);
        border-radius: 43px ;
        width: 23.5rem;
        height: 172px;
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
}

@media only screen and (min-width:431px) and (max-width:470px){
    height: 200vh;
    .containers-pdf{
        overflow-y:hidden;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 200px;
    margin-left: 15px;
    gap: 30px;
    
    div{
        display: flex;
        background-color:rgba(66, 65, 65, 0.5);
        border:3px solid rgba(203, 203, 203, 8);
        border-radius: 43px ;
        width: 25rem;
        height: 172px;
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
}

@media only screen and (min-width:471px) and (max-width:509px){
    height: 200vh;
    .containers-pdf{
        overflow-y:hidden;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 200px;
    margin-left: 15px;
    gap: 30px;
    
    div{
        display: flex;
        background-color:rgba(66, 65, 65, 0.5);
        border:3px solid rgba(203, 203, 203, 8);
        border-radius: 43px ;
        width: 27.5rem;
        height: 172px;
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
}

@media only screen and (min-width:510px) and (max-width:550px){
    height: 220vh;
    .containers-pdf{
        overflow-y:hidden;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 200px;
    margin-left: 15px;
    gap: 30px;
    
    div{
        display: flex;
        background-color:rgba(66, 65, 65, 0.5);
        border:3px solid rgba(203, 203, 203, 8);
        border-radius: 43px ;
        
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
}

@media only screen and (min-width:551px) and (max-width:600px){
    height: 220vh;
    .containers-pdf{
        overflow-y:hidden;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 200px;
    margin-left: 15px;
    gap: 30px;
    
    div{
        display: flex;
        background-color:rgba(66, 65, 65, 0.5);
        border:3px solid rgba(203, 203, 203, 8);
        border-radius: 43px ;
        width: 32.5rem;
        height: 13rem;
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
}

@media only screen and (min-width:601px) and (max-width:651px){
    height: 220vh;
    .containers-pdf{
        overflow-y:hidden;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 200px;
    margin-left: 15px;
    gap: 30px;
    
    div{
        display: flex;
        background-color:rgba(66, 65, 65, 0.5);
        border:3px solid rgba(203, 203, 203, 8);
        border-radius: 43px ;
        width: 35.5rem;
        height: 13rem;
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
}

@media only screen and (min-width:652px) and (max-width:700px){
    height: 220vh;
    .containers-pdf{
        overflow-y:hidden;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 200px;
    margin-left: 15px;
    gap: 30px;
    
    div{
        display: flex;
        background-color:rgba(66, 65, 65, 0.5);
        border:3px solid rgba(203, 203, 203, 8);
        border-radius: 43px ;
        width: 39rem;
        height: 13rem;
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
}

@media only screen and (min-width:701px) and (max-width:767px){
    height: 230vh;
    .containers-pdf{
        overflow-y:hidden;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 200px;
    margin-left: 15px;
    gap: 30px;
    
    div{
        display: flex;
        background-color:rgba(66, 65, 65, 0.5);
        border:3px solid rgba(203, 203, 203, 8);
        border-radius: 43px ;
        width: 42rem;
        height: 14rem;
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
}

@media only screen and (min-width:768px) and (max-width:868px){
    height: 230vh;
    .containers-pdf{
        overflow-y:hidden;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 200px;
    margin-left: 15px;
    gap: 30px;
    
    div{
        display: flex;
        background-color:rgba(66, 65, 65, 0.5);
        border:3px solid rgba(203, 203, 203, 8);
        border-radius: 43px ;
        width: 46rem;
        height: 14rem;
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
}

@media only screen and (min-width:869px) and (max-width:969px){
    height: 240vh;
    .containers-pdf{
        overflow-y:hidden;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 200px;
    margin-left: 15px;
    gap: 30px;
    
    div{
        display: flex;
        background-color:rgba(66, 65, 65, 0.5);
        border:3px solid rgba(203, 203, 203, 8);
        border-radius: 43px ;
        width: 52.4rem;
        height: 14rem;
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
}

@media only screen and (min-width:970px) and (max-width:1023px){
    height: 130vh;

    .whitepaper-title{
    display: flex;
    justify-content: center;
    margin-top: 70px;
    margin-bottom: 80px;
    h1{
        font-size: 30px;
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
        width: 17rem;
        height: 10rem;
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
            font-size: 17px;
        }
    }

}
}

@media only screen and (min-width:1024px) and (max-width:1123px){
    height: 140vh;

    .whitepaper-title{
    display: flex;
    justify-content: center;
    margin-top: 70px;
    margin-bottom: 80px;
    h1{
        font-size: 30px;
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
        width: 19rem;
        height: 11rem;
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
            font-size: 17px;
        }
    }

}
}

@media only screen and (min-width:1124px) and (max-width:1224px){
    height: 140vh;

    .whitepaper-title{
    display: flex;
    justify-content: center;
    margin-top: 70px;
    margin-bottom: 80px;
    h1{
        font-size: 30px;
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
        width: 21rem;
        height: 12rem;
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
            font-size: 17px;
        }
    }

}
}

@media only screen and (min-width:1225px) and (max-width:1325px){
    height: 150vh;

    .whitepaper-title{
    display: flex;
    justify-content: center;
    margin-top: 70px;
    margin-bottom: 80px;
    h1{
        font-size: 30px;
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
        width: 23rem;
        height: 13rem;
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
            font-size: 17px;
        }
    }

}
}

@media only screen and (min-width:1326px) and (max-width:1439px){
    height: 150vh;

    .whitepaper-title{
    display: flex;
    justify-content: center;
    margin-top: 70px;
    margin-bottom: 80px;
    h1{
        font-size: 30px;
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
        width: 25rem;
        height: 14rem;
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
            font-size: 17px;
        }
    }

}
}

@media only screen and (min-width:1440px) and (max-width:1540px){
    height: 180vh;
    overflow-y: hidden;
    .whitepaper-title{
    display: flex;
    justify-content: center;
    margin-top: 70px;
    margin-bottom: 80px;
    h1{
        font-size: 30px;
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
        width: 26rem;
        height: 14rem;
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
            font-size: 17px;
        }
    }

}
}
@media only screen and (min-width:1541px) and (max-width:1900px){
    overflow-y: hidden;
    height: 180vh;
}
`