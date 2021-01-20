<<<<<<< HEAD
import useSWR from 'swr';
import API from './index';

export const useUser = (id) => {
    const { data, error, mutate } = useSWR( `/users/${ id }/`, API.fetcher );
=======
/**
 * Created by chalosalvador on 8/18/20
 */
import useSWR from 'swr';
import API from './index';

export const useUser = ( id, options= {} ) => {
    const { data, error } = useSWR( `/users/${ id }`, API.fetcher, options );
>>>>>>> dev

    return {
        user: data && data.data,
        isLoading: !error && !data,
<<<<<<< HEAD
        isError: error,
        mutate
=======
        isError: error
>>>>>>> dev
    };
};
