import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <table>
          <thead>
            <tr>
              <td>
                Locatie
              </td>
              <td>
                Tijdsverschil (*)
              </td>
            </tr>
            <tr>
              <td>
                Montreal
              </td>
              <td>
                -6
              </td>
            </tr>
            <tr>
              <td>
                Sydney
              </td>
              <td>
                +8
              </td>
            </tr>
            <tr>
              <td>
                Perth
              </td>
              <td>
                +6
              </td>
            </tr>
            <tr>
              <td>
                EDT/EST
              </td>
              <td>
                -6
              </td>
            </tr>
            <tr>
              <td>
                CT/CST
              </td>
              <td>
                -7
              </td>
            </tr>
            <tr>
              <td>
                MST/MDT
              </td>
              <td>
                -8
              </td>
            </tr>
            <tr>
              <td>
                MST/MDT
              </td>
              <td>
                -8
              </td>
            </tr>
          </thead>
          <caption>(*) In uren ten opzichte van Brussel (CET/CEST)</caption>
        </table>
      </header>
    </div>
  );
}

export default App;
