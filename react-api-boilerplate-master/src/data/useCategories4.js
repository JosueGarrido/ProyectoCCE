/**
 * Created by chalosalvador on 8/18/20
 */
import useSWR from 'swr';
import API from './index';

export const useCategories4 = () => {
    const { data, error } = useSWR( `/category2`, API.fetcher );

    return {
        categories: data && data.data,
        isLoading: !error && !data,
        isError: error
    };
};
