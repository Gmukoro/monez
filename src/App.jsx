import { useState } from "react";
import monez from "./assets/monez-logo1.jpg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app__heading">
        <img src={monez} alt="monez-logo" />
        <h1>Monez360 Photobooth</h1>
      </div>
      <p className="app__desc">Creating beautiful memories...</p>
      <div className="card">
        <h3>QUOTATION FOR 360 PHOTOBOOTH AND ITS ACCESSORIES FOR AN EVENT</h3>
        <table>
          <tr>
            <th class="sn-column">S/N</th>
            <th>DESCRIPTION</th>
            <th>QUANTITY</th>
            <th>UNIT PRICE(N)</th>
            <th>AMOUNT9(N)</th>
          </tr>
          <tr>
            <td>1</td>
            <td>360 Photobooth and Camera</td>
            <td>FOUR HOURS</td>
            <td>130,000</td>
            <td>130,000</td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              Customized overlay, music box, props, operators and lightings
            </td>
            <td>FOUR HOURS</td>
            <td>30,000</td>
            <td>30,000</td>
          </tr>
          <tr>
            <td></td>
            <td>TOTAL</td>
            <td></td>
            <td></td>
            <td>160,000</td>
          </tr>
        </table>
      </div>
      <p className="read-the-docs"></p>
    </>
  );
}

export default App;
