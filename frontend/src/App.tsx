import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { QRCodeCanvas } from "qrcode.react";
import styled from "styled-components";
import axios from "axios";

const StyledButton = styled.button`
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
    margin: 10px;

    &:hover {
        background-color: #0056b3;
    }
`;

function App() {
  const [qrValue, setQrValue] = useState("");

  const gerarQRCode = () => {
    const novoValor = "https://meusite.com/" + Math.floor(Math.random() * 1000); 
    setQrValue(novoValor);
};

  return (
    <div>
        <h1>Gerador de QR Code</h1>
        <StyledButton onClick={gerarQRCode}>Gerar QR Code</StyledButton>
        {qrValue && <QRCodeCanvas value={qrValue} />}
    </div>
);
}

export default App;
