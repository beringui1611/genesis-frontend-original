import styled from "styled-components";
import Language from '../../assets/Header-images/language.png';


export const Container = styled.div`
height:10vh;
width: 100vw;
margin-top: 10px;
margin-left: 40px;

#div-one{
    display: flex;
    align-items: center;

    select {
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            background: url(${Language});
            background-size: cover;
            padding: 10px; 
            border: none; 
            width: 40px; 

          
          }

        }


#polygon-rede{
    height: 27px;
    margin-left: 1px;
}



#bnb-rede{
    margin-left:1px;
    height: 27px;
    width:27px;
}


#box-button{
    display:flex;
    margin-left: 60px;
    margin-bottom: 5px;
    gap: 50px;
}

#box-lg{
    display: flex;
    gap: 50px;
    margin-left: 80px;

    option{
        border: none;
    }
    select{
        border: none;
        cursor: pointer;
    }
    
}


#button-wallet {
    border-radius: 20px;
    border: none;
    font-weight: 900;
    font-size: 12px;
    width: 179px;
    height: 37px;
    background-color: #FF3395;
    color: #ffff;
    box-shadow: 0 0 10px 5px rgba(255, 51, 149, 0.7); 
    cursor: pointer;
    &:hover{
        box-shadow: 0 0 20px 5px rgba(255, 51, 149, 0.9); 
    }
}



#nav-bar{
    display: flex;
    align-items: center;
    gap: 80px;
    text-decoration: none;
    margin-left:50px;
    
    a{
        color:#ADA3A3;
        font-weight: bold;
        position: relative;
        &::after{
            content: " ";
            width: 0%;
            height: 3px;
            background: rgba(255, 51, 149, 1);
            position: absolute;
            bottom: -4px;
            left: 50%;
            transform: translateX(-50%);
            transition: 0.5s ease-in-out;
        }
        &:hover::after{
            width: 100%;
        }
    }
    
}


#button-conected{
    background-color:#FF3395;
    border:1px solid #FF3395;
    height: 37px;
    display: inline-block;
    width: 200px;
    font-size: 14px;
    padding-left: 10px;
    font-weight: 700;
    color:#ffff;
    margin-left: -20px;
    border-radius: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;

}



#menu-nav{
    position: absolute;
    top:80px;
    right:80px;
    width: 200px;
    height: 80px;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    border-radius: 10px;
}


#btn-desconnect{
    width:200px;
    height:30px;
    border:none;
    background-color:transparent;
    font-size: 15px;
    font-weight:600;
    color:#ffff;
    cursor: pointer;
    border-radius:10px;

    &:hover{
        opacity:0.5;
    }
}


#block-explorer{
    font-weight:600;
    color:#ffff;
    font-size: 15px;

    &:hover{
        opacity:0.5;
    }

}


#box-network{
    display: flex;
    flex-direction: row;

    .arrow-icon{
        margin-top: 10px;
    }
}


#box-rede-button{
    display: flex;
    flex-direction: column-reverse;
    margin-left: 10px;
    position: absolute;

}


#btn-net{
    background-color:transparent;
    border: none;
    cursor: pointer;
}

#rpc{
   border-radius:20px;
   border:none;
   width: 150px;
   height:30px;
   background-color:#8E98A8;
   color:#ffff;
   font-weight:700;
   display:flex;
   align-items: center;
   gap:8px;
   cursor: pointer;
   margin-top: 6px;

   
}

#rpc-polygon{
   border-radius:20px;
   border:none;
   width: 150px;
   height:30px;
   background-color:#ffff;
   color:#C35BEA;
   font-weight:700;
   display:flex;
   align-items: center;
   gap:15px;
   cursor: pointer;
   margin-top: 6px;
   
}



`
