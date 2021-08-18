import useSWR from 'swr';
import API from './index';

export const useDateSalesFilter = ( first,end ) => {
    const { data, error, mutate } = useSWR( () => `/timeSales/${ first }/${ end }`, API.fetcher );
    return {
        dateFilter: data && data.data,
        isLoading1: !error && !data,
        isError1: error,
        mutate
    };
};
