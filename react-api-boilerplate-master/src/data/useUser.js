import useSWR from 'swr';
import API from './index';

export const useUser = (id) => {
    const { data, error, mutate } = useSWR( `/users/${ id }/`, API.fetcher );

    return {
        user: data && data.data,
        isLoading: !error && !data,
        isError: error,
        mutate
    };
};
