import logo from './logo.svg';
import './modules/table'
import './App.css';
import Table from './modules/table';
import { toPng } from 'html-to-image';
import { useState } from 'react';

function RemoveAtIndex(list, index)
{
  return list.filter(e => e !== list.at(index));
}

function App() {

  const [tableContents, setTableContents] = useState([{eset: "", leirasok: ["", "", ""]}]);

  return (
    <div id='container'>
      <table id='table'>
          <thead>
              <tr>
                  <th>eset</th>
                  <th></th>
                  <th>Leírás</th>
              </tr>
          </thead>
          <tbody>
            {tableContents.map(({eset, leirasok}, i) => (<Table _eset={eset} _leirasok={leirasok} _remove={() => setTableContents(c => RemoveAtIndex(c, i))}/>))}
          </tbody>
          <button id='add-btn' onClick={() => {
            setTableContents(c => [...c, (<Table />)])
          }}>+</button>
          <button id='save-btn' onClick={() => {
            toPng(document.getElementById("table"), { cacheBust: true, })
            .then((dataUrl) => {
              const link = document.createElement('a')
              link.download = 'diagram.png'
              link.href = dataUrl
              link.click()
            })
            .catch((err) => {
              console.log(err)
            })
          }}>🖫</button>
      </table>
    </div>
  );
}

export default App;
