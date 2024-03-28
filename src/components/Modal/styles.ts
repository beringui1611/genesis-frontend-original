import styled from "styled-components";

export const Container = styled.div`
position: fixed;
left: 25%;
top: 20%;
width: 995px;
height:591px;
z-index: 99;


  

@media screen and (max-width:320px) and (max-width:500px){
    display: none;
}

#box-primaryu{
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
@media screen and (max-width:320px) and (max-width:500px){
    display: none;
}
}

#box-one{
    width:583px;
    height:591px;
    background-color:#353535;
    border-radius:53px;
    z-index:99;
    position: absolute;
    display: flex;
    flex-direction: column;
    padding-left: 100px;

    h2{
        color: #ffff;
        margin-top: 150px;
        margin-bottom: 10px;
    }

    p{
        color: #ffff;
        width:440px;
    }

    #close-button{
    margin-top: 25px;
    margin-left: 10px;
}
  #word{
    margin-left: -20px;
    margin-top: -20px;
  }
}



#box-two{
width:602px;
height: 591px;
background-color:#545454 ;
position: absolute;
top: 0px;
right: 0px;
z-index:98;
border-radius: 0px 53px 53px 0px ;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding-left: 150px;


}



#container-button-modal{
    display: flex;
    align-items: center;
    margin-top: 120px;
    gap:100px;
    margin-left: -18px;
}

#container-letters{
    display: flex;
    margin-right:-20px;
    margin-left: -15px;
    margin-top: 5px;
    gap: 92px;
}

.right-one{
    margin-left: -10px;
}

#trust{
    margin-right: 40px;
}

.right-three{
    margin-left: 5px;
}

#logo-container{
    margin-left: 100px;
    margin-top: 80px;
    img{
        height: 55px;
    }
}

.btn{
    width:72px;
    height:71px;
    border:1px solid #FF3395;
    border-radius: 18px;
    cursor: pointer;
    &:hover{
        opacity: 0.8;
    }

}

#text-create-wallet{
    font-size: 20px;
    color:#ffff;
  
}


#btn-create{
    border-radius: 20px;
    border: none;
    font-weight: 700;
    font-size: 11px;
    width: 210px;
    height: 30px;
    background-color: #FF3395;
    color: #ffff;
    box-shadow: 0 0 10px 5px rgba(255, 51, 149, 0.7); 
    cursor: pointer;
    padding-left: 65px;
    padding-top:6px;
    font-size: 14px;
    &:hover{
        box-shadow: 0 0 20px 5px rgba(255, 51, 149, 0.9); 
    }
}

`

export const Background = styled.div`
height: 100vh;
width: 1900px;
z-index: 9;
background-color: rgba(0,0,0,0.6);
position: fixed;
margin-left: -1639px;
margin-top: -67px;

@media screen and (max-width:320px) and (max-width:500px){
    display: none;
}

`

