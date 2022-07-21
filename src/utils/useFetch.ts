import { useState, useEffect } from 'react';
import { Sismo } from './types';

type FetchData = {
  data: Sismo[] | null;
  loading: boolean;
};

const useFetch = (url: string): FetchData => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, loading };
};

export default useFetch;
