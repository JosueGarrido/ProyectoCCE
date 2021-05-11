import useSWR from 'swr';
import API from './index';

export const useQuestionComments = ( id ) => {
    const { data, error, mutate } = useSWR( () => `/products/${ id }/questions`, API.fetcher );
    return {
        questions: data && data.data,
        isLoading: !error && !data,
        isError: error,
        mutate
    };
};
