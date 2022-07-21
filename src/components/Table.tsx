import React from 'react';
import { formatDate } from '../utils/formatDate';
import { SismosInformation, Sismo } from '../utils/types';

const Table = ({ data }: SismosInformation) => {
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
        {data && data.map((item: Sismo) => (
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
