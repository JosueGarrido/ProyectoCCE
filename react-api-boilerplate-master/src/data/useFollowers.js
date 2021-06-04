import useSWR from 'swr';
import API from './index';

export const useFollowers = ( id, options= {} ) => {
    const { data, error, mutate } = useSWR( `/users/${ id }/follower`, API.fetcher, options );

    return {
        followers: data && data.data,
        isLoading: !error && !data,
        isError: error,
        mutate

    };
};
