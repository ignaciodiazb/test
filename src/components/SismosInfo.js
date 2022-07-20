import React, { useState } from 'react';
import Table from './Table';
import BarChart from './BarChart';
import PaginationButton from './PaginationButton';

const SismosInfo = ({ data }) => {
  const [page, setPage] = useState(1);
  const resultsPerPage = 10;
  const indexOfLastItem = page * resultsPerPage;
  const indexOfFirstItem = indexOfLastItem - resultsPerPage;
  const sismosData = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / resultsPerPage);
  return (
    <div>
      <p>
        Resultados totales: <b>{data.length}</b>
      </p>
      <p>
        Página {page} de {totalPages}
      </p>
      <Table data={sismosData} />
      <BarChart data={sismosData} />
      <div className="buttons">
        <PaginationButton
          onClick={() => setPage((prevState) => prevState - 1)}
          isDisabled={page === 1}
        >
          Anterior
        </PaginationButton>
        <PaginationButton
          onClick={() => setPage((prevState) => prevState + 1)}
          // prettier-ignore
          isDisabled={(page * resultsPerPage) >= data.length}
        >
          Siguiente
        </PaginationButton>
      </div>
    </div>
  );
};

export default SismosInfo;
