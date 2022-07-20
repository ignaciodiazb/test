import React from 'react';
import { formatDate } from '../utils/formatDate';

const Table = ({ data }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Profundidad (km)</th>
          <th>Magnitud</th>
          <th>Ref. Geográfica</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.Fecha}>
            <td>{formatDate(item.Fecha)}</td>
            <td>{item.Profundidad}</td>
            <td>{item.Magnitud}</td>
            <td>{item.RefGeografica}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
