import useSWR from 'swr';
import API from './index';

export const useSalesList = () => {
    const { data, error, mutate } = useSWR( `/sales`, API.fetcher );

    return {
        sales: data && data.data,
        isLoading: !error && !data,
        isError: error,
        mutate
    };
};
