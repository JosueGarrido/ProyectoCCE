import useSWR from 'swr';
import API from './index';

export const useArtist = ( id, options= {} ) => {
    const { data, error, mutate } = useSWR( `/artists/${ id }`, API.fetcher, options );

    return {
        artist: data && data.data,
        isLoading: !error && !data,
        isError: error,
        mutate

    };
};
