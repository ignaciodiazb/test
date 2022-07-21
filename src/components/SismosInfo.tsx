import React, { useState } from 'react';
import Table from './Table';
import BarChart from './BarChart';
import PaginationButton from './PaginationButton';
import { SismosInformation } from '../utils/types';

const SismosInfo = (props: SismosInformation) => {
  const [page, setPage] = useState<number>(1);
  const resultsPerPage = 10;
  const indexOfLastItem = page * resultsPerPage;
  const indexOfFirstItem = indexOfLastItem - resultsPerPage;
  const sismosData = props.data?.slice(indexOfFirstItem, indexOfLastItem) || [];
  const totalPages =
    props.data && Math.ceil(props.data.length / resultsPerPage);
  return (
    <div>
      <p>
        Resultados totales: <b>{props.data && props.data.length}</b>
      </p>
      <p>
        Página {page} de {totalPages}
      </p>
      <Table data={sismosData} />
      <BarChart data={sismosData} />
      <div className="buttons">
        <PaginationButton
          handleClick={() => setPage((prevState) => prevState - 1)}
          isDisabled={page === 1}
        >
          Anterior
        </PaginationButton>
        <PaginationButton
          handleClick={() => setPage((prevState) => prevState + 1)}
          // prettier-ignore
          isDisabled={page === totalPages}
        >
          Siguiente
        </PaginationButton>
      </div>
    </div>
  );
};

export default SismosInfo;
