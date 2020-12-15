import useSWR from 'swr';
import API from './index';

export const useReputationList = () => {
    const { data, error, mutate } = useSWR( '/reputations', API.fetcher );

    return {
        reputations: data && data.data,
        isLoading: !error && !data,
        isError: error,
        mutate
    };
};
