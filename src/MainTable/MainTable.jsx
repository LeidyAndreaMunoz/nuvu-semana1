import React from 'react';
import './MainTable.css';

export const MainTable = () =>{
    return (
        <table className="table" id="MainTable">
            <tbody>
                <tr>
                <td>Inversión</td>
                <td className="price">$1.600.000</td>
                </tr>
                <tr>
                <td>Rendimiento</td>
                <td className="price">-$30.000</td>
                </tr>
            </tbody>
        </table>
    )
}