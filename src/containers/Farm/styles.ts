import styled from "styled-components";

export const Container = styled.div`
  background-color: #292929;
  height: 160vh;
  overflow-x:hidden;

  @media only screen and (min-width:100px) and (max-width:500px) {
    #button-menu{
      background-color:transparent;
      border: none;
      position: absolute;
      z-index:100;
      margin-left:10px;
      margin-top:10px;
    }
  }
  textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }
 

  .wallet-value{
    display: flex;
    align-items: center; 
    gap: 6px; 
    color: #ffff; 
    font-weight: 700; 
    margin-top: 15px;
    margin-left: 20px;
    padding-right: 35px;
  }

  .wallet-value-two{
    display: flex; 
    align-items: center; 
    gap: 5px; 
    color: #ffff; 
    font-weight: 700; 
    margin-top: 20px;
  }

  .wallet-value-three{
    display: flex;
    align-items: center; 
    gap: 6px; 
    color: #ffff; 
    font-weight: 700; 
    margin-top: 15px;
    margin-left: 25px;
  }

  .wallet-value-four{
    display: flex; 
    align-items: center; 
    gap: 5px; 
    color: #ffff; 
    font-weight: 700; 
    margin-top: 25px; 
    margin-left: 25px;
  }

  #container-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    margin-left:350px;
    margin-top: 40px;
    margin-bottom:100px;
  }

  .grids {
    background-color:rgba(173,163,163,0.10);
    border: 2px solid #CBCBCB;
  }

  #grid-one {
    grid-column: span 3; 
    width:1187px;
    height:130px;
    border-radius:20px;

  }

  #grid-two {
    grid-column: 1;
    width: 609px;
    height:700px;
    border-radius:20px;

  }

  #grid-three {
    grid-column: 2;
    grid-row: 2;
    width:567px;
    height:237px;
    border-radius:20px;
  }

  #grid-fuor {
    grid-column:2;
    grid-row: 3;
    margin-top:-460px;
    width:567px;
    height:450px;
    border-radius:20px;    
  }

  #text-one{
    color:#ffff;
    margin-left: 20px;
    margin-top:10px;
    font-weight:500;
    font-size: 17px;
  }

  #title-one{
    color:#E44F96;
    margin-left: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  #btn-learn{
    margin-top: 10px;
    margin-left: 20px;
    border:none;
    background-color:#FF3395;
    color:#ffff;
    font-weight: 600;
    font-size:17px;
    width: 200px;
    height: 28px;
    border-radius:10px;
    box-shadow: 0 0 10px 5px rgba(255, 51, 149, 0.7); 
    cursor: pointer;
  }

  #manage-title{
    color:#ffff;
    font-weight:600;
    margin-left: 50px;
    margin-top: 30px;
    font-size: 20px;
    margin-bottom:8px;
  }

  #manage-paragraph{
    color:#ADA3A3;
    margin-left:50px;
    font-size:15px;
    
  }

  #container-button{
    display: flex;
    gap:25px;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    background-color:transparent;
    width:541px;
    height:48px;
    border: 2px solid #FF3395;
    border-radius:10px;
    margin-left: 30px;
  
    
  }

  #line{
    color: #FF3395;
    border: 1px solid #FF3395;
    margin-top: 20px;
    width:550px;
    margin-left: 25px;
  }

  .btn-choose{
    width:160px;
    height:40px;
    border-radius:10px;
    color:#ffff;
    font-size:15px;
    font-weight:500;
  }

 

  #farm-paragraph{
    color:#ffff;
    font-size: 20px;
    font-weight:700;
    margin-left:40px;
    margin-top: 10px;
  }

  #farm-value{
    color:#ffff;
    margin-left:40px;
    margin-top:5px;
  }

  #box-farm-one{
    width: 500px;
    height: 140px;
    border: 2px solid #FF3395;
    border-radius: 10px;
    margin-left: 53px;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
  }

  #box-farm-two{
    width: 500px;
    height: 140px;
    border: 2px solid #FF3395;
    border-radius: 10px;
    margin-left: 53px;
    display: flex;
    gap: 260px;
  }

  .wallet{
    margin-left: 80px;
    width: 450px;
    height:35px;
    font-size: 17px;
    font-weight:600;
    color:#ffff;
    background-color:#FF3395;
    border-radius:10px;
    border: none;
    margin-top: 20px;
    cursor: pointer;
    &:hover{
      opacity: 0.8;
    }
  }

  #arrow{
    position: absolute;
    margin-left:290px;
    margin-top:-15px;
  }

  #box-value{
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin-left: 20px;
    width: 200px;
  }
  #input-value{
    font-size:30px;
    background-color:transparent;
    border:none;
    color:#ffff;
    margin-top: 20px;
    &::-webkit-inner-spin-button{
        -webkit-appearance: none;
    }
    &:hover{
        overflow-y: hidden;
    }
    &:focus{
        color: #ffffff;
        font-size: 30px;
        font-weight: 600;
        
    }
    &::placeholder{
        color: #ffffff;
        font-size: 30px;
        font-weight: 600;
        padding-top: 10px;
    }

  }

  #convert-time{
    color:#ffffff;
  }

  #box-balance{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    margin-left: 150px;
    padding: auto;
    width: 250px;
  }

  #usdt-container{
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
  }

  #usdt-container-two{
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    margin-left: 370px;
  }

  #usdt-value{
    font-size:30px;
    font-weight:700;
    color:#ffff;
  }

  #container-primary{
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 10px;
    margin-left: 20px;
  }

  #your-balance{
    color:#fff;
    font-weight:700;
    font-size:18px;
  }

  .container-balance-plg{
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    margin-top: 20px;
    align-items: center;
   

  }

 .container-primary-balance{
  display: flex;
  align-items: center;
  gap: 300px;
 }

 #paragraph-farm{
  font-size:14px;
  color: #707070;
 }

 #h1-plg{
  color:#ffff;
  font-size:18px;
  font-weight:700;
  display: flex;
  gap:8px;
  margin-top:10px;
  margin-left: -7px;
  margin-right: 7px;
 }

 #value-plg-balance{
  color:#ffff;
  font-weight:700;
  font-size: 20px;
 }

 #paragraph-usdt{
  font-size:14px;
  color: #707070;
 }

 #usdt-amount{
  color:#ffff;
  font-size:18px;
  font-weight:700;
  display: flex;
  gap:8px;
  margin-top:10px;
 }

 #dolar-amount{
    color:#ffff;
  font-weight:700;
  font-size: 20px;
 }


 .amount{
  margin-top: 50px;
  margin-left:250px;
 }

 #h1-genesis{
  color: #FF54A6;
  font-size: 40px;
  margin-left: 100px;
  margin-top: 40px;
 }

 #paragraph-mkt{
  color:#ffff;
  font-size:20px;
  margin-left: 100px;
  width:800px;
  margin-bottom:20px;
 }

 #link{
  color: #FF54A6;
  margin-left: 100px;
  font-size: 20px;
 }

 .container-primary-balance{
  gap:80px;
}

#dolar-amount{
  font-size:15px;
}


 @media only screen and (max-width:320px) {
  height:360vh;
  overflow-x: hidden;
  
  #h1-genesis{
    font-size:20px;
    margin-left:10px;
  }

  #paragraph-mkt{
    font-size:15px;
    margin-left: 3.5%;
    width:300px;
  }

  #link{
    font-size:20px;
    margin-left:3.5%;
  }

  #container-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    margin-left:10px;
    margin-top: 40px;
    margin-bottom:100px;
  }

  .grids {
    background-color:rgba(173,163,163,0.10);
    border: 2px solid #CBCBCB;
  }

  #grid-one {
    grid-column: span 3; 
    width:300px;
    height:90px;
    border-radius:20px;

  }

  #grid-two {
    grid-column: 1;
    width: 300px;
    height:500px;
    border-radius:20px;
  }

  #grid-three {
    grid-column: 1;
    grid-row: 2;
    width:300px;
    height:237px;
    border-radius:20px;
  }

  #grid-fuor {
    grid-column:1;
    grid-row: 50;
    width:300px;
    height:400px;
    border-radius:20px;    
  }

  #title-one{
    display: none;
  }

  #text-one{
    font-size:12px;
  }

  #btn-learn{
    width:120px;
    font-size:15px;
    margin-left:26%;
  }

  #container-button{
    width:280px;
    height:40px;
    margin-left:3%;
    padding:2px;

  }

  .btn-choose{
    width:100px;
    height:25px;
    font-size:12px;
  }

  #line{
    width:250px;
  }

  #farm-paragraph{
    font-size:15px;
  }

  #farm-value{
    font-size:12px;
  }

  #box-farm-one{
   width:285px;
   height:100px;
   margin-left:2%;
  }

  #box-value{
    gap:15px;
  }

  #input-value{
    font-size:20px;
    background-color:transparent;
    border:none;
    color:#ffff;
    margin-top: 10px;
    padding:10px;
    &::-webkit-inner-spin-button{
        -webkit-appearance: none;
    }
    &:hover{
        overflow-y: hidden;
    }
    &:focus{
        color: #ffffff;
        font-size: 20px;
        font-weight: 600;
        
    }
    &::placeholder{
        color: #ffffff;
        font-size: 20px;
        font-weight: 600;
       
    }

  }

  .wallet-value{
    display: flex;
    align-items: center; 
    gap: 6px; 
    color: #ffff; 
    font-weight: 700; 
    margin-top: 15px;
    margin-left: 20px;
    padding-right: 35px;
  }

  #box-balance{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:1px;
    margin-left: -60px;
    width: 250px;
    height:100px;
  }

  #arrow{
    margin-left:135px;
  }

  #box-farm-two{
   width:285px;
   height:100px;
   margin-left:2%;
  }

  #usdt-container-two{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1px;
    margin-left: 90px;
    width: 250px;
    height:100px;
  }

  #usdt-value{
    font-size:20px;
  }

  .wallet{
    width:200px;
    height:25px;
    font-size:15px;
    margin-top:4.5px;
    border-radius:5px;
    margin-left:48px;
  }

  #disable{
  display: none;
}

}

@media only screen and (min-width:321px) and (max-width:340px) {
  height:300vh;
  overflow-x: hidden;
  
  #h1-genesis{
    font-size:20px;
    margin-left:10px;
  }

  #paragraph-mkt{
    font-size:15px;
    margin-left: 3.5%;
    width:300px;
  }

  #link{
    font-size:20px;
    margin-left:3.5%;
  }

  #container-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    margin-left:10px;
    margin-top: 40px;
    margin-bottom:100px;
  }

  .grids {
    background-color:rgba(173,163,163,0.10);
    border: 2px solid #CBCBCB;
  }

  #grid-one {
    grid-column: span 3; 
    width: 19.2rem;
    height:90px;
    border-radius:20px;

  }

  #grid-two {
    grid-column: 1;
    width: 19.2rem;
    height:500px;
    border-radius:20px;
  }

  #grid-three {
    grid-column: 1;
    grid-row: 2;
    width: 19.2rem;
    height:237px;
    border-radius:20px;
  }

  #grid-fuor {
    grid-column:1;
    grid-row: 50;
    width: 19.2rem;
    height:400px;
    border-radius:20px;    
  }

  #title-one{
    display: none;
  }

  #text-one{
    font-size:12px;
  }

  #btn-learn{
    width:120px;
    font-size:15px;
    margin-left:26%;
  }

  #container-button{
    width:280px;
    height:40px;
    margin-left:3%;
    padding:2px;

  }

  .btn-choose{
    width:100px;
    height:25px;
    font-size:12px;
  }

  #line{
    width:250px;
  }

  #farm-paragraph{
    font-size:15px;
  }

  #farm-value{
    font-size:12px;
  }

  #box-farm-one{
   width:285px;
   height:100px;
   margin-left:2%;
  }

  #box-value{
    gap:15px;
  }

  #input-value{
    font-size:20px;
    background-color:transparent;
    border:none;
    color:#ffff;
    margin-top: 10px;
    padding:10px;
    &::-webkit-inner-spin-button{
        -webkit-appearance: none;
    }
    &:hover{
        overflow-y: hidden;
    }
    &:focus{
        color: #ffffff;
        font-size: 20px;
        font-weight: 600;
        
    }
    &::placeholder{
        color: #ffffff;
        font-size: 20px;
        font-weight: 600;
       
    }

  }

  .wallet-value{
    display: flex;
    align-items: center; 
    gap: 6px; 
    color: #ffff; 
    font-weight: 700; 
    margin-top: 15px;
    margin-left: 20px;
    padding-right: 35px;
  }

  #box-balance{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:1px;
    margin-left: -60px;
    width: 250px;
    height:100px;
  }

  #arrow{
    margin-left:135px;
  }

  #box-farm-two{
   width:285px;
   height:100px;
   margin-left:2%;
  }

  #usdt-container-two{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1px;
    margin-left: 90px;
    width: 250px;
    height:100px;
  }

  #usdt-value{
    font-size:20px;
  }

  .wallet{
    width:200px;
    height:25px;
    font-size:15px;
    margin-top:4.5px;
    border-radius:5px;
    margin-left:48px;
  }

  #disable{
  display: none;
}

}



@media only screen and (min-width:341px) and (max-width:380px) {
  height:300vh;
  overflow-x: hidden;
  
  #h1-genesis{
    font-size:20px;
    margin-left:10px;
  }

  #paragraph-mkt{
    font-size:15px;
    margin-left: 3.5%;
    width:300px;
  }

  #link{
    font-size:20px;
    margin-left:3.5%;
  }

  #container-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    margin-left:10px;
    margin-top: 40px;
    margin-bottom:100px;
  }

  .grids {
    background-color:rgba(173,163,163,0.10);
    border: 2px solid #CBCBCB;
  }

  #grid-one {
    grid-column: span 3; 
    width: 21.2rem;
    height:90px;
    border-radius:20px;

  }

  #grid-two {
    grid-column: 1;
    width: 21.2rem;
    height:500px;
    border-radius:20px;
  }

  #grid-three {
    grid-column: 1;
    grid-row: 2;
    width: 21.2rem;
    height:237px;
    border-radius:20px;
  }

  #grid-fuor {
    grid-column:1;
    grid-row: 50;
    width: 21.2rem;
    height:400px;
    border-radius:20px;    
  }

  #title-one{
    display: none;
  }

  #text-one{
    font-size:12px;
  }

  #btn-learn{
    width:120px;
    font-size:15px;
    margin-left:26%;
  }

  #container-button{
    width:300px;
    height:40px;
    margin-left:5%;
    padding:2px;

  }

  .btn-choose{
    width:100px;
    height:25px;
    font-size:12px;
  }

  #line{
    width:290px;
  }

  #farm-paragraph{
    font-size:15px;
  }

  #farm-value{
    font-size:12px;
  }

  #box-farm-one{
   width:310px;
   height:100px;
   margin-left:4%;
  }

  #box-value{
    gap:15px;
  }

  #input-value{
    font-size:20px;
    background-color:transparent;
    border:none;
    color:#ffff;
    margin-top: 10px;
    padding:10px;
    &::-webkit-inner-spin-button{
        -webkit-appearance: none;
    }
    &:hover{
        overflow-y: hidden;
    }
    &:focus{
        color: #ffffff;
        font-size: 20px;
        font-weight: 600;
        
    }
    &::placeholder{
        color: #ffffff;
        font-size: 20px;
        font-weight: 600;
       
    }

  }

  .wallet-value{
    display: flex;
    align-items: center; 
    gap: 6px; 
    color: #ffff; 
    font-weight: 700; 
    margin-top: 15px;
    margin-left: 20px;
    padding-right: 35px;
  }

  #box-balance{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:1px;
    margin-left: -60px;
    width: 250px;
    height:100px;
  }

  #arrow{
    margin-left:150px;
  }

  #box-farm-two{
   width:310px;
   height:100px;
   margin-left:4%;
  }

  #usdt-container-two{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1px;
    margin-left: 90px;
    width: 250px;
    height:100px;
  }

  #usdt-value{
    font-size:20px;
  }

  .wallet{
    width:200px;
    height:25px;
    font-size:15px;
    margin-top:4.5px;
    border-radius:5px;
    margin-left:70px;
  }

  #disable{
  display: none;
}


.amount{
  margin-left:40px;
}

}

@media only screen and (min-width:403px) and (max-width:430px) {
  height:220vh;
  overflow-x: hidden;
  
  #h1-genesis{
    font-size:20px;
    margin-left:10px;
  }

  #paragraph-mkt{
    font-size:15px;
    margin-left: 3.5%;
    width:400px;
  }

  #link{
    font-size:20px;
    margin-left:3.5%;
  }

  #container-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    margin-left:10px;
    margin-top: 40px;
    margin-bottom:100px;
  }

  .grids {
    background-color:rgba(173,163,163,0.10);
    border: 2px solid #CBCBCB;
  }

  #grid-one {
    grid-column: span 3; 
    width:390px;
    height:90px;
    border-radius:20px;

  }

  #grid-two {
    grid-column: 1;
    width: 390px;
    height:500px;
    border-radius:20px;
  }

  #grid-three {
    grid-column: 1;
    grid-row: 2;
    width:390px;
    height:237px;
    border-radius:20px;
  }

  #grid-fuor {
    grid-column:1;
    grid-row: 50;
    width:390px;
    height:400px;
    border-radius:20px;    
  }

  #title-one{
    display: none;
  }

  #text-one{
    font-size:14px;
  }

  #btn-learn{
    width:120px;
    font-size:15px;
    margin-left:34%;
    margin-top:20px;
  }

  #container-button{
    width:360px;
    height:40px;
    margin-left:3%;
    padding:2px;

  }

  .btn-choose{
    width:100px;
    height:30px;
    font-size:12px;
  }

  #line{
    width:340px;
  }

  #farm-paragraph{
    font-size:15px;
  }

  #farm-value{
    font-size:12px;
  }

  #box-farm-one{
   width:370px;
   height:100px;
   margin-left:2%;
  }

  #box-value{
    gap:15px;
  }

  #input-value{
    font-size:20px;
    background-color:transparent;
    border:none;
    color:#ffff;
    margin-top: 10px;
    padding:10px;
    &::-webkit-inner-spin-button{
        -webkit-appearance: none;
    }
    &:hover{
        overflow-y: hidden;
    }
    &:focus{
        color: #ffffff;
        font-size: 20px;
        font-weight: 600;
        
    }
    &::placeholder{
        color: #ffffff;
        font-size: 20px;
        font-weight: 600;
       
    }

  }


  .wallet-value{
    display: flex;
    align-items: center; 
    gap: 6px; 
    color: #ffff; 
    font-weight: 700; 
    margin-top: 15px;
    margin-left: 60px;
    padding-right: 35px;
  }

  .wallet-value-two{
    margin-left:60px;
  }

  #box-balance{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:1px;
    margin-left: -60px;
    width: 250px;
    height:100px;
  }

  #arrow{
    margin-left:150px;
  }

  #box-farm-two{
   width:370px;
   height:100px;
   margin-left:2%;
  }

  #usdt-container-two{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1px;
    margin-left: 140px;
    width: 250px;
    height:100px;
  }

  .wallet-value-four{
    margin-left:40px;
  }

  #usdt-value{
    font-size:20px;
  }

  .wallet{
    width:200px;
    height:25px;
    font-size:15px;
    margin-top:4.5px;
    border-radius:5px;
    margin-left:90px;
  }

  .amount{
    margin-left:70px;
  }

  #disable{
  display: none;
 }

}


@media only screen and (min-width:381px) and (max-width:402px) {
  height:250vh;
  overflow-x: hidden;
  
  #h1-genesis{
    font-size:20px;
    margin-left:10px;
  }

  #paragraph-mkt{
    font-size:15px;
    margin-left: 3.5%;
    width:300px;
  }

  #link{
    font-size:20px;
    margin-left:3.5%;
  }

  #container-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    margin-left:10px;
    margin-top: 40px;
    margin-bottom:100px;
  }

  .grids {
    background-color:rgba(173,163,163,0.10);
    border: 2px solid #CBCBCB;
  }

  #grid-one {
    grid-column: span 3; 
    width: 22.5rem;
    height:90px;
    border-radius:20px;

  }

  #grid-two {
    grid-column: 1;
    width: 22.5rem;
    height:500px;
    border-radius:20px;
  }

  #grid-three {
    grid-column: 1;
    grid-row: 2;
    width: 22.5rem;
    height:237px;
    border-radius:20px;
  }

  #grid-fuor {
    grid-column:1;
    grid-row: 50;
    width: 22.5rem;
    height:400px;
    border-radius:20px;    
  }

  #title-one{
    display: none;
  }

  #text-one{
    font-size:12px;
  }

  #btn-learn{
    width:120px;
    font-size:15px;
    margin-left:26%;
  }

  #container-button{
    width:300px;
    height:40px;
    margin-left:5%;
    padding:2px;

  }

  .btn-choose{
    width:100px;
    height:25px;
    font-size:12px;
  }

  #line{
    width:290px;
  }

  #farm-paragraph{
    font-size:15px;
  }

  #farm-value{
    font-size:12px;
  }

  #box-farm-one{
   width:310px;
   height:100px;
   margin-left:4%;
  }

  #box-value{
    gap:15px;
  }

  #input-value{
    font-size:20px;
    background-color:transparent;
    border:none;
    color:#ffff;
    margin-top: 10px;
    padding:10px;
    &::-webkit-inner-spin-button{
        -webkit-appearance: none;
    }
    &:hover{
        overflow-y: hidden;
    }
    &:focus{
        color: #ffffff;
        font-size: 20px;
        font-weight: 600;
        
    }
    &::placeholder{
        color: #ffffff;
        font-size: 20px;
        font-weight: 600;
       
    }

  }

  .wallet-value{
    display: flex;
    align-items: center; 
    gap: 6px; 
    color: #ffff; 
    font-weight: 700; 
    margin-top: 15px;
    margin-left: 20px;
    padding-right: 35px;
  }

  #box-balance{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:1px;
    margin-left: -60px;
    width: 250px;
    height:100px;
  }

  #arrow{
    margin-left:150px;
  }

  #box-farm-two{
   width:310px;
   height:100px;
   margin-left:4%;
  }

  #usdt-container-two{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1px;
    margin-left: 90px;
    width: 250px;
    height:100px;
  }

  #usdt-value{
    font-size:20px;
  }

  .wallet{
    width:200px;
    height:25px;
    font-size:15px;
    margin-top:4.5px;
    border-radius:5px;
    margin-left:70px;
  }

  #disable{
  display: none;
}


.amount{
  margin-left:40px;
}

}

@media only screen and (min-width:1442px) and (max-width:1900px) {
  overflow-y: hidden;
  #container-grid{
    margin-left: 10%;
  }
  #button-menu{
    display: none;
  }
}

@media only screen and (min-width:431px){
  #button-menu{
    display: none;
  }
}
`
