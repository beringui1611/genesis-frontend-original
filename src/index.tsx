import React from 'react';
import ReactDOM from 'react-dom';
import MyRoutes from './routes/Router';
import GlobalStyles from './styles/globalStyles';
import { Slide, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from "styled-components"; 

const StyledToastContainer = styled(ToastContainer)`
.Toastify__toast {
  background-color:#ffff;
 

}

/* Defina o estilo padrão do ToastContainer */
.Toastify__toast-container {
  width: 320px; /* Defina a largura desejada */
  position: fixed; /* Mantenha o ToastContainer fixo na tela */
  z-index: 9999; /* Garanta que o ToastContainer esteja acima de outros elementos */
  
}

/* Defina o estilo padrão do toast */
.Toastify__toast {
  background-color: #ffff; /* Cor de fundo */
  color: #FF3395; 
  position:absolute;
  left:-1500px;
  width:320px;
}

/* Defina o estilo padrão da barra de progresso */
.Toastify__progress-bar {
  background-color: #FF3395; /* Cor da barra de progresso */
}

/* Estilize o botão de fechar */
.Toastify__close-button {
  color: #fff; /* Cor do ícone do botão de fechar */
}

/* Defina o estilo para o toast de aviso (warning) */
.Toastify__toast--warning {
  background-color: #FF3395; /* Cor de fundo para warning */
  color: #333; /* Cor do texto para warning */
}


.Toastify__toast-icon {
    display: none;
  }


`;

export default StyledToastContainer;

ReactDOM.render(
  <>
    <MyRoutes />
    <GlobalStyles />
    <StyledToastContainer 
    autoClose={5000}
    transition={Slide}
    />
  </>,
  document.getElementById('root')
);
