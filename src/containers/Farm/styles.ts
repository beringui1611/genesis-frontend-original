import styled from "styled-components";

export const Container = styled.div`
  background-color: #292929;
  height: 160vh;
  overflow-x: hidden;
  overflow-y: hidden;

  textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
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
    border: 1px solid #FF3395;
    border-radius: 10px;
    margin-left: 53px;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
  }

  #box-farm-two{
    width: 500px;
    height: 140px;
    border: 1px solid #FF3395;
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
    flex-direction:column;
    align-items: center;
    gap: 40px;
  }

  #usdt-value{
    font-size:30px;
    font-weight:700;
    color:#ffff;
  }
`;
