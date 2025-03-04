import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { QRCodeCanvas } from "qrcode.react";

import axios from "axios";

function App() {
  const [text, setText] = useState("");

  return (
    <div>
      <h1>Gerador de QR Code</h1>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      {text && <QRCodeCanvas value={text} />}

    </div>
  );
}

export default App;