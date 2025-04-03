import { useEffect, useState } from "react"

export default function Table({_eset = "", _leirasok = ["", "", ""], _remove})
{
    const [_, setTableData] = useState({eset: _eset, leirasok: _leirasok});

    return (
        <>
            <tr className="main">
                <td rowSpan="3" contentEditable onInput={e => {setTableData(c => ({eset: e.target.innerText, leirasok: c.leirasok}))}}>{_eset}</td>
                <td><strong>GIVEN</strong></td>
                <td contentEditable onInput={e => {setTableData(c => ({eset: c.eset, leirasok: [e.target.innerText, c.leirasok[1], c.leirasok[2]]}))}}>{_leirasok[0]}</td>
            </tr>
            <tr className="sub">
                <td><strong>WHEN</strong></td>
                <td contentEditable onInput={e => {setTableData(c => ({eset: c.eset, leirasok: [c.leirasok[0], e.target.innerText, c.leirasok[2]]}))}}>{_leirasok[1]}</td>
                <button className="remove-btn" tabIndex={-1} onClick={_remove}>Remove</button>
            </tr>
            <tr className="sub">
                <td><strong>THEN</strong></td>
                <td contentEditable onInput={e => {setTableData(c => ({eset: c.eset, leirasok: [c.leirasok[0], c.leirasok[1], e.target.innerText]}))}}>{_leirasok[2]}</td>
            </tr>
        </>
    )
}